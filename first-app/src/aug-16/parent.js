import React,{useState} from 'react'
import Child from './child';
import './parchi.css';
function Parent() {
    const [buttonName,setButtonName]=useState(false);
    const [buttonText, setButtonText] = useState('');
    const [val,setVal]=useState('');


    const changeValue=(val)=>{
      setVal(val)
    }
    function handleClick() {
    
        setButtonText(val);
        
      }
  return (
    <div>
        
        <button className='parent' onClick={()=>{handleClick(); setButtonName(!buttonName)}}>{buttonName?"visible":"Invisible"}</button>
        {/* <p className='para'>{buttonText}</p> */}
        {buttonName?<Child changeValue={changeValue}/>:<>Your Name is: {buttonText}</>}
        
        
        
        
    </div>
  )
}

export default Parent;