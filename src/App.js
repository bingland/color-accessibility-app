import React, {useState, useEffect} from 'react';

// figures out the contrast between two hex values
import chroma from 'chroma-js' // https://vis4.net/chromajs/#quick-start

// converts hex codes into ones that would be seen by people with the different impairments; 
// apply the same process to obtain the color ratios and determine their grade according to the WCC (or whatever it's called)
import blinder from 'color-blind' // https://github.com/skratchdot/color-blind

import { SketchPicker } from 'react-color' // https://casesandberg.github.io/react-color/

const App = () => {
  let chromaColor = chroma('pink').darken().saturate(2).hex()
  let blindColor = blinder.protanopia('#42dead')

  return (
    <div className="App">
      Chroma Color: { chromaColor } Blind Color: { blindColor }
      <SketchPicker />
    </div>
  );
}

export default App;
