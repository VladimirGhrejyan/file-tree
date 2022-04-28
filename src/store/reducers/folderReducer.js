import { root, setRoot } from '../../utils/root'

const defaultState = {
  currentFolder: root,
  rootFolder: root,
  previousFolders: [],
}

const folderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_FOLDER':
      return {
        ...state,
        currentFolder: action.payload,
      }
    case 'SET_ROOT':
      setRoot(action.payload)
      return {
        ...state,
        rootFolder: action.payload,
      }
    case 'ADD_PREVIOUS':
      return {
        ...state,
        previousFolders: [
          ...state.previousFolders,
          action.payload,
        ],
      }
    case 'CHANGE_PREVIOUS':
      return {
        ...state,
        previousFolders: action.payload,
      }
    default:
      return state
  }
}

export default folderReducer
export const setCurrentFolder = (folder) => ({
  type: 'SET_FOLDER',
  payload: folder,
})
export const setRootFolder = (folder) => ({
  type: 'SET_ROOT',
  payload: folder,
})
export const addPreviousFolder = (folder) => ({
  type: 'ADD_PREVIOUS',
  payload: folder,
})
export const changePreviousFolders = (folders) => ({
  type: 'CHANGE_PREVIOUS',
  payload: folders,
})
