import React from 'react'

const Todo = (props) => {
  return (
    <div>
      <li key={props.index} >
              {props.task}<button onClick={()=>remove(i)}></button>
              </li>
    </div>
  )
}

export default Todo
