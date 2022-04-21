import React from 'react'
import classes from './Main.module.css'

const Main = () => {
    
    if (!localStorage.getItem('root')) {
        localStorage.setItem('root', [])
    }

    const root = localStorage.getItem('root')
    
    return (
        <div className={classes.container}>
            <div>
                nav
            </div>
        </div>
    )
}

export default Main