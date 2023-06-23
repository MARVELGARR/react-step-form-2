import React, { useContext, useEffect } from 'react'
import Form1 from '../forms/form1'
import Form2 from '../forms/form2'
import Form3 from '../forms/form3'
import Form4 from '../forms/form4'
import '../src/App.css'
import { MyContext } from '../state managemant/MyContex'

function Hero() {

  const {next, } = useContext(MyContext)
  useEffect(()=>{
    console.log(next)
  },[])

  return (
    <div className="absolute form bg-white shadow-xl shadow-slate-300 rounded-xl ">
      { next === 0 ? <Form1/> : next === 1 ? <Form2/> : next === 2 ? <Form3/> : <Form4/>}
    </div>
  )
}

export default Hero