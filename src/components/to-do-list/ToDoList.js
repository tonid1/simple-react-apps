import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

function ToDoList(){
  const[list, setList] = useState([]);

  const addItem = (item) => {
    setList((prev) => [item, ...prev])
  };

  return(
    <div className='todo-outter'>
      <div className="todo-list-app">
          <h1>To do list:</h1>
        <ToDoForm onSubmit={addItem}/>
        <ToDo list={list} setList={setList} />
      </div>
    </div>
  )
}

export default ToDoList;