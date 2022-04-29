import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import folderReducer from './reducers/folderReducer'

const rootReducer = combineReducers({
  folder: folderReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools()
)
