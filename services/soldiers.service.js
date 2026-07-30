
import soldierDal from '../DAL/welfareRecord.dal.js'
import { createError } from './createError.js'
import { GiftCard, diningHall} from '../modules/modules.js'


function isSoldier(soldier){
    if (!soldier)
        throw createError(404, "soldier not found")
}
function detailValid(benefitType, detail){
    if (benefitType === "diningHall"){
        const seec = diningHall.safeParse(detail)
        if (!seec.success)
            throw createError(400, "invalid details")
        return
    }
    const seec = GiftCard.safeParse(detail)
    if (!seec.success)
        throw createError(400, "invalid details")
    return

}
function isRole(date =""){
    date = date.slice(0,10)
    const diff = new Date(date) - new Date("")
    const res = diff/ 1000*60*60*24


}
function createPeriod(body){
    return {
        startDate : body.startDate,
        decisionResone: body.decisionResone,
        budgetApproved : body.budgetApproved,
        benefitType : body.benefitType,
        details : body.details
    }
}

async function createSoldier(soldierID, body) {
    detailValid(body.benefitType, body.details)
    const isSoldier = await soldierDal.getSoldier(soldierID)
    console.log(isSoldier);
    
    if (isSoldier)
        throw createError(409, "soldier alrady exsist")
        if (!body.startDate)
            body.startDate = new Date().toLocaleDateString()

    const soldier = {
        soldierId: soldierID,
        unit: body.unit,
        currentBenefitType: body.benefitType,
        history: [createPeriod(body)]
    }
    return soldierDal.createSoldier(soldier)
}

async function getSoldier(id) {
    const soldier = await soldierDal.getSoldier(id)
    return soldier
}
function updatePeriod(body){
    return {
        startDate : body.decisionDate,
        decisionResone: body.decisionResone,
        budgetApproved : body.budgetApproved,
        benefitType : body.benefitType,
        details : body.details
    }
}

async function updtebenefits(soldierId, body) {

    if (!body.decisionDate)
        body.decisionDate = new Date().toLocaleDateString()
    const soldier = await soldierDal.getSoldier(soldierId)
    isSoldier(soldier)
    soldier.history[soldier.history.length -1].endDate = body.decisionDate
    soldier.history.push(updatePeriod(body))
    const res = await soldierDal.updatehistory(soldierId, {history : soldier.history, currentBenefitType : body.benefitType})
    return res
    


}
// console.log(new Date(new Date("7/29/2026") - new Date("4/29/2026")));
// getSoldier("6a5f8154003c7c884aded7ce")
// updtebenefits("6a5f8154003c7c884aded7ce", {})

export default {createSoldier, getSoldier, updtebenefits}