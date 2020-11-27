import React from 'react'
import './EvaluationArea.scss'

// converts hex codes into ones that would be seen by people with the different impairments; 
// apply the same process to obtain the color ratios and determine their grade according to the WCC (or whatever it's called)
import blinder from 'color-blind' // https://github.com/skratchdot/color-blind

import EvaluationBox from './EvaluationBox/EvaluationBox'

const EvaluationArea = (props) => {
    // let blindColor = blinder.protanopia('#42dead')

    return (
        <div className="EvaluationArea">
            <div className="EvaluationWindow">
                <div className="scores">
                    <div className="scoreGrade">
                        <p>Contrast Ratio</p>
                        <h2>{props.contrast}:1</h2>
                    </div>
                    <div className="scoreGrade">
                        <p>WCAG Grade</p>
                        <h2>AAA</h2>
                    </div>
                </div>
                
                <div className="evaluations">
                    <EvaluationBox 
                        title="Regular Vision"
                        desc="Can distinguish all three primary colors"
                        grade="AAA"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="Regular Vision"
                        desc="Can distinguish all three primary colors"
                        grade="AAA"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="Regular Vision"
                        desc="Can distinguish all three primary colors"
                        grade="AAA"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="Regular Vision"
                        desc="Can distinguish all three primary colors"
                        grade="AAA"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                </div>
            </div>
        </div>
    )
}

export default EvaluationArea
