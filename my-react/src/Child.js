import React, { Component } from 'react'


export default class Child extends Component {
    constructor(){
        super();
        this.state={
            myname:""
        }
    }
    handleClick=()=>{
        this.props.changeName(this.state.myname)
    }
    componentWillUnmount()
    {
        console.log("Child is removed");
    }
  render() {
    return (
      <div className='child'>
        <h1>child component</h1>
        <h1> hai {this.props.value}</h1>
        <input type={'text'} onChange={(e)=>{this.setState({myname:e.target.value})}}/>
        <button onClick={this.handleClick}>click me</button>
      </div>
    )
  }
}