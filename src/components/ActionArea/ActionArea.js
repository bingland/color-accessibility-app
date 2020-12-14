import React, { useState } from 'react'
import './ActionArea.scss'

import ColorInputButton from './ColorInputButton/ColorInputButton'

const ActionArea = (props) => {

    const [showBgBtn, setShowBgBtn] = useState(false)
    const [showColorBtn, setShowColorBtn] = useState(false)

    const closeBtn = (text) => {
        if (text === "Background") { setShowBgBtn(false) }
        if (text === "Text Color") { setShowColorBtn(false) }
    }

    const showBtn = (text, toggle) => {
        if (text === "Background") { 
            setShowBgBtn(true) 
            if (toggle) setShowColorBtn(false)
        }
        if (text === "Text Color") { 
            setShowColorBtn(true) 
            if (toggle) setShowBgBtn(false)
        }
    }

    return (
        <div className="ActionArea">
            <textarea defaultValue="The quick brown fox jumps over the lazy dog" style={{color: props.textColor}} rows="2"></textarea>
            <div className="colorInputs">
                <ColorInputButton 
                    hex={props.backgroundColor}
                    text="Background"
                    color={props.backgroundColor}
                    trigger={props.setBackgroundColor}
                    active={showBgBtn}
                    closeBtn={closeBtn}
                    showBtn={showBtn}
                />
                <ColorInputButton 
                    hex={props.textColor}
                    text="Text Color"
                    color={props.textColor}
                    trigger={props.setTextColor}
                    active={showColorBtn}
                    closeBtn={closeBtn}
                    showBtn={showBtn}
                />
            </div>
        </div>
    )
}

export default ActionArea
