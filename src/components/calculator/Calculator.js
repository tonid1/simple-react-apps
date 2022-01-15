import React, { useState } from 'react';
import Fields from './Fields';

function Calculator(){
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
            <Fields HandleClick={HandleClick} HandleClear={HandleClear} HandleResult={HandleResult} />
        </section>
    )
}

export default Calculator;