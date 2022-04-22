import {v4 as uuidv4} from 'uuid'

const useFolders = () => {
    const getRoot = () => {
        let root

        if (!localStorage.getItem('root')) {
            localStorage.setItem('root', {
                id: uuidv4(),
                subfolders: [],
                name: 'rootFolder'
            })
        }

        root = localStorage.getItem('root')

        return root
    }

    const root = getRoot()

    const createFolder = (id, name, root) => {
        const newFolder = {
            subfolders: [],
            id: uuidv4(),
            title: name
        }

        const addSubfolder = (obj, id) => {
            if (obj.id !== id && obj.subfolders.length) {
                for (let i = 0; i < obj.subfolders.length; i++) {
                    return addSubfolder(obj.subfolders[i], id)
                }
            } else if (obj.id !== id) {
                return
            }
        
            obj.subfolders.push(newFolder)
        }
        
        for (let i = 0; i < root.subfolders.length; i++) {
            addSubfolder(root.subfolders[i], id)
        }

        localStorage.setItem('root', root)
    }

    return {root, createFolder}
}

export default useFolders