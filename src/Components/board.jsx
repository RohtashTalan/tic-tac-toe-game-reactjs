import React, { useState } from 'react';
import Square from './Square';


const Board = () => {
 const [item, setItem] = useState(Array(9).fill(null));
 const [isX, setIsX] = useState(true);

const gameLoad = () => {
setItem(Array(9).fill(null));
setIsX(true);
}

const checkWinner = () =>{
 const winnerLogic = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 5, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for(let logic of winnerLogic){
        const [a,b,c] = logic;
        if(item[a] !== null && item[a] === item[b] && item[a] === item[c]){
            return item[a];
        }
    }
return false;
}

 const checkItem = (index) => {
    if(item[index] === null && checkWinner()==false){
    const copyItem = [...item];
    copyItem[index] = isX ? 'X':'O';
    setItem(copyItem);
    setIsX(!isX);
    }
 }

  return (
    <div className="App">
      <div className='board'>
        <div>{checkWinner() ? (<><h1>{checkWinner() } won this Game <button onClick={() => gameLoad()}>Reload the Game</button></h1></>):(<><h3>Player {isX ? 'X':'O'} Turn</h3></>) }</div>
        <div className='row'>
          <Square onClick={() => checkItem(0)} value={item[0]} />
          <Square onClick={() => checkItem(1)} value={item[1]}/>
          <Square onClick={()=>checkItem(2)} value={item[2]}/>
        </div>
        <div className='row'>
          <Square onClick={()=>checkItem(3)} value={item[3]}/>
          <Square onClick={()=>checkItem(4)} value={item[4]}/>
          <Square onClick={()=>checkItem(5)} value={item[5]}/>
        </div>
        <div className='row'>
          <Square onClick={()=>checkItem(6)} value={item[6]}/>
          <Square onClick={()=>checkItem(7)} value={item[7]}/>
          <Square onClick={()=>checkItem(8)} value={item[8]}/>
        </div>
        
      </div>
    </div>
  );
}

export default Board;
