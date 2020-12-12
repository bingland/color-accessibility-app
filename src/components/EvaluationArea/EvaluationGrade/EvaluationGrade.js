import React from 'react'

// figures out the contrast between two hex values
import chroma from 'chroma-js' // https://vis4.net/chromajs/#quick-start

const EvaluationGrade = (props) => {

    let contrast = chroma.contrast(props.textColor, props.backgroundColor).toFixed(1)
    let rating = ''

    // 7:1 for AAA, 4.5:1 for large text
    // 4.5:1 for AA, 3:1 for large text

    if (contrast >= 7) {
        rating = 'AAA'
    } 
    else if (contrast >= 4.5) {
        rating = 'AA'
    }
    else {
        rating = 'FAIL'
    }

    return (
        <div className={rating !== 'FAIL' ? 'pass' : 'fail' }>{rating}</div>
    )
}

export default EvaluationGrade
