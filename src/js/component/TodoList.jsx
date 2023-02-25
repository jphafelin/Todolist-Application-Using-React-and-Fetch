import React, { useState } from "react";

//include images into your bundle


//create your first component

const TodoList = () => {


    const [inputValue,setInputValue] = useState("")
    const [todos,setTodos] = useState([])

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
            };
            
    

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
                        setTodos(todos.concat(inputValue));
                        setInputValue("");

                    }}}
                placeholder="What do you need to do" /></li>
                {todos.map((item, index) => (
                    <li>
                        {item} <i className="far fa-trash-alt" onClick={()=>setTodos(todos.filter((t, currentIndex)=> index != currentIndex))}></i> 
                    </li>
                ))}
                
                
            </ul>
            
            
            <div>{textTask()}</div>

        </div>
    );
};

export default TodoList;