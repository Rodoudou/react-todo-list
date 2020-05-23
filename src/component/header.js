import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header=()=>{
    return (
        <div className="header">
    
           <h1><FontAwesomeIcon style={{color:"purple", marginRight:10}} icon="list-ul" />TodoList</h1>
        </div>
    )
}

export default Header