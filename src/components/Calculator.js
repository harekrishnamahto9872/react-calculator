import React, {Component} from 'react'
import Board from './Board'

class Calculator extends Component{
    state = {
        result: 0,
        currState: ''
    }

    handleClear = (e) =>{
        this.setState(
            {
                currState : ''
            }
        )
    }
    handleInput = (e) =>{
        this.setState(
            {
                currState : this.state.currState + String(e.target.innerHTML)
            }
        )
    }
    handleEqualsTo = (e) =>{
        var expression = this.state.currState
        var res = eval(expression)
        // var currNum = 0
        // var prevSign = '+'
        // for(var i=0;i<expression.length;i++)
        // {
        //     if(expression[i]==='+' || expression[i]==='-' || expression[i]==='*' || expression[i]==='/')
        //     {
        //         if(prevSign==='+')
        //         {
        //             res += currNum;
        //             currNum = 0;
        //         }
        //         else if(prevSign==='-')
        //         {
        //             res -= currNum;
        //             currNum = 0;
        //         }
        //         else if(prevSign==='*')
        //         {
        //             res *= currNum;
        //             currNum = 0;
        //         }
        //         else{
        //             res /= currNum;
        //             currNum = 0;
        //         }
        //         prevSign = expression[i];
        //     }
        //     else{
        //         currNum = currNum*10 + Number(expression[i]);
        //     }
        // }
        this.setState({
            currState : res
        })
    }

    render(){
        return(
            <div>
                <Board handleClear={this.handleClear} handleEqualsTo={this.handleEqualsTo} handleInput={this.handleInput} currState={this.state.currState} />
            </div>
        )
    }
}
export default Calculator