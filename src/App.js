import React, { useState } from 'react';
import './reset.scss'
import './App.scss'

// figures out the contrast between two hex values
import chroma from 'chroma-js' // https://vis4.net/chromajs/#quick-start

// COMPONENTS
import Background from './components/Background/Background'
import Header from './components/Header/Header'
import ActionArea from './components/ActionArea/ActionArea'
import EvaluationArea from './components/EvaluationArea/EvaluationArea'

const App = () => {

  const [backgroundColor, setBackgroundColor] = useState('#4C4CCC')
  const [textColor, setTextColor] = useState('#FFFFFF')

  let contrast = chroma.contrast(textColor, backgroundColor).toFixed(1)

  return (
    <div className="App" style={{color: textColor}}>
      <Background color={backgroundColor} />
      <Header color={textColor} />
      <div className="appGrid">
        <ActionArea 
          backgroundColor={backgroundColor}
          textColor={textColor}
          setBackgroundColor={setBackgroundColor}
          setTextColor={setTextColor}
        />
        <EvaluationArea
          contrast={contrast}
          backgroundColor={backgroundColor}
          textColor={textColor}
        />
      </div>
    </div>
  );
}

export default App;
