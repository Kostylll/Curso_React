import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import TemplateEspression from './components/TemplateExpression'
import './App.css'
import Events from './components/Events'
import Challenge from './components/Challenge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateEspression/>
      <Events/>
      <Challenge/>
    </>
  )
}

export default App
