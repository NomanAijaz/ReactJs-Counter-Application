import React from 'react'
import Counter from './Counter'

export default class Counters extends React.Component{

    render(){
        return(<div>
            <button className='btn btn-primary btn-sm m-2' onClick={this.props.onReset}>Reset</button>
            {this.props.counters.map((element)=>(<Counter key={element.id} counters = {element} onIncrement = {this.props.onIncrement} onDelete= {this.props.onDelete}/>))}
        </div>);
    }

}