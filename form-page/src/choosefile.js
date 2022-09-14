import React, { useRef, useState } from 'react'
import './file.css'

function Choosefile() {
  const [name,SetName]=useState('');
  const textName=useRef(null);
  return (
    <div className='Text-page'>
        <h2>Student Name</h2>
        <input type="text"  ref={textName}
         onChange={(e)=>{SetName(e.target.value) 
        }}
          onMouseOut={(e)=>e.target.value=""}/>
         <br/>{name}
         <br/>
         <div>
            <button className='btn1' onClick={()=>textName.current.value=name}>Edit</button>
            <button className='btn2' onClick={()=>SetName("")}>Delete</button>
         </div>
    </div>
  )
}

export default Choosefile;