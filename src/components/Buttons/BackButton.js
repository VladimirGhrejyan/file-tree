import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import { CaretLeftFilled } from '@ant-design/icons'
import useFolders from '../../hooks/useFolders.hook'

const BackButton = () => {
  const previousFolders = useSelector(
    (state) => state.folder.previousFolders
  )
  const folder = useSelector(
    (state) => state.folder.currentFolder
  )
  const { navigateToFolder } = useFolders()

  const handleButtonClick = () => {
    console.log(previousFolders)
    navigateToFolder(folder.parentId, previousFolders)
  }

  return (
    <Button
      icon={<CaretLeftFilled />}
      size='large'
      onClick={handleButtonClick}
      disabled={!previousFolders.length}
    >
      Back
    </Button>
  )
}

export default BackButton
