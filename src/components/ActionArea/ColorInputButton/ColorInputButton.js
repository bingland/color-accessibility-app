import React, { useState } from 'react'
import './ColorInputButton.scss'
import { SketchPicker } from 'react-color' // https://casesandberg.github.io/react-color/

const ColorInputButton = (props) => {
    const [active, setActive] = useState(false)

    return (
        <div className="ColorInputButton">
            <button onClick={() => setActive(!active)}>{props.hex}</button>
            <h2>{props.text}</h2>
            
            { active === true && (
                <SketchPicker 
                    color= { props.backgroundColor }
                    onChange = {(color) => { props.setBackgroundColor(color.hex) }}
                />
            )}
            
        </div>
    )
}

export default ColorInputButton
