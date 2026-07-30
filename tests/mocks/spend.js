FAKE_BODY = {
    amount: 500,
    reson: "VVVVVV"
}

async function createSpend(spend) {
    return         [{
            "id": 1,
            "created_at": "2026-07-30T12:39:23.850592+00:00",
            "budgetId": 1,
            "amount": 500,
            "reson": null
        }];
    
}

async function getspendById(budgetID) {
    return         {
            "id": 1,
            "created_at": "2026-07-30T12:39:23.850592+00:00",
            "budgetId": 1,
            "amount": 500,
            "reson": null
        }
}
async function getAmountById(budgetID) {
    return {"amount": 500}
}

async function getAmount() {
    return {"amount": 500}
}