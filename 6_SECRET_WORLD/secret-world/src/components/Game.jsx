import './Styles/Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Encerrar Jogo</button>
    </div>
  )
}

export default Game