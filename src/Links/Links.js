import React, { useState, useEffect } from 'react'
import logoGithub from './img/gh.png'
import logoTg from './img/tg.png'
import './Links.css'
function Links() {
    return (
        <div className="link-icons">
            <div className="icon">
                <a href="https://github.com/Tipfurion">
                    <img src={logoGithub}></img>
                </a>
            </div>
            <div className="icon">
                <a href="https://t.me/tipfurion">
                    <img src={logoTg}></img>
                </a>
            </div>
        </div>
    )
}

export default Links
