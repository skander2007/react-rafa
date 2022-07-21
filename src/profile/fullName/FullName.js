import React from 'react'

const FullName = ({player,rafael}) => {
  return (
    <div>
      <h1 style={{fontSize:50,color:'blue'}}>{player.name}</h1>
    <button onClick={() => rafael(player.name)}>Salut</button>
    <img style={{height:400 , width:300 , }} src={player.imgURL}/>
  
    </div>
  )
}

export default FullName