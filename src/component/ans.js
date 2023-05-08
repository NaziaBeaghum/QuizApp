
import React from "react";
import { AppContext } from "../App";
import { useContext } from "react";
export default function Answer({correct_ans,answers})
{   
    const {quiz,setquiz,index,setindex,score,setscore,selected,setSelected,handleCheck}=useContext(AppContext)

    
    
   
    function handleSelect(answerItem)
    {
        if(selected===correct_ans&&selected===answerItem)
        {
            return 'green '
        }
        else if(selected!==correct_ans&&selected===answerItem)
        {
            return 'red'
        }
        else if(answerItem===correct_ans)
        {
            return 'green'
        }

    }
    
    return(
        <div className="answer">
            {answers.map((answerItem,id)=>{ return<button 
            key={id} 
            onClick={()=>handleCheck(answerItem)}
             className={`btn ${selected&&handleSelect(answerItem)}`}>
                {answerItem}
                </button>
            })}
            
            
        </div>
    )
}