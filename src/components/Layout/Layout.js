import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import classes from './Layout.module.css'

const Layout = () => {
  return (
    <>
      <div className={classes.container}>
        <Header />
        <Main />
      </div>
    </>
  )
}

export default Layout
