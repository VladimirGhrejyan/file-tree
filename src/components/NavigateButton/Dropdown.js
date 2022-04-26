import React from 'react'
import MenuItem from './MenuItem'
import classes from './Dropdown.module.css'

const Dropdown = ({ items }) => {
  return (
    <ul className={classes.menu}>
      {items.map((item) => (
        <MenuItem item={item} key={item.title} />
      ))}
    </ul>
  )
}

export default Dropdown
