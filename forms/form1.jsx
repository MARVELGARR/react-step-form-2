import React from 'react'
import "../src/index.css"

function Form1() {
  return (
    <form className="w-full px-7 flex flex-col">
      <div className=" ">
        <h1 className="text-3xl font-bold text-cyan-800">Personal info</h1>
        <p className=" text-xl text-gray-500">Please provide your name, email address, and phone number.</p>
      </div>

      <div className="">
        <fieldset className='flex flex-col'>
          <label className=" font-bold text-lg" htmlFor='name'>Name</label>
          <input type="text" id='name' className=" border-5" />
          <div className=''></div>
        </fieldset>
        <fieldset className='flex flex-col'>
          <label className="font-bold text-lg" htmlFor='email'>Email Address</label>
          <input type="email" id="email" className="" />
          <div className=''></div>
        </fieldset>
        <fieldset className='flex flex-col'>
          <label className="font-bold text-lg" htmlFor='number'>Phone Number</label>
          <input type="number" id="number" className="" />
          <div className=''></div>
        </fieldset>
      </div>
    </form>
  )
}

export default Form1