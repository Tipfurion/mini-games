return (
    <div className="mainBlockSnake">
        {isMobile ? <h2>Sorry, this game doesn't support mobile devices</h2> : null}
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
        {!keyPress ? <p className="controls">Use arrow keys to play</p> : null}
    </div>
)
