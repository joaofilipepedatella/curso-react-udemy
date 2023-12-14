import { useState } from 'react'
import './App.css'

//Components

import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplatesExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'
import Challenge from './components/Challenge'

function App() {
  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </>
  )
}

export default App
