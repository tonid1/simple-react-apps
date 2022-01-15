import React from 'react';

function Fields({HandleClick, HandleClear, HandleResult}){

    return(
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
    )
}

export default Fields;