import React from 'react'
import './ColorInputButton.scss'
import { ChromePicker } from 'react-color' // https://casesandberg.github.io/react-color/

const ColorInputButton = (props) => {
    return (
        <div className="ColorInputButton">
            <button onClick={() => props.showBtn(props.text, true)}>{props.hex}</button>
            <h2>{props.text}</h2>
            
            { props.active && (
                <React.Fragment>
                    <div class="closePicker" onClick={() => props.closeBtn(props.text)}>
                        <svg width="26.981" height="26.981" viewBox="0 0 26.981 26.981">
                            <path id="close-outline_2_" data-name="close-outline (2)" d="M165.324,165.324,144,144m21.324,0L144,165.324" transform="translate(-141.172 -141.172)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                        </svg>
                    </div>
                    <ChromePicker 
                        color= { props.color }
                        onChange = {(color) => { props.trigger(color.hex) }}
                    />
                </React.Fragment>
            )}
            
        </div>
    )
}

export default ColorInputButton
