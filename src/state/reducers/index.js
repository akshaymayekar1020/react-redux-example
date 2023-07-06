
import { combineReducers } from "redux";
import bankReducer from "./bankReducer"
import userReducer from './userReducer'
import productReducer from './productReducer'

const reducers = combineReducers({
    bank: bankReducer,
    user:userReducer,
    prod:productReducer
})

export default reducers
