import React from 'react'
import { useSelector } from 'react-redux'
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
    <button onClick={handleNavigateToFolder}>
      {folder.title}
    </button>
  )
}

export default NavigationItem
