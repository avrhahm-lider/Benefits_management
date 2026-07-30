import client from '../db/supaBaseConnection.js'

async function createSpend(spend) {
    return client.from("spends").insert(spend).select().single()
}

async function getspendById(budgetID) {
    return client.from("spends").select().eq("budgetId", budgetID)
}
async function getAmountById(budgetID) {
    return client.from("spends").select("amount").eq("budgetId", budgetID)
}

async function getAmount() {
    return client.from("spends").select("amount")
}
export default {getAmountById, getspendById, createSpend,getAmount}