import React from 'react';
import Square from './Square';

function Board({ gameState, setGameState, turnState, setTurnState }) {

  const updateTurn = () => {
    setTurnState((prev) => (prev === 'circle') ? 'cross': 'circle');
  }

  return (
    <div className='game-board'>
        { 
          gameState.map((block, idx) => (
            <Square 
              key={idx} 
              id={idx} 
              block={block} 
              updateTurn={updateTurn} 
              turnState={turnState} 
              gameState={gameState} 
              setGameState={setGameState}/>
          ))
        }
        
    </div>
  )
}

export default Board;