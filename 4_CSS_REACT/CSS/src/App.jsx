import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {


const n = 10

  return (
    <>
     <div>
      <h1>CSS GLOBAL</h1>
      <MyComponent/>
      <p>Parágrado do App</p>
      <h2 style={n < 10 ? ({color : "purple"}) : ({color : "blue"})}>CSS DINAMICO</h2>
     </div>
    </>
  )
}

export default App
