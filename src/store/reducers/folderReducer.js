import root from '../../utils/getRoot'

const defaultState = {
  currentFolder: root,
}

const folderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_FOLDER':
      return {
        ...state,
        currentFolder: action.payload,
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
