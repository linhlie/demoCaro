import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(600).fill(null),
      xIsNext: true,
      winner:null
    };
  }
  handleClick(i) {
    const squares = this.state.squares;
    if (squares[i] || this.state.winner) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    if(calculateWinner(i,squares[i],squares)){
      this.setState({
        winner:squares[i],
      });
    }
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }
  render() {
    let status;
    if (this.state.winner) {
      status = 'Winner: ' + this.state.winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    let i = -1;
    const row = Array(20).fill(null);
    const col = Array(30).fill(null);
    return (
      <div>
        <div className="status">{status}</div>
        {
          row.map(e => {
            return (<div className="board-row">{
              col.map(v => { i++; return this.renderSquare(i) })
            }</div>)
          })
        }
      </div>
    );
  }
}

export default Board;