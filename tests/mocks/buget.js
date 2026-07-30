BODGET_FAKE_BODY = {
        unit : "8200",
        benefitType: "giftCard",
        month: "2004-05",
        allocatedAmount : 450
}

async function createbudget(budget) {
    console.log(budget)
    return await client.from("budgets").insert(budget).select().single()
}

async function getbudgetsByquery(query) {
    return client.from("budgets").select().or(query)
}

async function getbudgets() {
    return client.from("budgets").select()
}
async function getbudgetsById(id) {
    return client.from("budgets").select().eq("id",id).single()
}
export default {createbudget, getbudgetsByquery,getbudgets, getbudgetsById}