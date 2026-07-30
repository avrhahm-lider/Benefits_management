import { Soldier, bebefit } from '../modules/modules.js'


export function soldierMidell(req, res, next) {
    const safe = Soldier.safeParse(req.body)
    if (safe.success)
        next()
    else 
        next("invalid body")
}

export function benfitMidell(req, res, next) {
        const safe = bebefit.safeParse(req.body)
    if (safe.success)
        next()
    else 
        next("invalid body")
}

