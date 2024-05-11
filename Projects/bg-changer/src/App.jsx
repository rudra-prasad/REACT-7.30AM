import { useState } from "react"
import './App.css'
function App()
{
  
  const [background, setBackground]=useState('#000000')
  const [loading,setLoading]=useState(true)
  function change()
  {
    console.log(Math.round(Math.random()*1000000).toString(16))
    const random_color="#" + Math.round(Math.round(Math.random()*1000000).toString(16));
    console.log(random_color)
    setBackground(random_color)
    
  }
  let obj ={backgroundColor:background}
  return(
    <div className="changer" style={{backgroundColor:background}}>
      <button onClick={change}>change</button>
    </div>
  )
}
export  default App