import React, { ReactDOM } from 'react'
import './TikTak.css'

class TikTak extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //squares: ['x', 'x', 'x', 'x', 'o', 'x', 'x', 'x', 'x'],
            //history: [Array(9).fill(null)],
            history: [[null, null, null, null, null, null, null, null, null]],
            stepNumber: 0,
            xIsNext: true,
            winner: null,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const squares = [...history[history.length - 1]]
        if (squares[i] || this.calculateWinner(squares)) {
            return
        }
        if (this.state.xIsNext) {
            squares[i] = 'X'
        } else {
            squares[i] = 'O'
        }
        this.setState({
            history: history.concat([squares]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        })
        this.calculateWinner(squares)
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0,
            winner: null,
        })
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                this.setState({ winner: squares[a] })
                return squares[a]
            }
        }
        return null
    }
    createMoves() {
        let moves = []
        for (let i = 0; i < this.state.history.length; i++) {
            moves.push(
                <button
                    onClick={() => {
                        this.jumpTo(i)
                    }}
                >
                    {i}
                </button>
            )
        }
        return moves
    }
    render() {
        const turn = this.state.xIsNext ? 'X' : 'O'
        //const winner = this.state.winner ? this.state.winner : null
        const info = this.state.winner ? `Winner: ${this.state.winner}!` : `Turn: ${turn}`
        const MATRIX_SIZE = Math.sqrt(this.state.history[0].length)
        const current = this.state.history[this.state.stepNumber]
        const rows = []
        for (let i = 0; i < MATRIX_SIZE; i++) {
            rows.push(
                <div className="row" key={i}>
                    {(() => {
                        let row = []
                        for (let j = 0; j < MATRIX_SIZE; j++) {
                            row.push(
                                <div
                                    className="cell"
                                    key={i * MATRIX_SIZE + j}
                                    onClick={() => {
                                        this.handleClick(i * MATRIX_SIZE + j)
                                    }}
                                >
                                    {current[i * MATRIX_SIZE + j]}
                                </div>
                            )
                        }
                        return row
                    })()}
                </div>
            )
        }
        return (
            <div id="TikTak">
                <div className="label"></div>
                <div className="label">{info}</div>
                {rows}
                <div className="move-panel">
                    <div className="label">return to turn</div>
                    <div className="moves">{this.createMoves()}</div>
                </div>
            </div>
        )
    }
    componentDidMount() {}
}

export default TikTak
