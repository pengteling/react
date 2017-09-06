import React from 'react'

const AsyncApp = ({
  json,onClick,ownProps,state,lastUpdate
}) =>(
  <div onClick={onClick}>
    {json.city}今天气温： - {json.temp}  {ownProps.ownProps1} - {lastUpdate}

  </div>
)
export default AsyncApp
