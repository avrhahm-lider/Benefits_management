import {budgetMidell, spendMidell} from '../midellwhers/budget.js'
import conrolers from '../controlers/budget.js'
import express from 'express'


const router = express.Router()

router.post("",budgetMidell, conrolers.create)
router.get("",conrolers.getbudght)
router.post("/:id/transactions", spendMidell, conrolers.createTranseac)
router.get("/:id/transactions",conrolers.getTranseac)

export default router