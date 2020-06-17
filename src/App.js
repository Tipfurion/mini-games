import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory, withRouter, Link, Redirect, useLocation } from 'react-router-dom'
import Slider from './Slider/Slider.js'
import Links from './Links/Links.js'
import TikTak from './TikTak/TikTak.js'
import Chess from './Chess/Chess.js'
import ButtonLink from './ButtonLink.js'
import Snake from './Snake/Snake.js'
import './css/App.css'
import chessImg400px from './img/chess_400px.png'
import chessImg250px from './img/chess_250px.png'
import snakeImg400px from './img/snake_400px.png'
import snakeImg250px from './img/snake_250px.png'
import tikImg400px from './img/tik_400px.png'
import tikImg250px from './img/tik_250px.png'
let chessImg
let snakeImg
let tikImg
if (window.screen.width < 400) {
    chessImg = chessImg250px
    snakeImg = snakeImg250px
    tikImg = tikImg250px
} else {
    chessImg = chessImg400px
    snakeImg = snakeImg400px
    tikImg = tikImg400px
}
function App() {
    const [data, setData] = useState([
        {
            title: 'Chess',
            img: chessImg,
            route: '/chess',
        },
        {
            title: 'Tik tac toe',
            img: tikImg,
            route: '/tik',
        },
        {
            title: 'Snake',
            img: snakeImg,
            route: '/snake',
        },
    ])
    const [sliderElIndex, setSliderElIndex] = useState(0)
    const history = useHistory()
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <h2 className="label">Minigames</h2>
                        <Slider data={data} setSliderElIndex={setSliderElIndex} index={sliderElIndex}></Slider>
                        <Links></Links>
                    </div>
                </Route>
                <Route path="/tik">
                    <div className="tik">
                        <nav>
                            <ButtonLink> </ButtonLink>
                        </nav>

                        <TikTak></TikTak>
                    </div>
                </Route>
                <Route path="/chess">
                    <nav>
                        <ButtonLink> </ButtonLink>
                    </nav>
                    <Chess></Chess>
                </Route>
                <Route path="/snake">
                    <nav>
                        <ButtonLink> </ButtonLink>
                    </nav>
                    <Snake></Snake>
                </Route>
            </Switch>
        </Router>
    )
}
export default App
