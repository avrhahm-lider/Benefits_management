import { ObjectId } from "mongodb";
import db  from "../db/mongoDbConnection.js";

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

export default {getSoldier, createSoldier,updatehistory, ObjectId}


