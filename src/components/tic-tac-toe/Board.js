import React from 'react';
import Field from './Field';

const Board = ({ fields, onClick }) => {

    return(
        <div className='board'>
            {fields.map((field, index) => (
                <Field key={index} value={field} onClick={() => onClick(index)}/>
            ))}
        </div>
    )
};

export default Board;