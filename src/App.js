import React from 'react';
import Counters from './components/Counters';
import NavBar
 from './components/NavBar';
export default class App extends React.Component{
  
  state={

    counters:[
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0},
    ]
}

handleValueChange=(counter)=>{
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index].value++;
    this.setState({counters});   
}

handleReset=()=>{
   
   const counters = this.state.counters.map((e)=>{
    return {...e, value:0};
   });

   this.setState({counters})
   
}


handleDelete=(counterId)=>{
    const counters = this.state.counters.filter((e)=>e.id!==counterId);
    this.setState({counters});
}



  render(){
    return(
      <React.Fragment>
        <NavBar totalValues = {this.state.counters.map((e)=>e.value).reduce((prev,curr)=>prev+curr,0)} />
        <main className='Container'>
        <Counters counters = {this.state.counters} onReset= {this.handleReset} onIncrement = {this.handleValueChange} onDelete= {this.handleDelete} />
        </main>
      </React.Fragment>
    );
  }
}
