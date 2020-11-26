import React from 'react'
import './ActionArea.scss'

import ColorInputButton from './ColorInputButton/ColorInputButton'


const ActionArea = (props) => {
    return (
        <div className="ActionArea">
            <ColorInputButton 
                hex={props.backgroundColor}
                text="Background"
                textColor={props.backgroundColor}
                setBackgroundColor={props.setBackgroundColor}
            />
            <ColorInputButton 
                hex={props.textColor}
                text="Text Color"
                textColor={props.textColor}
                setBackgroundColor={props.setTextColor}
            />
        </div>
    )
}

export default ActionArea
