import { ObjectId } from "mongodb";
import db  from "../db/mongoDbConnection.js";

const welfareRecord = db.collection("welfareRecord")
async function getSoldier(id) {
    return welfareRecord.findOne({_id: ObjectId.isValid(id)})
}

async function createSoldier(soldier){
    const res = await welfareRecord.insertOne(soldier)
    return {_id: res.insertedId, ...soldier}
}

async function updatehistory(benefitperiod) {
    return welfareRecord.updateOne({_id: new ObjectId(id)}, {$set :benefitperiod})
}

export default {getSoldier, createSoldier,updatehistory}