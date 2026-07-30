import express from 'express'
import {soldierMidell, benfitMidell} from '../midellwhers/soldiers.js'
import controlers from '../controlers/soldiers.js'

const router = express.Router()

router.post("", soldierMidell, controlers.create)
router.get("",controlers.getsoldier)
router.patch("",benfitMidell, controlers.update)

export default router