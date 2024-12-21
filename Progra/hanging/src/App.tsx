import { useState } from 'react';
import {letters} from './helpers/letters';
import { HangImage } from './components/hangImage';

import './App.css';


function App() {

  const [ attempts, setAttemps ] = useState(0);

  const checkLetter = (letter: string ) => {
    console.log(letter);
    setAttemps( Math.min ( attempts + 1, 9) );
  }

  return (
  <div className="App">
    
      {/* Imagenes */}
      <HangImage imageNumber={ attempts } />

      {/* Palabra oculta */}
      <h3>__________________</h3>

      {/* Contador de Intentos */}
      <h3>Intentos: {attempts} </h3>

      {/* Botones de letras */}
      {
        letters.map((letter) => (
          <button
            onClick={ () => checkLetter(letter) }
            key={letter}>
              {letter}
          </button>
        ))
      }

  </div>
  )

}

export default App
