import budghtSer from '../services/budget.service.js'

async function create(req, res) {
    try{
        const result = await budghtSer.creartBudgetbody(req.body)
        res.status(201).json(result)
    }catch (err){
        const status = err.status || 500
        const message = err.message || err
        res.status(status).json(message)        
    }

}

async function getbudght(req, res) {
    try{
        const result = await budghtSer.getBudget(req.params)
        res.status(200).json(result)
    }catch (err){
        const status = err.status || 500
        const message = err.message || err
        res.status(status).json(message)        
    }

}

async function getTranseac(req, res) {
    try{
        const {id} = req.params
        const result = await budghtSer.getTranseac(id)
        res.status(200).json(result)
    }catch (err){
        const status = err.status || 500
        const message = err.message || err
        res.status(status).json(message)        
    }

}

async function createTranseac(req, res) {
    try{
        const {id} = req.params
        const result = await budghtSer.updtebenefits(id, req.body)
        res.status(200).json(result)
    }catch (err){
        const status = err.status || 500
        const message = err.message || err
        res.status(status).json(message)        
    }

}

export default {create, getbudght,getTranseac, createTranseac}