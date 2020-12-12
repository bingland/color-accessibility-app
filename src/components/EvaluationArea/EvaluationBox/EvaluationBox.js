import React, { useState, useEffect } from 'react'
import './EvaluationBox.scss'

// converts hex codes into ones that would be seen by people with the different impairments; 
// apply the same process to obtain the color ratios and determine their grade according to the WCC (or whatever it's called)
import blinder from 'color-blind' // https://github.com/skratchdot/color-blind

const EvaluationBox = (props) => {
    const [backgroundColor, setBackgroundColor] = useState(props.backgroundColor)
    const [textColor, setTextColor] = useState(props.textColor)

    // protanomaly - low red
    // deuteranomaly - low green
    // tritanomaly - low blue
    
    // protanopia - no red
    // dueteranopia - no green
    // tritanopia - no blue

    // achromotamaly - almost no color
    // achromatopsia - no color

    useEffect(() => {

        switch (props.title.toLowerCase()) {
            // protanomaly - low red
            case 'protanomaly':
                setBackgroundColor(blinder.protanomaly(props.backgroundColor))
                setTextColor(blinder.protanomaly(props.textColor))
                break;
            // deuteranomaly - low green
            case 'deuteranomaly':
                setBackgroundColor(blinder.deuteranomaly(props.backgroundColor))
                setTextColor(blinder.deuteranomaly(props.textColor))
                break;
            // tritanomaly - low blue
            case 'tritanomaly':
                setBackgroundColor(blinder.tritanomaly(props.backgroundColor))
                setTextColor(blinder.tritanomaly(props.textColor))
                break;

            // protanopia - no red
            case 'protanopia':
                setBackgroundColor(blinder.protanopia(props.backgroundColor))
                setTextColor(blinder.protanopia(props.textColor))
                break;
            // Deuteranopia - no green
            case 'deuteranopia':
                setBackgroundColor(blinder.deuteranopia(props.backgroundColor))
                setTextColor(blinder.deuteranopia(props.textColor))
                break;
            // tritanopia - no blue
            case 'tritanopia':
                setBackgroundColor(blinder.tritanopia(props.backgroundColor))
                setTextColor(blinder.tritanopia(props.textColor))
                break;

            // achromatomaly - almost no color
            case 'achromatomaly':
                setBackgroundColor(blinder.achromatomaly(props.backgroundColor))
                setTextColor(blinder.achromatomaly(props.textColor))
                break;
            // achromatopsia - no color
            case 'achromatopsia':
                setBackgroundColor(blinder.achromatopsia(props.backgroundColor))
                setTextColor(blinder.achromatopsia(props.textColor))
                break;

            default: 
                setBackgroundColor(props.backgroundColor)
                setTextColor(props.textColor)
                break;
            
        }
        
    }, [props.backgroundColor, props.textColor, props.title])

    return (
        <div className="EvaluationBox">
            <div className="text">
                <div className="title">
                    <h2>{props.title}</h2>
                    <div className="grade">{props.grade}</div>
                </div>
                <div className="desc">
                    <p>{props.desc}</p>
                </div>
            </div>
            <div className="preview" style={{backgroundColor: backgroundColor, color: textColor}}>
                <div className="previewText">Text</div>
            </div>
        </div>
    )
}

export default EvaluationBox
