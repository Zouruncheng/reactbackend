import React from 'react'
import Child from './Child'
import {Button} from 'antd'

export default class Life extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
        };
      }
    handleAdd=()=>{
        this.setState({
            count:this.state.count + 1,
        })
    }

    handleClick(){
        this.setState({
            count:this.state.count + 1,
        })
    }

    render(){
        return <div>
            <p>React组件生命周期解释</p>
            <Button onClick={this.handleAdd}>antd click</Button>
            <button onClick={this.handleAdd}>click me</button>
            <button onClick={this.handleClick.bind(this)}>click me</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
} 