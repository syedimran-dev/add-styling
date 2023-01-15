import Radium from 'radium'
import React from 'react'
import './person.css'

const Person = (props) => {
  const style = {
    '@media (max-width: 500px)':{
      widtn: "500px"
    }
  }
  return (
    <div className='Person' style={style}>
    <h1 onClick={props.click}>I'm {props.name} and My age is {props.age}</h1>
    <input onChange={props.change} value={props.name} />
    </div>
  )
}

export default Radium(Person)
