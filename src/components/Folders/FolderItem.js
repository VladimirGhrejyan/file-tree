import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentFolder } from '../../store/reducers/folderReducer'

const FolderItem = ({ folder }) => {
  const dispatch = useDispatch()

  const handleOpenFolder = () => {
    dispatch(setCurrentFolder(folder))
  }

  return (
    <button onClick={handleOpenFolder}>
      {folder.title}
    </button>
  )
}

export default FolderItem
