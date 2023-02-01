const express = require('express')

const contactRouter = express.Router()

const ContactSchema= require('../model/contact')

//get all the user list 
contactRouter.get('/getuser',async(req,res)=>{
    try{
        const contacts = await ContactSchema.find()
        res.status(200).json({msg:'this is the user list',contacts})
    }catch(err){
        console.log(err)
    }
})



//add a new user
contactRouter.post('/adduser',async(req,res)=>{
    try{
   const newContact =  await new ContactSchema(req.body)
    newContact.save()
     res.status(200).json({msg:'you can add a new contact',newContact})
    }catch(err){
        console.log(err)
    }
})


//update a user by id

contactRouter.put('/updateuser/:id',async(req,res)=>{
    try{
const {id}=req.params
const updateuser = await  ContactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
res.status(200).json({msg:"you could update me",updateuser})
    }catch(err){
        console.log(err)
    }
})


//delete a user 
contactRouter.delete('/deleteuser/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const deletcont = await ContactSchema.findByIdAndDelete(id)
        res.status(200).json({msg:'you deleted that user'})
    }catch(err){
        console.log(err)
    }
})


//get user by id

contactRouter.get('/getuser/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const getuniqueuser = await ContactSchema.findById(id)
        res.status(200).json({msg:'you found that user',getuniqueuser})
    }catch(err){
        console.log(err)
    }
})




module.exports= contactRouter