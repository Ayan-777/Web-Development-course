import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden" }}>
        <img src="https://static.vecteezy.com/system/resources/previews/026/564/515/non_2x/programming-code-coding-or-hacker-sign-programming-code-icon-made-with-binary-code-in-wireframe-hands-digital-binary-data-and-digital-code-matrix-background-with-digits-1-0-illustration-vector.jpg" alt="" width={333} style={{border: "2px solid black"}} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      
    </div>
  )
}

export default Card