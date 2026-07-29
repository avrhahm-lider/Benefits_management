import client from '../db/supaBaseConnection.js'

async function getAmountById(budgetID) {
    return client.from("spends").select("amount").eq(budgetId, budgetID)
}

async function getspendById(budgetID) {
    return client.from("spends").select().eq(budgetId, budgetID)
}

export default {getAmountById, getspendById}