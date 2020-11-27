import React, {useState, useEffect} from 'react';
import './reset.scss'
import './App.scss'

// figures out the contrast between two hex values
import chroma from 'chroma-js' // https://vis4.net/chromajs/#quick-start

// converts hex codes into ones that would be seen by people with the different impairments; 
// apply the same process to obtain the color ratios and determine their grade according to the WCC (or whatever it's called)
import blinder from 'color-blind' // https://github.com/skratchdot/color-blind

// color picker
// import { SketchPicker } from 'react-color' // https://casesandberg.github.io/react-color/

// COMPONENTS
import Background from './components/Background/Background'
import Header from './components/Header/Header'
import ActionArea from './components/ActionArea/ActionArea'

const App = () => {

  const [backgroundColor, setBackgroundColor] = useState('#DE6464')
  const [textColor, setTextColor] = useState('#FFFFFF')

  // let chromaColor = chroma('pink').darken().saturate(2).hex()
  // let blindColor = blinder.protanopia('#42dead')

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
        <div>hi lol</div>
      </div>
    </div>
  );
}

export default App;
