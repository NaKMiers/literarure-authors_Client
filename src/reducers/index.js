import { combineReducers } from 'redux'
import admin from './adminReducer'
import datas from './dataReducer'

const reducers = combineReducers({ admin, datas })

export default reducers
