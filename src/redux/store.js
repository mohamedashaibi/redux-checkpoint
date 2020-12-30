import {createStore} from 'redux'
import rootReducer from './reducers'
const compose = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const initialeState={}
const store = createStore(rootReducer,initialeState,compose)
export default store