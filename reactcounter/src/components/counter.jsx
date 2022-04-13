import { useState } from "react"

export const Counter = () =>{
  const [count,setCount] = useState(0)

  const clickChange=(value)=>{
      setCount(count+value)
  }
  const double =()=>{
  setCount(count*2)
  }
    return (
   <div className="parent">
       <h2 style={count%2 === 0 ? {color:'red'} : {color:'green'}}>{count}</h2>
       <button onClick={()=>(clickChange(1))}>Add</button>
       <button onClick={()=>(clickChange(-1))}>Substract</button>
       <button onClick={double}>Double</button>
   </div>
    )
}