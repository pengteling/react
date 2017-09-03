import React from 'react'
import Header from './Header'
import ShowPlayer from '../containers/ShowPlayer'


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
const App = ()=>(
  <Router>
    <div>
      <Header/>
      <ShowPlayer />
    </div>
  </Router>
)
export default App
