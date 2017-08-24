import React from "react"
import "../../sass/header.scss"

const Header = ()=>{
  let logoUrl = require('./../../images/logo.png')
  return (

      <div className="components-header">
        <img src={ logoUrl } alt="" className="logo"/>
        <h1 className="caption">React Music Player</h1>
      </div>

  )
}
export default Header
