import React from 'react'
import './EvaluationBox.scss'

const EvaluationBox = (props) => {
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
            <div className="preview" style={{backgroundColor: props.backgroundColor, color: props.textColor}}>
                <div className="previewText">Text</div>
            </div>
        </div>
    )
}

export default EvaluationBox
