import React from 'react'
import "../src/index.css"

function Form1() {
  return (
    <form className="w-full  flex flex-col">
      <div className=" ">
        <h1 className="">Personal info</h1>
        <p className=" ">Please provide your name, email address, and phone number.</p>
      </div>

      <div className="">
        <fieldset>
          <label className="" htmlFor='name'>Name</label>
          <input type="text" id='name' className="" />
          <div className=''></div>
        </fieldset>
        <fieldset>
          <label className="">Email Address</label>
          <input type="email" id="email" className="" />
          <div className=''></div>
        </fieldset>
        <fieldset>
          <label className="">Phone Number</label>
          <input type="number" id="number" className="" />
          <div className=''></div>
        </fieldset>
      </div>
    </form>
  )
}

export default Form1