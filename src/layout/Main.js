import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './main.css'
import Home from '../pages/Home'
import Animals from '../pages/Animals'
import Landscapes from '../pages/Landscapes'
import People from '../pages/People'
import Sculptures from '../pages/Sculptures'
import Flowers from '../pages/Flowers'
import About from '../pages/About'
import Contact from '../pages/Contact'

const Main = () => (
  <div className="mainwrap">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Animals' component={Animals}/>
        <Route path='/Landscapes' component={Landscapes}/>
        <Route path='/People' component={People}/>
        <Route path='/Sculptures' component={Sculptures}/>
        <Route path='/Flowers' component={Flowers}/>
        <Route path='/About' component={About}/>
        <Route path='/Contact' component={Contact}/>
      </Switch>
  </div>
)

export default Main
