import React, { useContext, useEffect } from 'react'
import Form1 from '../forms/form1'
import Form2 from '../forms/form2'
import Form3 from '../forms/form3'
import Form4 from '../forms/form4'
import Form5 from '../forms/form5'
import '../src/App.css'
import { MyContext } from '../state managemant/MyContex'

function Hero() {

  const {next, handleSubmit} = useContext(MyContext)

  return (
    <form onSubmit={handleSubmit} className="absolute md:shadow-none md:-mt-32 md:relative -left-30 form bg-white shadow-xl shadow-slate-300 rounded-xl ">
      { next === 0 ? <Form1/> : next === 1 ? <Form2/> : next === 2 ? <Form3/> : next === 3 ? <Form4/> : <Form5/>}
    </form>
  )
}

export default Hero