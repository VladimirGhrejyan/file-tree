import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { FolderFilled } from '@ant-design/icons'
import { setCurrentFolder } from '../../store/reducers/folderReducer'
import useFolders from '../../hooks/useFolders.hook'

const FolderItem = ({ folder }) => {
  const root = useSelector((state) => state.folder.rootFolder)
  const { addPrevious } = useFolders()
  const dispatch = useDispatch()

  const handleOpenFolder = () => {
    addPrevious(folder.parentId, root)
    dispatch(setCurrentFolder(folder))
  }

  return (
    <Button
      icon={<FolderFilled />}
      onClick={handleOpenFolder}
      size='large'
    >
      {folder.title}
    </Button>
  )
}

export default FolderItem
