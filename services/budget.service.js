
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
    let amounts
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
    return budgetDal.createbudget()
}

async function getBudget(params) {
    let res 
    if (Object.keys(params).length === 0)
        res = await budgetDal.getbudgets()
    else{    const {unit, month, bebefitType} = params
        let query = ""
        if (unit)
            query += `unit.eq.${unit}`
        if (month)
            query += `month.eq.${month}`
        if (bebefitType)
            query += `bebefitType.eq.${bebefitType}`
        if (!query)
            throw createError(400, "invalid query")
        res = await budgetDal.getbudgetsByquery(query)
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
    return spend.getspendById(res.data.id)
}
async function updtebenefits(id, body){
    const res = await budgetDal.getbudgetsById(id)
    if (!res.data)
        throw createError(404, "not found")
    const remainingAmount = res.allocatedAmount - (sumryspend() + body.amount)
    if ( remainingAmount < 0)
        throw createError(409, {
    error: "bla",
    remainingAmount: remainingAmount
    })
    return spend.createSpend(createSpendObj(id, body)) 
}
export default {creartBudgetbody,getBudget,getTranseac, updtebenefits}
// const a =[]
// a.reduce