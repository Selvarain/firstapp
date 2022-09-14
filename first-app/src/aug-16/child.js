import React, { useState } from 'react'

function Child({changeValue}) {
    const [enter,SetEnter]=useState('');
    
     
    const childToParent=()=>{
        changeValue(enter);
    }
    return (
    <div className='child'>
        <input className='input' type="text" onChange={(e)=>{SetEnter(e.target.value)}}/>
        <br></br>
        <button className='sub' type='submit' onClick={childToParent}>Submit</button>
        
    </div>
  )
}

export default Child;