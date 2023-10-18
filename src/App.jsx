import { useState } from 'react'
import Board from './components/Board'
import Square from './components/Square'
import './App.css'

function App() {
  const [gameState, setGameState] = useState(["", "", "", "", "", "", "", "", ""])

  return (
    <>
      <div>
        <h1>React Tic-Tac-Toe</h1> 
        <Board gameState={gameState} setGameState={setGameState}/>
      </div>
    </>
  )
}

export default App
