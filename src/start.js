import React from "react";
import {useNavigate} from "react-router-dom"

export default function Start()
{
    const navigate=useNavigate();
    return(
        <div className="start_container">
            <div className="start_detail">
             <span className="quiz_title">General Knowledge Questions</span>   
            <p className="quiz_detail">“Education is the most powerful weapon which you can use to change the world.” —Nelson Mandela. There's no doubt about it: Education is a powerful tool for change.</p>
            </div>
            <button className="start_button" onClick={()=>navigate("/Question")}> Start</button>
            
        </div>
        
    )
}