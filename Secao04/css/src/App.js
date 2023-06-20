import './App.css';
import MyComponents from './components/MyComponents';
import { useState } from "react"
import Title from './components/Title';

function App() {

  const n = 15
  const [name] = useState("Joao")
  const redTitle = true

  return (
    <div className="App">
      
      {/* CSS Global */}
      <h1>React com CSS</h1>
     
      {/* CSS de Componente */}
      <MyComponents />
      <p>Este paragrafo eh do App.js</p>
      
      {/* Inline CSS */}
      <p style={{color: "Blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      
      {/* CSS Style Dinamico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS Dinamico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS Dinamico</h2>
      <h2 style={name === "Joao" ? ({color: "purple", backgroundColor: "#000"}) : ({color: "pink", backgroundColor: "#fefefe"})}>CSS Dinamico</h2>
      <h2 style={name !== "Joao" ? ({color: "purple", backgroundColor: "#000"}) : ({color: "pink", backgroundColor: "blue"})}>CSS Dinamico</h2>

      {/* Classe Dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter Classe Dinamica</h2>

      {/* CSS Modules */}
      <Title />
      <h2 className='my_title'>Como eh Scoped, nao alterara este titulo</h2>
    </div>
  );
}

export default App;
