import  './stylesheets/common.scss';


import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import Home from './components/home.jsx'
import About from './components/about.jsx'
import Portfolio from './components/portfolio.jsx'
import Tags from './components/tags.jsx'
ReactDom.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={Home}></Route>
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/tags" component={Tags}/>

        </Router>
    ), document.getElementById('app'));
