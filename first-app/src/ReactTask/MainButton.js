import React, { useState } from 'react'
import MyButton from './MyButton';

function MainButton() {

  const [btn1,setBtn1]=useState('');
  const [btn2,setBtn2]=useState('');

  function handleClickBtn1 (){
    setBtn1('click btn 1');
  }
  function handleClickBtn2 (){
    setBtn2('click btn 2');
  }
  return (
    <div>
        <MyButton variant="contained" color="primary" component="span" label="Button 1" handleClick={handleClickBtn1}/>
        {btn1}
        <br></br>
        <MyButton label="Button 2" handleClick={handleClickBtn2}/>
        <br></br>
        {btn2}
    </div>
  )
}

export default MainButton;