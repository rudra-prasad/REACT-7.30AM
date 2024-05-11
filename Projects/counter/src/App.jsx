import { useState } from "react";
import './App.css'
function App ()
{
  const [c,setCount]=useState(0)
  function add()
  {
    setCount(c+1)
    console.log(c)
  }
  return(
    <div className="counter">
      <p>Count:{c}</p>
      <div className="">
      <button onClick={add}>+</button>
      <button onClick={()=>setCount(c-1)}>-</button>
      </div>
    </div>
  )
}
export default App