import React from 'react'
import Child from './Child';
import './par.css';

export default class Parent extends React.Component {
    constructor(){
        super();
        this.state={
            value:'selva',
            name:'',
            show:false
    }
  }
    changeName=(steve)=>{
      this.setState({
        name:steve
      })
    }
  render() {
    return (
      <div  className='parent'>
        <h1>parent component</h1>
        <h1>Welcome to our channel {this.state.name}</h1>
        <button onClick={()=>{this.setState({show:!this.state.show})}}>Show Child</button>
        {this.state.show?<Child value={this.state.value} changeName={this.changeName} />:''}
      </div>
    )
  }
}

