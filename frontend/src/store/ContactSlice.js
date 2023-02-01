import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const conatctSlice=createSlice({
    name:"contact",
    initialState:[
        {
            id:uuidv4(),
            name:"RANIA",
            age:21,
            email:'bzrania@gmail.com',
            description : 'hi,im a frontend developer'
        },
        {
            id:uuidv4(),
            name:"MED",
            age:30,
            email:'medali@gmail.com',
            description : 'hi,im a backend developer'

        }
    ],
    reducers:{
        setContact:(state,action)=>{
   return action.payload
        }
    }
})

export const {setContact} = conatctSlice.actions
export default conatctSlice.reducer