import { configureStore } from "@reduxjs/toolkit";
import conatctSlice from './ContactSlice'
export default configureStore({
    reducer:{
        contact:conatctSlice
    }
})