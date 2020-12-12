import React from 'react'
import './EvaluationCheckmark.scss'

// figures out the contrast between two hex values
import chroma from 'chroma-js' // https://vis4.net/chromajs/#quick-start

const EvaluationCheckmark = (props) => {

    let contrast = chroma.contrast(props.textColor, props.backgroundColor).toFixed(1)
    let customClass = contrast >= 4.5 ? 'pass' : 'fail'

    return (
        <div className={'EvaluationCheckmark ' + customClass}>
            { customClass === 'pass' && (
                <svg width="33.151" height="26.822" viewBox="0 0 33.151 26.822">
                    <path id="checkmark" d="M123.5,128l-19.25,22L96,141.75" transform="translate(-93.172 -125.178)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                </svg>
            )}
            { customClass === 'fail' && (
                <svg width="26.981" height="26.981" viewBox="0 0 26.981 26.981">
                    <path id="close-outline_2_" data-name="close-outline (2)" d="M165.324,165.324,144,144m21.324,0L144,165.324" transform="translate(-141.172 -141.172)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                </svg>
            )}


        </div>
    )
}

export default EvaluationCheckmark
