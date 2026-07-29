import client from '../db/supaBaseConnection.js'

async function createbudget(budget) {
    return client.from("budgets").insert(budget)
}

async function getbudgetsByquery(query) {
    return client.from("budgets").select(query)
}

async function getbudgets() {
    return client.from("budgets").select()
}