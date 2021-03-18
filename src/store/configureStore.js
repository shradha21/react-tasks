import {createStore,combineReducers,applyMiddleware} from 'redux'
import Thunk from 'redux-thunk'
import searchAction from '../actions/searchAction'

const configureStore=()=>{
    const store=createStore(combineReducers({
        search: searchReducer
    }),applyMiddleware(Thunk))
    return store
}

export default configureStore
