import React from 'react';
import propTypes from "prop-types";
import { connect } from 'react-redux';

function Square(props) {
      return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }


class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
      value={this.props.squares[i]}
      onClick={()=> this.props.onClick(i)}
      />
    );
  }

  render() {

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  };
};

Board = connect()(Board)

export default Board
