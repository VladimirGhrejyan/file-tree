import { useDispatch } from 'react-redux'
import {
  setCurrentFolder,
  addPreviousFolder,
  changePreviousFolders,
  setRootFolder,
} from '../store/reducers/folderReducer'

const useFolders = () => {
  const dispatch = useDispatch()

  const createFolder = (newFolder, rootFolder) => {
    if (rootFolder.id === newFolder.parentId) {
      rootFolder.subfolders.push(newFolder)
    } else {
      for (let i = 0; i < rootFolder.subfolders.length; i++) {
        createFolder(newFolder, rootFolder.subfolders[i])
      }
    }
    dispatch(setRootFolder(rootFolder))
  }

  const addPrevious = (id, rootFolder) => {
    if (rootFolder.id === id) {
      dispatch(addPreviousFolder(rootFolder))
    } else {
      for (let i = 0; i < rootFolder.subfolders.length; i++) {
        addPrevious(id, rootFolder.subfolders[i])
      }
    }
  }

  const navigateToFolder = (id, folders) => {
    const index = folders.findIndex((item) => item.id === id)
    const newFolders = folders.slice(0, index)
    dispatch(setCurrentFolder(folders[index]))
    dispatch(changePreviousFolders(newFolders))
  }

  const openFolder = (id, rootFolder) => {
    if (rootFolder.id === id) {
      dispatch(setCurrentFolder(rootFolder))
    } else {
      for (let i = 0; i < rootFolder.subfolders.length; i++) {
        openFolder(id, rootFolder.subfolders[i])
      }
    }
  }

  return {
    createFolder,
    addPrevious,
    navigateToFolder,
    openFolder,
  }
}

export default useFolders
