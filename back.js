        <div className="App">
            <h2 className="App-header">Mini Games</h2>
            <Slider data={data} selectGame={onSelectGame}></Slider>
        </div>



                        <div className="row">
                    <div className="cell">{this.state.squares[0]}</div>
                    <div className="cell">{this.state.squares[1]}</div>
                    <div className="cell">{this.state.squares[2]}</div>
                </div>
                <div className="row">
                    <div className="cell">{this.state.squares[3]}</div>
                    <div className="cell">{this.state.squares[4]}</div>
                    <div className="cell">{this.state.squares[5]}</div>
                </div>
                <div className="row">
                    <div className="cell">{this.state.squares[6]}</div>
                    <div className="cell">{this.state.squares[7]}</div>
                    <div className="cell">{this.state.squares[8]}</div>
                </div>







                    render() {
        const MATRIX_SIZE = Math.sqrt(this.state.history[0].length)
        const current = this.state.history[this.state.stepNumber]
        //const MATRIX_SIZE = 3
        let rows = []
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
                {rows}
                <button
                    onClick={() => {
                        this.setState({ stepNumber: 0 })
                    }}
                >
                    to start
                </button>
            </div>
        )
    }











    import React, { ReactDOM } from 'react'
import './TikTak.css'

class TikTak extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //squares: ['x', 'x', 'x', 'x', 'o', 'x', 'x', 'x', 'x'],
            history: [Array(9).fill(null)],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    handleClick(i) {
        const history = [...this.state.history]
        const squares = history[history.length - 1]
        if (squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        history.push(squares)
        this.setState({
            history: history,
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        })
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0,
        })
    }

    render() {
        const MATRIX_SIZE = Math.sqrt(this.state.history[0].length)
        const current = this.state.history[this.state.stepNumber]
        //const MATRIX_SIZE = 3
        let rows = []
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
                {rows}
                <button
                    onClick={() => {
                        this.setState({ stepNumber: 0 })
                    }}
                >
                    to start
                </button>
            </div>
        )
    }
    componentDidMount() {}
}

export default TikTak











render() {
    return (
        <div id="TikTak">
            <div className="row">
                <div
                    className="cell"
                    onClick={() => {
                        this.handleClick(0)
                    }}
                >
                    {this.state.history[this.state.stepNumber][0]}
                </div>
                <div
                    className="cell"
                    onClick={() => {
                        this.handleClick(1)
                    }}
                >
                    {this.state.history[this.state.stepNumber][1]}
                </div>
                <div
                    className="cell"
                    onClick={() => {
                        this.handleClick(2)
                    }}
                >
                    {this.state.history[this.state.stepNumber][2]}
                </div>
            </div>
            <div className="row">
                <div
                    className="cell"
                    onClick={() => {
                        this.handleClick(3)
                    }}
                >
                    {this.state.history[this.state.stepNumber][3]}
                </div>
                <div
                    className="cell"
                    onClick={() => {
                        this.handleClick(4)
                    }}
                >
                    {this.state.history[this.state.stepNumber][4]}
                </div>
                <div
                    className="cell"
                    onClick={() => {
                        this.handleClick(5)
                    }}
                >
                    {this.state.history[this.state.stepNumber][5]}
                </div>
            </div>
            <div className="row">
                <div
                    className="cell"
                    onClick={() => {
                        this.handleClick(6)
                    }}
                >
                    {this.state.history[this.state.stepNumber][6]}
                </div>
                <div
                    className="cell"
                    onClick={() => {
                        this.handleClick(7)
                    }}
                >
                    {this.state.history[this.state.stepNumber][7]}
                </div>
                <div
                    className="cell"
                    onClick={() => {
                        this.handleClick(8)
                    }}
                >
                    {this.state.history[this.state.stepNumber][8]}
                </div>
            </div>
        </div>
    )
}







<div className="App">
<Slider data={data} selectGame={onSelectGame}></Slider>
</div>