import React from 'react'


function Square(props) {
    return (
        <button
            className="square" onClick={props.onClick}
            style={ props.highlight ? {color: 'red'} : {color: 'black'}}
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    renderSquare() {
        let rows = [0, 3, 6];
        let squares = [0, 1, 2];
        const listRows = rows.map((row) => {
            let listQuares = squares.map((square) =>
                <Square
                    highlight={this.props.winstate && this.props.winstate.some(item => item === row + square ) ? true : false}
                    value={this.props.squares[row + square]}
                    onClick={() => this.props.onClick(row + square)}
                />
            );
            return (
                <div className="board-row">
                    {listQuares}
                </div>
            );
        }
        );
        return (
            <div>
                {listRows}
            </div>
        );
    }

    render() {
        return (
            this.renderSquare(0)
        );
    }
}

export default Board;