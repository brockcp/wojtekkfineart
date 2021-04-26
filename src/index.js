import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './style-bootstrap5.css';
import './style.css'
import ReactGA from 'react-ga';
ReactGA.initialize('35207054');
ReactGA.pageview(window.location.pathname + window.location.search);

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
