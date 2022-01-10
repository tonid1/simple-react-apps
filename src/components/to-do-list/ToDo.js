import React, {useState} from 'react';

function ToDo({list, setList}){
    const removeItem = (targetIndex) => {
        setList((prev) => prev.filter((item, index) => index !== targetIndex))
    }

    const[completed, setCompleted] = useState([]);

    const completedTask = (item) => {
        setCompleted((prev) => [...prev, item])
    }

    const removeCompleted = (targetIndex) => {
        setCompleted((prev) => prev.filter((item, index) => index !== targetIndex))
    }


    if(list){
        return (
            <div>
                {list.map((item, index) => (
                    <div key={index} className="item">
                        <div key={item.id}>
                            {item.name}
                            <button className="item-button" onClick={() => removeItem(index)}>x</button>
                            <button className="item-button" onClick={() => {removeItem(index); completedTask(item)}}>✔</button>
                        </div>
                    </div>
                ))}
                <br />
                <h2>Finished tasks:</h2>
                {completed.map((item, index) => (
                    <div key={index} className="completed">
                        <div key={item.id}>
                            {item.name}
                            <button className="item-button" onClick={() => removeCompleted(index)}>x</button>
                        </div>
                    </div>
                ))}
            </div>
        )        
    }
}

export default ToDo