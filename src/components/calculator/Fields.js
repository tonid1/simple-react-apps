import React, { useState } from 'react';

function Fields(){
    const [expression, setExpression] = useState([]);
    const [currentNum, setCurrentNum] = useState('');
    const [result, setResult] = useState();

    const HandleClick = (e) => {

        setResult();

        if(isNaN(e.target.value)){
            setCurrentNum('');

            /* don't allow operators in first place, only one - for negative numbers */
            if((expression.length === 0 && e.target.value !== '-') || (expression.length === 1 && expression[0] === '-')){
                setExpression(prev => [...prev]);
            }
            else{
                setExpression(prev => [...prev, e.target.value]);
            }            
        }

        else{

            if(isNaN(expression.at(-1))){

                setCurrentNum(currentNum + e.target.value);
                setExpression(prev => [...prev, e.target.value]);
            }
            else{

                /* don't allow 0 at first place of number */
                if(currentNum === '0'){
                    setCurrentNum(e.target.value);
                    expression.pop();

                    setExpression(prev => [...prev, e.target.value]);
                }

                else{
                    setCurrentNum(currentNum + e.target.value);
                    expression.pop();

                    setExpression(prev => [...prev, currentNum + e.target.value]);
                }
                
            }

        } 
        
        /* don't allow 2 operators in a row */
        if(isNaN(e.target.value) && isNaN(expression.at(-1))){
            expression.pop();
        }

        console.log(expression);

    }

    const HandleResult = () => {

        /* Check if last character in expression is an operator */
        if(!isNaN(expression[expression.length - 1])){

            /* don't do math if there are not enough numbers in array */
            if(expression[0] === '-'){

                if(expression.length > 3){
                    
                setResult(eval(expression.join('')));
                setExpression([]);
                setCurrentNum('');
                }
            }
            else{

                if(expression.length > 2){

                    setResult(eval(expression.join('')));
                    setExpression([]);
                    setCurrentNum('');
                }
            }
        } 
    }

    const HandleClear = () => {

        setExpression([]);
        setCurrentNum('');

    }

    return(
        <section className='calculator-section'>
            <div className='expression-div'>
                <div className='expression-title'>
                    <h2>Expression: </h2>
                </div>
                <div className='expression'>
                    {expression.map((item, index) => {
                    return(
                        <h2 key={index}>{item}</h2>
                    )
                })}
                </div>                
            </div>
            <div className='expression-div'>
                <div className='expression-title'>
                    <h2>Result: </h2>
                </div>
                <div className='expression'>
                    <h2>{result}</h2>
                </div>                
            </div>
            <div className='numbers-grid'>
                <button onClick={HandleClick} value='1' className='calculator-button'>1</button>
                <button onClick={HandleClick} value='2' className='calculator-button'>2</button>
                <button onClick={HandleClick} value='3' className='calculator-button'>3</button>
                <button onClick={HandleClick} value='/' className='calculator-button'>/</button>
                <button onClick={HandleClick} value='4' className='calculator-button'>4</button>
                <button onClick={HandleClick} value='5' className='calculator-button'>5</button>
                <button onClick={HandleClick} value='6' className='calculator-button'>6</button>
                <button onClick={HandleClick} value='*' className='calculator-button'>*</button>
                <button onClick={HandleClick} value='7' className='calculator-button'>7</button>
                <button onClick={HandleClick} value='8' className='calculator-button'>8</button>
                <button onClick={HandleClick} value='9' className='calculator-button'>9</button>
                <button onClick={HandleClick} value='-' className='calculator-button'>-</button>
                <button onClick={HandleClear} className='calculator-button clear'>C</button>
                <button onClick={HandleClick} value='0' className='calculator-button'>0</button>
                <button onClick={HandleResult} className='calculator-button equals'>=</button>
                <button onClick={HandleClick} value='+' className='calculator-button'>+</button>
            </div>
        </section>
    )
}

export default Fields;