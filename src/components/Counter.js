import React from 'react';
import ReactDOM  from 'react';
export default class Counter extends React.Component{
    


    // constructor(props){
    //     super(props);
    //     console.log('props data:',this.props);
    //     this.handleCountChangeValue = this.handleCountChangeValue.bind(this);
    // }

    handleCountColor(){
        const {value} = this.props.counters;
        let classes = "badge m-2 bg-";
        classes += value==0? "primary":"danger";
        return classes;
    }

   
    render(){  
        return(<div style={{margin:5}}>
            <span className={this.handleCountColor()}>{this.props.counters.value==0? "Zero" : this.props.counters.value}</span>
            <button className="btn btn-secondary" onClick={(e)=>{
               this.props.onIncrement(this.props.counters)
            }}>Increment</button>   
            <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.onDelete(this.props.counters.id)}>Delete</button>
        </div>);
    }


}