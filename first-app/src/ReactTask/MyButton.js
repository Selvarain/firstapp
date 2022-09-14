import React from 'react'
import Button from '@mui/material/Button';

function MyButton(props) {
  // function handleClick(){
  //   console.log("Hi click this");
  // }
  return (
    <div>
         <Button variant="contained" color="primary" component="span" onClick={props.handleClick}>{props.label}</Button>
    </div>
  )
}

export default MyButton;