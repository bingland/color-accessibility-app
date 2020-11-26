import React from 'react'
import './ColorInputButton.scss'
import { SketchPicker } from 'react-color' // https://casesandberg.github.io/react-color/

const ColorInputButton = (props) => {
    return (
        <div className="ColorInputButton">
            <button>{props.hex}</button>
            <h2>{props.text}</h2>
            
            <SketchPicker 
                color= { props.backgroundColor }
                onChange = {(color) => { props.setBackgroundColor(color.hex) }}
            />
        </div>
    )
}

export default ColorInputButton
