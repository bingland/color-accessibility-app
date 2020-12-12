import React from 'react'
import './EvaluationArea.scss'

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
                        title="protanomaly"
                        desc="Has trouble distinguishing reds"
                        grade="AAA"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="deuteranomaly"
                        desc="Has trouble distinguishing greens"
                        grade="AAA"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="tritanomaly"
                        desc="Has trouble distinguishing blues"
                        grade="AAA"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="protanopia"
                        desc="Can't distinguish reds"
                        grade="AAA"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="Deuteranopia"
                        desc="Can't distinguish greens"
                        grade="AAA"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="tritanopia"
                        desc="Can't distinguish blues"
                        grade="AAA"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="achromatomaly"
                        desc="Nearly colorblind"
                        grade="AAA"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="achromatopsia"
                        desc="Completely colorblind"
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
