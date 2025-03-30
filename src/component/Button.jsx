import React from 'react'

const button = (props) => {
  return (
    <button onClick={props.onClick}>
        <img src={props.selectImg && props.selectImg} />
    </button>
  )
}

export default button