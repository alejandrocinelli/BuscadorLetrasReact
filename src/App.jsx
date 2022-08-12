import { useState } from 'react'
import AppLetras from './components/AppLetras'
import {LetrasProvider} from "./context/LetrasProvider"

function App() {
 

  return (
    <div className="App">
        <LetrasProvider>
          <AppLetras />
        </LetrasProvider>
    </div>
  )
}

export default App
