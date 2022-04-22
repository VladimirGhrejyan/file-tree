import React, {useState} from 'react'
import Dropdown from './Dropdown'
import classes from './NavigateButton.module.css'

const NavigateButton = ({items}) => {
    
    const [dropdown, setDropdown] = useState(false)

    const handleButtonClick = () => {
        setDropdown(prev => !prev)
    }
    
    return (
        <div className={classes.btn}>
            <button onClick={handleButtonClick}>Create</button>
            {
                dropdown &&
                <Dropdown items={items} />
            }
        </div>
    )
}

export default NavigateButton