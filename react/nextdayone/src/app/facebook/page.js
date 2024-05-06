'use client'
import React,{useState}from 'react'
import { AiOutlineLike } from "react-icons/ai";
const page = () => {
    const[color,setColor]=useState('grey')
    const handlecolorChange = () =>{
        setColor(color==="grey"?"blue":"grey")
    }
  return (
    <div>
        <button onClick={()=>handlecolorChange()} className='bg-gray-200 p-2 border border-black'><AiOutlineLike color={color}/></button>
    </div>
  )
}

export default page