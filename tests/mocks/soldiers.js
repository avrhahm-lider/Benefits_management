FAKE_ID ="1R2R3R4"

FAKE_SOLDIER_BODY = {
    unit : "MOMO",
    benefitType: "giftCard",
    details: {
        cardProvider: "AVI",
        monthlyvalue: 30,
        validMerchants: "asd"
    },
    decisionReason : "becous",
    budgetApproved: true,
    startDate : z.string().default("")
}

FAKE_UPDATE_BODY ={
    benefitType: "giftCard",
    details: {
        cardProvider: "AVI",
        monthlyvalue: 30,
        validMerchants: "asd"
    },
    decisionReason : "ani roze",
    budgetApproved: false,
    decisionDate : z.string()
}

const welfareRecord = db.collection("welfareRecord")
async function getSoldier(id) {
    return welfareRecord.findOne({soldierId: id})
}

async function createSoldier(soldier){
    const res = await welfareRecord.insertOne(soldier)
    return {_id: res.insertedId, ...soldier}
}

async function updatehistory(id, benefitperiod) {
    return welfareRecord.findOneAndUpdate({soldierId: id}, {$set :benefitperiod})
}
