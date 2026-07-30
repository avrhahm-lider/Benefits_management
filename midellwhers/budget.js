import { Budget, Spend } from '../modules/modules.js'
import { bodyEror } from './bodyError.js'


export function budgetMidell(req, res, next) {
        const safe = Budget.safeParse(req.body)
    if (safe.success)
        next()
    else 
        next(bodyEror())
}

export function spendMidell(req, res, next) {
        const safe = Spend.safeParse(req.body)
    if (safe.success)
        next()
    else 
        next(bodyEror())
}