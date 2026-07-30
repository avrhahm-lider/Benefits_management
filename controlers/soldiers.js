import soldeirsSer from '../services/soldiers.service.js'

async function create(req, res) {
    try{
        const {soldierId} = req.params
        const result = await soldeirsSer.createSoldier(soldierId, req.body)
        res.status(201).json(result)
    }catch (err){
        const status = err.status || 500
        const message = err.message || err
        res.status(status).json(message)        
    }

}

async function getsoldier(req, res) {
    try{
        const {soldierId} = req.params
        const result = await soldeirsSer.getSoldier(soldierId)
        res.status(200).json(result)
    }catch (err){
        const status = err.status || 500
        const message = err.message || err
        res.status(status).json(message)        
    }

}

async function update(req, res) {
    try{
        const {soldierId} = req.params
        const result = await soldeirsSer.updtebenefits(soldierId, req.body)
        res.status(200).json(result)
    }catch (err){
        const status = err.status || 500
        const message = err.message || err
        res.status(status).json(message)        
    }

}

export default {create, getsoldier, update}