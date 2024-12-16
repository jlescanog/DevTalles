import {letters} from './helpers/letters';
import { HangImage } from './components/HangImage';

import './App.css';

function App() {

  return (
  <div className="App">
    
      {/* Imagenes */}
      <HangImage imageNumber={ 3 } />

      {/* Palabra oculta */}
      <h3>__________________</h3>

      {/* Contador de Intentos */}
      <h3>Intentos: 0</h3>

      {/* Botones de letras */}
      {
        letters.map((letter) => (
          <button 
            key={letter}>
              {letter}
          </button>
        ))
      }

  </div>
  )

}

export default App
