import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../App.css'


const Formulaire=({tasks,setTasks, newTaskInput,setNewTaskInput})=> {

    const onSubmit =(e)=>{
        e.preventDefault()
        const newTask = [...tasks];
        newTask.push({
            title: newTaskInput,
            isDone: false
        });
        setTasks(newTask);

        //Vider le input
        setNewTaskInput("");
        
    }
    const handleChange=(e)=>{
        const newTaskInput = e.target.value;
        setNewTaskInput(newTaskInput);
        console.log(newTaskInput);
    }





    return (
        <div className="formulaire"  >

        {tasks.map((task,index)=>{
            return  (
                <div  key={task.title} style={{backgroundColor:"green"}} >
                        <input 
                        type="checkbox" 
                        checked={task.isDone}
                        onClick={()=>{
                            const newTasks = [...tasks];
                       
                            if(newTasks[index].isDone=== true){
                            newTasks[index].isDone = false;
                        }else{
                            newTasks[index].isDone = true;
                        }
                        setTasks(newTasks);
                        console.log(newTasks[index].isDone )
                        }}
                        />
                        
                        <span className={tasks[index].isDone && "checked"}>{task.title}</span>
                        <span onClick={()=>{
                            const newTasks = [...tasks];
                            newTasks.splice(index,1)
                            setTasks(newTasks);
                        }} 
                        className="addTask"> <FontAwesomeIcon icon="trash"/></span>
                        
                </div>
        )
        })}

       

            <form  onSubmit={onSubmit}>
            <div >
                <textarea  value={newTaskInput} onChange={handleChange} placeholder="add your task"/>
                <button type="submit">Add task</button>
            </div>

            </form>
        </div>
    )
}
export default Formulaire;