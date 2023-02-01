const express = require ("express")
const connectdb = require("./config/connectdb")
const app  = express()
const contactRouter = require('./routes/contact')


const port = 5001

app.use('/api/user',contactRouter)

app.use(express.json())
//connect the database 
connectdb()

app.listen(port,err =>{
    err?console.log(err) : console.log (`you did it go to the port num : ${port}`)
})