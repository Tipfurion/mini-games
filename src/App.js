import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory, withRouter, Link, Redirect, useLocation } from 'react-router-dom'
import Slider from './Slider/Slider.js'
import TikTak from './TikTak/TikTak.js'
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
            route: '/tik',
        },
        {
            title: 'Snake',
            img: 'https://via.placeholder.com/600x248',
            route: '/tik',
        },
    ])
    const [route, setRoute] = useState('/')
    const history = useHistory()
    function setRouteCallBack(route) {
        setRoute(route)
    }
    let link = <ButtonLink setRoute={setRouteCallBack}> </ButtonLink>

    if (window.location.pathname !== '/') {
        link = <ButtonLink setRoute={setRouteCallBack}> </ButtonLink>
    } else {
        link = null
    }
    return (
        <Router>
            <nav>{link}</nav>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Slider data={data} selectGame={setRouteCallBack}></Slider>
                    </Route>
                    <Route path="/tik">
                        <TikTak></TikTak>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
export default App
