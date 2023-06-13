import React from 'react'

function Form1() {
  return (
    <form className=" flex flex-col gap-5">
      <div className="">
        <h1 className="">Personal info</h1>
        <p className="">Please provide your name, email address, and phone number.</p>
      </div>
      
      <div className="">
        <fieldset>
          <label className="">Name</label>
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