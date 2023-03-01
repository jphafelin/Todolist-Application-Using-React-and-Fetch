import { array } from "prop-types";
import React, { useState, useEffect } from "react";

//include images into your bundle


//create your first component

const TodoList = () => {


    const [inputValue,setInputValue] = useState("")
    const [todos,setTodos] = useState([])
    
    
    const getTodos = async () => {
        const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/jphafelin");
        if (response.ok) {
          const responseJSON = await response.json();
          setTodos(responseJSON);
        }
      };
    
      useEffect(() => {
        getTodos();
      }, []);



    useEffect(async () => {
        const url = "https://assets.breatheco.de/apis/fake/todos/user/jphafelin";
        const request = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todos),
        };
        if (request.body.length > 2) {
            const response = await fetch(url, request);
            if (response.ok) {
                const responseJSON = await response.json();
                console.log("todo ok");
            } else {
                console.log('error', error);
            }
        }

    }, [todos])


    function textTask(){
        if (todos.length == 0){
            let taskNumber = "No tienes tareas pendientes";
            return taskNumber
             
        }

        else if (todos.length == 1){
            let taskNumber = "1 Tarea Pendiente";
            return taskNumber
        }

        else{
            let taskNumber = todos.length + " Tareas Pendientes";
            return taskNumber
        }
    }

    return (
        <div id="divPrincipal" className="container">
            <h1>To Do List </h1>
            <ul>
                <li><input type="text"
                maxLength="80"
                onChange={(e)=> setInputValue(e.target.value)}
                value={inputValue}
                onKeyPress={(e)=>{
                    if(e.key === "Enter" && inputValue != ""){
                        let todo = {label: inputValue, done: false}
                        setTodos(todos.concat(todo));
                        setInputValue("");

                    }}}
                placeholder="What do you need to do" /></li>
                {todos.map((item, index) => (
    
                    <li key={index}>
                        {item.label} <i className="far fa-trash-alt" onClick={()=>setTodos(todos.filter((t, currentIndex)=> index != currentIndex))}></i> 
                    </li>
                ))}
                
                
            </ul>
            
            
            <div>{textTask()}</div>

        </div>
    );
};

export default TodoList;