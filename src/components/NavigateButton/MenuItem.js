import React, { useState, useRef, useEffect } from 'react'
import Dropdown from './Dropdown'
import classes from './MenuItem.module.css'

const MenuItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false)

  const handleButtonClick = () => {
    setDropdown((prev) => !prev)
  }

  const ref = useRef()

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setDropdown(false)
      }
    }

    document.addEventListener(
      'touchstart',
      handleOutsideClick
    )
    document.addEventListener(
      'mousedown',
      handleOutsideClick
    )

    return () => {
      document.removeEventListener(
        'touchstart',
        handleOutsideClick
      )
      document.removeEventListener(
        'mousedown',
        handleOutsideClick
      )
    }
  }, [dropdown])

  return (
    <li className={classes['menu-item']} ref={ref}>
      {item.hasOwnProperty('submenu') ? (
        <>
          <button onClick={handleButtonClick}>
            {item.title}
          </button>
          {dropdown && <Dropdown items={item.submenu} />}
        </>
      ) : (
        <button>{item.title}</button>
      )}
    </li>
  )
}

export default MenuItem
