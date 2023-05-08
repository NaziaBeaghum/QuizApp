import React from "react";
import { useEffect,useState } from "react";
import Answer from "./component/ans";
import Ques from "./component/ques";
import {nanoid} from "nanoid"
import { useContext } from "react";
import { AppContext } from "./App";

export default function Question()
{   
  const {quiz,index,setindex,score,setscore}=useContext(AppContext)

   console.log(quiz)

   const handleNext=()=>
   {
    setindex(previndex=>previndex+1)
   }
   
   
    
    return(
      <div className="main">
      

      

        {index<quiz.length?
                (
                  <>
                <Ques
                  key={nanoid()} question={quiz[index].question} 
                 />
                <Answer
                key={nanoid()} correct_ans={quiz[index].correct_answer} answers={quiz[index].answers}
                />
                <button  className="next" onClick={handleNext}>{index<quiz.length?"Next":"Check score"}</button>
                </>
                )
                :

                (
                <><h2>Your score is {score} </h2>
                <button  onClick={()=>{setindex(0)}} className="restart_btn">Restart</button>
                </>)
       }
      
      </div>
      
    )

     

        
}