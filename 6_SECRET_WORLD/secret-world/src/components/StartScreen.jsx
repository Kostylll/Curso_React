import './Styles/StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar!</p>
        <button onClick={startGame}>Começar o Jogo!</button>
    </div>
  )
}

export default StartScreen