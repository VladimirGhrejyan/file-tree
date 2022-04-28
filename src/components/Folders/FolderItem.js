import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentFolder } from '../../store/reducers/folderReducer'
import useFolders from '../../hooks/useFolders.hook'
// import { root } from '../../utils/root'

const FolderItem = ({ folder }) => {
  const root = useSelector((state) => state.folder.rootFolder)
  const { addPrevious } = useFolders()
  const dispatch = useDispatch()

  const handleOpenFolder = () => {
    addPrevious(folder.parentId, root)
    dispatch(setCurrentFolder(folder))
  }

  return (
    <button onClick={handleOpenFolder}>{folder.title}</button>
  )
}

export default FolderItem
