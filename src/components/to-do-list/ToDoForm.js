import React, { useState, useEffect, useRef } from 'react';

function ToDoForm(props){
  const[item, setItem] = useState('');

  const focus = useRef(null);

  useEffect(() => {
    focus.current.focus()
  })

  const handleChange = ({target}) => {
    setItem(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 20000), 
      name: item
    })

    setItem('')
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
      <input value={item} name="item" type='text' placeholder='Add a task' onChange={handleChange} ref={focus} className="form-input"/>
      <button className="form-button">Add</button>
      <br/>     
      </form>
    </div>
  )
}

export default ToDoForm;