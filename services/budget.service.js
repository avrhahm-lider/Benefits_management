
import budgetDal from '../DAL/budget.dal.js'
import spend from '../DAL/spend.dal.js'
import { createError } from './createError.js'


async function creartBudgetbody(body) {
    const res = await budgetDal.getbudgets()
    const data = res.data
    for (let budget of data)
        if (budget.unit === body.unit && budget.bebefitType === body.bebefitType && budget.month === body.month)
            throw createError(409, "budget allrady exsist")
    return budgetDal.createbudget()
    //לא מחזיר את ההקצעה אני צריך לתקן

}

async function getBudget(params) {
    const {unit, month, bebefitType} = params

}

export default {creartBudgetbody,getBudget}