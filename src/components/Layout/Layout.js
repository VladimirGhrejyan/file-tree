import React, {Fragment} from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import classes from './Layout.module.css'

const Layout = () => {
    return (
        <Fragment>
            <div className={classes.container}>
                <Header />
                <Main />
            </div>
        </Fragment>
    )
}

export default Layout