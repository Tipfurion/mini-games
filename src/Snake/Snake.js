import React, { useState, useEffect } from 'react'
import './Snake.css'

function Snake(props) {
    const [score, setScore] = useState(0)
    const [gameState, setGameState] = useState(true)
    let canvas
    let ctx
    let s = 0
    let velX = 0
    let velY = 0
    let x = 10
    let y = 10
    let foodX = 11
    let foodY = 11
    let greedSize = 20
    let tileCount = 20
    let maxSnakeLength = 1
    let game = true
    let snake = [{ x: x, y: y }]
    useEffect(() => {
        canvas = document.getElementById('canvas')
        ctx = canvas.getContext('2d')
        document.addEventListener('keydown', keyPush)
        setInterval(gameLoop, 60)
    }, [])
    function keyPush(e) {
        switch (e.keyCode) {
            case 37:
                if (snake.length == 1 || velX !== 1) {
                    velX = -1
                    velY = 0
                }

                break
            case 38:
                if (snake.length == 1 || velY !== 1) {
                    velX = 0
                    velY = -1
                }
                break
            case 39:
                if (snake.length == 1 || velX !== -1) {
                    velX = 1
                    velY = 0
                }
                break
            case 40:
                if (snake.length == 1 || velY !== -1) {
                    velX = 0
                    velY = 1
                }
                break
        }
    }
    function gameLoop() {
        if (game) {
            x += velX
            y += velY
            if (x < 0) {
                x = tileCount - 1
            }
            if (x > tileCount - 1) {
                x = 0
            }
            if (y < 0) {
                y = tileCount - 1
            }
            if (y > tileCount - 1) {
                y = 0
            }
            ctx.fillStyle = '#282c34'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            for (let i = 0; i < snake.length; i++) {
                ctx.fillStyle = 'white'
                ctx.fillRect(snake[i].x * greedSize, snake[i].y * greedSize, greedSize, greedSize)
                if (snake.length !== 1 && x === snake[i].x && y === snake[i].y) {
                    console.log('game Over')
                    setGameState(false)
                    game = false
                }
            }
            snake.push({ x: x, y: y })
            while (snake.length > maxSnakeLength) {
                snake.shift()
            }
            ctx.fillStyle = '#fa5080'
            ctx.fillRect(foodX * greedSize, foodY * greedSize, greedSize, greedSize)
            if (x == foodX && y == foodY) {
                maxSnakeLength++
                setScore(snake.length)
                getRandomTile()
            }
        }
    }
    function getRandomTile() {
        let randX = Math.floor(Math.random() * tileCount)
        let randY = Math.floor(Math.random() * tileCount)
        if (
            snake.every((el) => {
                return !(el.x == randX && el.y == randY)
            })
        ) {
            foodX = randX
            foodY = randY
        } else {
            getRandomTile()
            console.log('else')
        }
    }
    return (
        <div className="mainBlockSnake">
            {!gameState ? (
                <div className="win-message-wrapper">
                    <div className="win-message">
                        <h2>{`Game over!\nScore: ${score}`}</h2>
                        <button
                            className="win-message-button"
                            onClick={() => {
                                window.location.reload()
                            }}
                        >
                            restart
                        </button>
                    </div>
                </div>
            ) : null}
            <h2 className="score">{`Score: ${score}`}</h2>
            <canvas width="400px" height="400px" id="canvas" className="canvasSnake"></canvas>
        </div>
    )
}

export default Snake
