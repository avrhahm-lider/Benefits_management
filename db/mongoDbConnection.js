import {MongoClient} from 'mongodb'
import dotenv from 'dotenv/config'
import dns from 'dns'
dns.setServers(["1.1.1.1", "8.8.8.8"])

const client = new MongoClient(process.env.MONGO_URI)

try {
    await client.connect()
    console.log("mnogodb connected seccfuly");
    
} catch (err) {
    console.log("mongodb failed to connect", {message: err});
    process.exit()
}

const db = client.db("welfare")
export default db
