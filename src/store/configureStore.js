import {createStore,combineReducers,applyMiddleware} from 'redux'
import Thunk from 'redux-thunk'
import reverseReducer from '../reducers/reverseReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
        reverse: reverseReducer
    }),applyMiddleware(Thunk))
    return store
}

export default configureStore
