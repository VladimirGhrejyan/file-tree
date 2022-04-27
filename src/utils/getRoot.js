import { v4 as uuidv4 } from 'uuid'

const getRoot = () => {
  if (!localStorage.getItem('root')) {
    localStorage.setItem(
      'root',
      JSON.stringify({
        id: uuidv4(),
        parentId: null,
        subfolders: [],
        title: 'rootFolder',
      })
    )
  }

  return JSON.parse(localStorage.getItem('root'))
}

const root = getRoot()

export default root
