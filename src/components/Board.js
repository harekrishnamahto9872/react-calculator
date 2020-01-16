import React, {Component} from 'react'
import Boardcss from './Board.css'


function Board({handleClear, handleEqualsTo, handleInput, currState})
{
    return(
        <div style={Boardcss}>
           <div id="calculator">
					<div className="result">{currState}</div>
					<div className="clear" onClick={handleClear}>C</div>
				 
					<span onClick={handleInput}>7</span>
					<span onClick={handleInput}>8</span>
					<span onClick={handleInput}>9</span>
					<span onClick={handleInput}>+</span>
				 
					<span onClick={handleInput}>4</span>
					<span onClick={handleInput}>5</span>
					<span onClick={handleInput}>6</span>
					<span onClick={handleInput}>-</span>
				 
					<span onClick={handleInput}>1</span>
					<span onClick={handleInput}>2</span>
					<span onClick={handleInput}>3</span>
					<span onClick={handleInput}>/</span>
				 
					<span onClick={handleInput}>0</span>
					<span onClick={handleInput}>.</span>
					<span onClick={handleEqualsTo}>=</span>
					<span onClick={handleInput}>*</span>
				  </div>

      </div>
    )
}
export default Board