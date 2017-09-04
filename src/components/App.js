import React from 'react'
import Header from './Header'
import ShowPlayer from '../containers/ShowPlayer'
import ShowList from '../containers/ShowList'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
const App = ()=>(
  <Router>
    <div>
      <Header/>
      
      <Route exact path ="/" render = {() =>(
        <ShowPlayer />
      )}>
      </Route>
      <Route path ="/list" render = {() =>(
        <ShowList />
      )}>
      </Route>

    </div>
  </Router>
)
export default App
