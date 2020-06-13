import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory, withRouter, Link, Redirect, useLocation } from 'react-router-dom'
import Slider from './Slider/Slider.js'
import TikTak from './TikTak/TikTak.js'
import Chess from './Chess/Chess.js'
import ButtonLink from './ButtonLink.js'
import './css/App.css'

function App() {
    const [data, setData] = useState([
        {
            title: 'Tik tac toe',
            img: 'https://via.placeholder.com/600x250',
            route: '/tik',
        },
        {
            title: 'Chess',
            img: 'https://via.placeholder.com/600x249',
            route: '/chess',
        },
        {
            title: 'Snake',
            img: 'https://via.placeholder.com/600x248',
            route: '/tik',
        },
    ])
    const [url, setUrl] = useState('/')
    const history = useHistory()
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <Slider data={data} setUrl={setUrl}></Slider>
                    </div>
                </Route>
                <Route path="/tik">
                    <div className="App">
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
            </Switch>
        </Router>
    )
}
export default App
