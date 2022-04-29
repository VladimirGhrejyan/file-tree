import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import useFolders from '../../hooks/useFolders.hook'

const NavigationItem = ({ folder }) => {
  const { navigateToFolder } = useFolders()
  const previousFolders = useSelector(
    (state) => state.folder.previousFolders
  )
  const handleNavigateToFolder = () => {
    navigateToFolder(folder.id, previousFolders)
  }

  return (
    <Button type='link' onClick={handleNavigateToFolder}>
      {folder.title}
    </Button>
  )
}

export default NavigationItem
