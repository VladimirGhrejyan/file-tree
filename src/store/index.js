import { createStore, combineReducers } from 'redux'
import folderReducer from './reducers/folderReducer'

const rootReducer = combineReducers({
  folder: folderReducer,
})

export const store = createStore(rootReducer)
