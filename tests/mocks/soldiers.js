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