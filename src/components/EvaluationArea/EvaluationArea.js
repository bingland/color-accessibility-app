import React from 'react'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import './EvaluationArea.scss'

import EvaluationBox from './EvaluationBox/EvaluationBox'
import EvaluationGrade from './EvaluationGrade/EvaluationGrade'
import EvaluationCheckmark from './EvaluationCheckmark/EvaluationCheckmark'

const EvaluationArea = (props) => {

    return (
        <div className="EvaluationArea">
            <div className="EvaluationWindow">
                <div className="scores">
                    <EvaluationCheckmark backgroundColor={props.backgroundColor} textColor={props.textColor} />
                    <div className="scoreGrade">
                        <p>Contrast Ratio</p>
                        <h2>{props.contrast}:1</h2>
                    </div>
                    <div className="scoreGrade">
                        <p>WCAG Grade</p>
                        <h2><EvaluationGrade backgroundColor={props.backgroundColor} textColor={props.textColor} /></h2>
                    </div>
                </div>
                
                <div className="evaluations">
                    <SimpleBar 
                        style={{ maxHeight: 475 }} 
                        autoHide={false}
                    >
                    <EvaluationBox 
                        title="Regular Vision"
                        desc="Can distinguish all three primary colors"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="protanomaly"
                        desc="Has trouble distinguishing reds"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="protanopia"
                        desc="Can't distinguish reds"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="deuteranomaly"
                        desc="Has trouble distinguishing greens"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="Deuteranopia"
                        desc="Can't distinguish greens"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="tritanomaly"
                        desc="Has trouble distinguishing blues"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="tritanopia"
                        desc="Can't distinguish blues"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="achromatomaly"
                        desc="Nearly colorblind"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    <EvaluationBox 
                        title="achromatopsia"
                        desc="Completely colorblind"
                        backgroundColor={props.backgroundColor} 
                        textColor={props.textColor} 
                    />
                    </SimpleBar>
                </div>
            </div>
        </div>
    )
}

export default EvaluationArea
