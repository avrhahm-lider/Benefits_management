import { Soldier, bebefit } from '../modules/modules.js'
import { bodyEror } from './bodyError.js'


export function soldierMidell(req, res, next) {
    const safe = Soldier.safeParse(req.body)
    if (safe.success)
        next()
    else 
        next(bodyEror())
}

export function benfitMidell(req, res, next) {
        const safe = bebefit.safeParse(req.body)
    if (safe.success)
        next()
    else 
        next(bodyEror())
}

