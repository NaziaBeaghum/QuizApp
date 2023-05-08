import {React,useContext} from "react";
import { AppContext } from "../App";

export default function Ques({question})
{
   const {index,setindex}=useContext(AppContext)
   
    return(
    <>
     {index+1}.{question}
    </>
    )
    

}