
import budgetDal from '../DAL/budget.dal.js'
import spend from '../DAL/spend.dal.js'
import { createError } from './createError.js'

function createSpendObj(id, body){
    return{
        budgetId: id,
        amount: body.amount,
        reason : body.reason
    }
}
async function sumryspend(id){
    let amounts =[]
    if (id)
        amounts = await spend.getAmountById(id)
    else 
        amounts = await spend.getAmount()
    return amounts.data.reduce((sum, val) => sum + val.amount, 0)
}
async function creartBudgetbody(body) {
    const res = await budgetDal.getbudgets()
    const data = res.data
    for (let budget of data)
        if (budget.unit === body.unit && budget.bebefitType === body.bebefitType && budget.month === body.month)
            throw createError(409, "budget allrady exsist")
    return budgetDal.createbudget(body)
}

async function getBudget(params) {
    console.log(params);
    
    let res 
    if (Object.keys(params).length === 0){
        res = await budgetDal.getbudgets()
    }
    else{    
        const {unit, month, bebefitType} = params
        let query = ""
        if (unit)
            query += `unit.eq.${unit},`
        if (month)
            query += `month.eq.${month},`
        if (bebefitType)
            query += `bebefitType.eq.${bebefitType},`
        if (!query)
            res = await budgetDal.getbudgets()
        console.log(query.slice(0,-1));
        
        res = await budgetDal.getbudgetsByquery(query.slice(0,-1))
        }
        
        return res.data.map(val => {
            const spentAmount = sumryspend(val.id)
            const remainingAmount = val.allocatedAmount - spentAmount
            val.spentAmount = spentAmount
            val.remainingAmount = remainingAmount
            return val

        })

}

async function getTranseac(id) {
    const res = await budgetDal.getbudgetsById(id)
    
    if (!res.data)
        throw createError(404, "not found")
    const data = await spend.getspendById(res.data.id)
        if (!data.data)
        throw createError(404, "no transactions")
    return data.data
}
async function updtebenefits(id, body){
    const res = await budgetDal.getbudgetsById(id)
    if (!res.data)
        throw createError(404, "not found")
    console.log(await sumryspend());
    console.log(res);
    
    const remainingAmount = res.data.allocatedAmount - ((await sumryspend()) + body.amount)
    console.log(remainingAmount);
    
    if ( remainingAmount < 0)
        throw createError(409, JSON.stringify({
    error: "bla",
    remainingAmount: remainingAmount
    }))
    return spend.createSpend(createSpendObj(id, body)) 
}
export default {creartBudgetbody,getBudget,getTranseac, updtebenefits}
// const a =[]
// a.reduce