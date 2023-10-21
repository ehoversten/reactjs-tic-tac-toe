import React from 'react'

function Square({ setGameState, turnState, updateTurn, id, block }) {

  const handleClick = (event) => {
    console.log(event.target);
    console.log(id);
    console.log(block);
    
    if(!block) {
      console.log("open")
      setGameState((prev) => prev[id] = turnState);
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