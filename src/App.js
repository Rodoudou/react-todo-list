import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Header from './component/header';
import Formulaire from './component/formulaire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./reset.css"
import './App.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faListUl,faTrash, faSpinner} from '@fortawesome/free-solid-svg-icons'; //<i class="fas fa-list-ul"></i>
library.add(faListUl,faTrash, faSpinner);


function App() {

  const [isLoading,setIsLoading]=useState(true);
  const [tasks,setTasks]=useState([
    {title:"faire les courses", sisDone : false},
    {title:"manger", sisDone : true},
  ]);
  const [newTaskInput, setNewTaskInput]=useState("");
  console.log("ici",tasks);
  console.log("newTaskInput",newTaskInput);

    useEffect(()=>{
      const fetchDatas= async()=>{
        const response = await axios.get(`http://localhost:8000/`);
        setTasks(response.data);
        setIsLoading(false)
      }
    },[]);
           


  return (
    <div className="App">
    <header> 
      <div> <Header/></div>
     </header>

    {isLoading?<p><FontAwesomeIcon icon="spinner"/>En Chargement...</p>: <section>
       <div>
       <Formulaire 
       tasks={tasks}
        setTasks={setTasks}
        newTaskInput={newTaskInput}
        setNewTaskInput={setNewTaskInput}
        />
        </div>
     </section>}
    

     <footer>FOOTER</footer>
     
    </div>
  );
}

export default App;
