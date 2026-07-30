import express from 'express'
import soldierRouter from './routers/soldiers.js'
import budgetRouter from './routers/budget.js'
import dotenv from 'dotenv/config'

const app = express()

app.use(express.json())
app.use("/soldiers/:soldiersId/benefits", soldierRouter)
app.use("/budget", budgetRouter)
app.use((err, req, res, next) =>{
    console.log(err);
    const status = err.status || 500
    const message = err.message || err
    res.status(status).json(message)

    
})

app.listen(process.env.PORT, () =>{
    console.log(`server runnig in http://${process.env.PORT}`);
    
})