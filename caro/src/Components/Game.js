import React from 'react';
import Board from './Board';
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
function calculateWinner(i,square,squares) {
  for(let m=1;m<=5;m++){ //duyet hang ngang
    for(let n=i-5+m;n<=i-1+m;n++){
      if(squares[n]!==square)
        break;
      if(n===(i-1+m)){
        return square;
      }
    } 
  }
  for(let m=1;m<=5;m++){ //duyet hang doc
    for(let n=i-(30*(5-m));n<=i-30+(30*m);n+=30){
      if(squares[n]!==square)
        break;
      if(n===(i-30+(m*30))){
        return square;
      }
    }
  }
  for(let m =1;m<=5;m++){ //hang cheo 1
    for(let n=i-(31*(5-m));n<=i-31+(31*m);n+=31){
      if(squares[n]!==square)
        break;
      if(n===(i-31+(m*31))){
        return square;
      }
    }
  }
  for(let m =1;m<=5;m++){ //hang cheo 2
    for(let n=i-(29*(5-m));n<=i-29+(29*m);n+=29){
      if(squares[n]!==square)
        break;
      if(n===(i-29+(m*29))){
        return square;
      }
    }
  }
  return null;
}

export default Game;