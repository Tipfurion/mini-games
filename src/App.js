import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory, withRouter, Link, Redirect, useLocation } from 'react-router-dom'
import Slider from './Slider/Slider.js'
import Links from './Links/Links.js'
import TikTak from './TikTak/TikTak.js'
import Chess from './Chess/Chess.js'
import ButtonLink from './ButtonLink.js'
import Snake from './Snake/Snake.js'
import './css/App.css'

function App() {
    console.log(window.client)

    const [data, setData] = useState([
        {
            title: 'Tik tac toe',
            img: 'https://via.placeholder.com/250x250',
            route: '/tik',
        },
        {
            title: 'Chess',
            img: 'https://via.placeholder.com/400x400',
            route: '/chess',
        },
        {
            title: 'Snake',
            img: 'https://via.placeholder.com/400x400',
            route: '/snake',
        },
    ])
    const [url, setUrl] = useState('/')
    const history = useHistory()
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <h2 className="label">Minigames</h2>
                        <Slider data={data} setUrl={setUrl}></Slider>
                        <Links></Links>
                    </div>
                </Route>
                <Route path="/tik">
                    <div className="tik">
                        <nav>
                            <ButtonLink setUrl={setUrl}> </ButtonLink>
                        </nav>

                        <TikTak></TikTak>
                    </div>
                </Route>
                <Route path="/chess">
                    <nav>
                        <ButtonLink setUrl={setUrl}> </ButtonLink>
                    </nav>
                    <Chess></Chess>
                </Route>
                <Route path="/snake">
                    <nav>
                        <ButtonLink setUrl={setUrl}> </ButtonLink>
                    </nav>
                    <Snake></Snake>
                </Route>
            </Switch>
        </Router>
    )
}
export default App
