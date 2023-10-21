import { useState } from 'react'
import Board from './components/Board'
import Square from './components/Square'
import './App.css'

function App() {
  const [gameState, setGameState] = useState(["", "", "", "", "", "", "", "", "circle"]);
  // Define turn state --> 'circle' | 'cross'
  const [turnState, setTurnState] = useState('circle');

  console.log(gameState);
  
  return (
    <>
      <div className='app-container'>
        <h1>React Tic-Tac-Toe</h1> 
        <Board gameState={gameState} setGameState={setGameState} turnState={turnState} setTurnState={setTurnState}/>
      </div>
    </>
  )
}

export default App
