import { configureStore } from "@reduxjs/toolkit";
import userName from './slices/UserName.slices.js'

export default configureStore(
    {
        reducer:{
        userName
        }
    }
)