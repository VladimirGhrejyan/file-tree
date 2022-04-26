import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { setCurrentFolder } from '../store/reducers/folderReducer'

const useFolders = () => {
  const dispatch = useDispatch()

  const createFolder = (id, name, obj) => {
    if (obj.id === id) {
      obj.subfolders.push({
        subfolders: [],
        parentId: id,
        id: uuidv4(),
        title: name,
      })
      dispatch(setCurrentFolder(obj))
    } else {
      for (let i = 0; i < obj.subfolders.length; i++) {
        createFolder(obj.subfolders[i], id)
      }
    }
    localStorage.setItem('root', JSON.stringify(obj))
  }

  return { createFolder }
}

export default useFolders
