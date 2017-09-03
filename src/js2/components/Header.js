import React from "react"
import "../../sass/header.scss"
import {Link} from 'react-router-dom'

const Header = ()=>{
  let logoUrl = require('./../../images/logo.png')
  return (

      <div className="components-header">
        <Link to ="/">
          <img src={ logoUrl } alt="" className="logo"/>
        </Link>
        <h1 className="caption">React Music Player</h1>

        <div id="jplayer"></div>
      </div>


  )
}
export default Header
