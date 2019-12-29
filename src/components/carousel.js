import React,{useState} from 'react'
import {MdArrowForward,MdArrowBack} from 'react-icons/md'

export default function Carousel() {
const[image, setImage] = useState('https://picsum.photos/500/400?random=2')
const handleBack = () =>{
  setImage('https://picsum.photos/500/400?random=1')
}
const handleFront = () =>{
  setImage('https://picsum.photos/500/400?random=3')
}
    return (
        <div>
          <button onClick={handleBack}>
          <MdArrowBack/>
          </button>
          <img src={image}/>
          <button onClick={handleFront}>
          <MdArrowForward/>
          </button>
           
        </div>
    )
}
