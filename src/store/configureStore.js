import {createStore,combineReducers,applyMiddleware} from 'redux'
import Thunk from 'redux-thunk'

const configureStore=()=>{
    const store=createStore(combineReducers({
        
    }),applyMiddleware(Thunk))
    return store
}

export default configureStore