import React from 'react'

function Square({ gameState, setGameState, turnState, updateTurn, id, block }) {

  const handleClick = (event) => {
    console.log(event.target);
    console.log(id);
    console.log(block);
    
    if(!block) {
      console.log("open")
      let newState = gameState.map((curr, idx) => {
        if(idx === id) {
          return turnState;
        } else {
          return curr;
        }
      })
      setGameState(newState);
    }

    updateTurn();
  }

  return (
    <div className='square' onClick={handleClick}>
      <i className=''></i>
    </div>
  )
}

export default Square;