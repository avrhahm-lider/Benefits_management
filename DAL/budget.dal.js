import client from '../db/supaBaseConnection.js'

async function createbudget(budget) {
    return await client.from("budgets").insert(budget).select().single
}

async function getbudgetsByquery(query) {
    return client.from("budgets").select().or(query)
}

async function getbudgets() {
    return client.from("budgets").select()
}
async function getbudgetsById(id) {
    return client.from("budgets").select().eq("id",id)
}
export default {createbudget, getbudgetsByquery,getbudgets, getbudgetsById}

// const res = await client.from("posts").select("*").eq("description", "sdfghn")
// console.log(res);
