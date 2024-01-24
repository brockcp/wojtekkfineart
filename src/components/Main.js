import React from 'react'
import { Switch, Route } from 'react-router-dom'
import '../style.css'
import Home from '../pages/Home'
import Animals from '../pages/Animals'
import Landscapes from '../pages/Landscapes'
import People from '../pages/People'
import Sculptures from '../pages/Sculptures'
import Flowers from '../pages/Flowers'
import Photos from '../pages/Photos'
import About from '../pages/About'
import Contact from '../pages/Contact'

const Main=()=>(
  <div className="row">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/animals' component={Animals}/>
        <Route path='/landscapes' component={Landscapes}/>
        <Route path='/people' component={People}/>
        <Route path='/sculptures' component={Sculptures}/>
        <Route path='/flowers' component={Flowers}/>
        <Route path='/photos' component={Photos}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
  </div>
)

export default Main
