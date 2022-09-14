import React,{useRef,useState} from 'react'
import Image1 from './img/football.jpeg'
import './App.css';
function SetBg() {
  const [imgName,setImageName]=useState("")
  const inputfile=useRef(null)
  const myStyle2={
    // backgroundImage:`url(${Image1})`
    backgroundColor:"pink"
  }
  const setBackground=()=>
  {
    inputfile.current.style.display='block'
    myStyle2.background=`url(${imgName})`
  }
  return (
    <div className="setBg" style={myStyle2}>
      <img src={Image1} width="200px" height="200px" onClick={setBackground}/>
      <input type="file" ref={inputfile} style={{display:'none'}} onChange={e=>setImageName(e.target.files[0])}/>
    </div>
  )
}

export default SetBg;