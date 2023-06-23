import React, { useEffect, useState, useContext } from 'react'
import "../src/index.css"
import { MyContext } from '../state managemant/MyContex';

function Form1() {

  const { validate, setName, setEmail, setPhone, handleNext, next, name, nameError, setNameError, email, emailError, setEmailError, phone, phoneError, setPhoneError } = useContext(MyContext)

  const collectName = (e) =>{
    const value = e.target.value;
    setName(value);
  }
  const collectEmail= (e) =>{
    const value = e.target.value;
    setEmail(value);
  }
  const collectPhone = (e) =>{
    const value = e.target.value;
    setPhone(value);
  }


  return (
    <div className=" px-7 py-7 pb-16 flex flex-col">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-cyan-800">Personal info</h1>
        <p className=" text-xl text-gray-500 pb-4">Please provide your name, email address, and phone number.</p>
      </div>

      <div className=" flex flex-col gap-3">
        <fieldset className='flex flex-col'>
          <label className=" text-lg" htmlFor='name'>Name</label>
          <input onChange={collectName} type="text" id='name' placeholder='e.g Stephen King' className="h-8 border pl-2 rounded-lg border-gray-400" />
          <div className=' text-red-700'>{nameError}</div>
        </fieldset>
        <fieldset className='flex flex-col'>
          <label className=" text-lg" htmlFor='email'>Email Address</label>
          <input onChange={collectEmail} type="email" id="email" placeholder='e.g stephenking@gmail.com' className="h-8 border pl-2 rounded-lg border-gray-400" />
          <div className='text-red-700'>{emailError}</div>
        </fieldset>
        <fieldset className='flex flex-col'>
          <label className=" text-lg" htmlFor='number'>Phone Number</label>
          <input onChange={collectPhone} type="number" id="number" placeholder='e.g +123 8152 7958 86' className=" h-8 border pl-2 rounded-lg border-gray-400"/>
          <div className='text-red-700'>{phoneError}</div>
        </fieldset>
      </div>
      <button type="button" onClick={handleNext} className="bg-cyan-800 text-white w-fit px-2 py-1 rounded-md absolute bottom-5 right-7"> Next Step </button>
    </div>
  )
}

export default Form1