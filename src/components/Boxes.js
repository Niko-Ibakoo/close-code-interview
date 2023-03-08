import React, { useState } from 'react'

const Boxes = ({props,handleEvent}) => {
    const[selected,setSelected] = useState(false)
    
    const event = (e)=>{
        handleEvent(e.target.innerText)
        setSelected(!selected)
    }
  return (
    <div onClick={event} style={{backgroundColor:props.color, boxShadow:selected?`0px 0px 5px 5px rgb(22, 234, 22)` : ``}} className='box'>
    {props.name}
    </div>
  )
}

export default Boxes