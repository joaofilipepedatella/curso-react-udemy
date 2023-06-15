import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* import da imagem em Assets */

import City from "./assets/city.jpg"
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Secao 03</h1>

        {/* Imagem em Public */}
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>

        {/* Imagem em Assets */}
        <div>
          <img src={City} alt="Cidade" /> {/* Imagem puxada pelo import da pasta assets */}
        </div>
        <ManageData />
        <ListRender />
        <ConditionalRender /> 
      </div>
    </>
  )
}

export default App
