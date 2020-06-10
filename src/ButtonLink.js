import React from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory, withRouter, Link, Redirect, useLocation } from 'react-router-dom'
function ButtonLink(props) {
    let history = useHistory()
    return (
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
            <button
                className="main-page-link"
                onClick={() => {
                    history.push('/')
                    props.setUrl('/')
                }}
            >
                main page
            </button>
        </Link>
    )
}
export default ButtonLink
