import { useState, useEffect } from 'react'
import Board from './components/Board'
import Square from './components/Square'
import './App.css'

function App() {
  const [gameState, setGameState] = useState(["", "", "", "", "", "", "", "", ""]);
  // Define turn state --> 'circle' | 'cross'
  const [turnState, setTurnState] = useState('circle');
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    checkWinConditions(gameState);
  }, [gameState])

  console.log(gameState);
  
  const checkWinConditions = () => {
    const winConditions = [
      [0, 1, 2],
      [0, 3, 6],
      [2, 5, 8],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [3, 4, 5],
      [1, 4, 7]
    ];
   
    winConditions.forEach(arr => {
      let circleWin = arr.every(elem => gameState[elem] === 'circle');

      if(circleWin) {
        setWinner('circle');
        return
      }
    });

    winConditions.forEach(arr => {
      let crossWin = arr.every(elem => gameState[elem] === 'cross');

      if(crossWin) {
        setWinner('cross');
        return
      }
    })
  }

  
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
