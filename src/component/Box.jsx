import React from 'react'

const Box = (props) => {
  return (
    <div className={`box ${props.result === '승리' ? 'win' : props.result === '패배' ? 'lose' : 'draw'}`}>
        <h2>{props.name}</h2>
        <img src={props.select && props.select.img} />
        <h2>{props.result}</h2>
    </div>
  )
}

export default Box