import client from '../db/supaBaseConnection.js'

// async function createbudget(budget) {
//     return await client.from("budgets").insert(budget)
// }

// async function getbudgetsByquery(query) {
//     return client.from("budgets").select(query)
// }

// async function getbudgets() {
//     return client.from("budgets").select()
// }

// export default {createbudget, getbudgetsByquery,getbudgets}

const res = await client.from("posts").select("*").eq("description", "avi")
console.log(res);
