//CSS
import './App.css'
//COMPONENTS
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import End from './components/End'
//REACT
import { useCallback, useEffect, useState } from 'react'
//DADOS
import {wordsList} from './data/words'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]


function App() {
 
  const[gameStage,setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const  pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length )]
    console.log(category)

    const word = words[category][Math.floor(Math.random() * words[category].length )]
    console.log(word)
    return{word,category}
    }
  
  const startGame = () => {
    const {word,category} = pickWordAndCategory();
    console.log(word,category)

    let wordLetters = word.split("");
    
    wordLetters = wordLetters.map((l) => l.toLowerCase())
    console.log(wordLetters)

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)

    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }



  return (
  
     <div className='App'>
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <End retry={retry} />}
     </div>
     
  
  )
}

export default App