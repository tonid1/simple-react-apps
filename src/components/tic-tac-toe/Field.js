import React from 'react';

const Field = ({ value, onClick, }) => {

    return(
        <button onClick={onClick} className='field'>
            {value}
        </button>
    )

}

export default Field;