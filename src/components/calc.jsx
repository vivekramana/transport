import React,{useState} from 'react'
import {FaPlus} from 'react-icons/fa'

export default function Calc() {
    const[number,setNum] = useState(0)
    const[prevNum,setPrevNum] = useState(0)
    const[total,setTotal] = useState(0)
    const onChange = (e) =>{
        debugger;
        setNum(Number(e.target.value))
    }
    const add = () =>{

        
        
        setTotal(prevNum+number)
        setPrevNum(total)
    }
    const duplicate = (arr) =>{
      for(let i=1; i<=100;i++){
          if(i%3===0 && i%5 === 0){
              console.log(i+":fizzbuzz")
          }else if(i%3 === 0){
            console.log(i+":fizz")

          }else if(i%5 === 0){
            console.log(i+":buzz")
          }
      }  
    }
    return (
        <div>
            <input type='Number' value={number} onChange={onChange}/>
            <button onClick={duplicate} >
            <FaPlus/>
            </button>
            <h1>{total}</h1>
        </div>
    )
}
