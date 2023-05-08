import React from 'react';
import { useState,useEffect } from 'react';

import {Routes,Route} from 'react-router-dom'
import './App.css';
import Question from './question';
import Start from './start';
import { createContext } from "react";

export const AppContext=createContext()




export default function App()
 {
  const[quiz,setquiz]=useState([])
  const[index,setindex]=useState(0)
  const[selected,setSelected]=React.useState()
    const[score,setscore]=React.useState(0)
  

     
  
  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple")
    .then(res=>res.json())
    .then(data=>{const quizelement=data.results.map
      (item=>({...item,answers:([item.correct_answer,...item.incorrect_answers].sort(()=>Math.random()-0.5))})) 
            setquiz(quizelement)})
    

  },[])
  function handleCheck(answerItem)
  {
   setSelected(answerItem)
    const correct_ans=quiz[index].correct_answer
   if(selected===correct_ans)
   {
      setscore(prevalue=>prevalue+1)
   }
   console.log(score)
  }
  
  
  return (

      <div className="App">
    
      
    <AppContext.Provider value={{quiz,setquiz,index,setindex,selected,setSelected,score,setscore,handleCheck}} >


          <Routes>
            
              <Route path="/" element={<Start
                                        />}/>
              <Route path="question" element={<Question
               />}/>
          </Routes>

    </AppContext.Provider>
 
      
    </div>
  );
}

