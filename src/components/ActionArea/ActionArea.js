import React from 'react'
import './ActionArea.scss'

import ColorInputButton from './ColorInputButton/ColorInputButton'

const ActionArea = (props) => {
    return (
        <div className="ActionArea">

            <textarea defaultValue="The quick brown fox jumps over the lazy dog" style={{color: props.textColor}}></textarea>
            <div className="colorInputs">
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
        </div>
    )
}

export default ActionArea
