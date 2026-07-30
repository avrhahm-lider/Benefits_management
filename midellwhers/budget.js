import { Budget, Spend } from '../modules/modules.js'

export function budgetMidell(req, res, next) {
        const safe = Budget.safeParse(req.body)
    if (safe.success)
        next()
    else 
        next("invalid body")
}

export function spendMidell(req, res, next) {
        const safe = Spend.safeParse(req.body)
    if (safe.success)
        next()
    else 
        next("invalid body")
}