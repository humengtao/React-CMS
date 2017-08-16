require('./stylesheets/app.scss');

import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from './components/app.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

ReactDom.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="/header" component={Header}/>
                <Route path="/footer" component={Footer}/>
            </Route>
        </Router>
    ), document.getElementById('app'));
