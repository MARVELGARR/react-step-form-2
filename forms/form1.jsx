import React from 'react'

function Form1() {
  return (
    <form className="">
      <h1 className=" text-md">Personal info</h1>
      <p className="">Please provide your name, email address, and phone number.</p>
      <div>
        <div>
          <label className="" for="name">Name</label>
          <input type="text" id='name' className=""/ >
          <div className=''></div>
        </div>
        <div>
          <label className="" for="email">Email Address</label>
          <input type="email" id="email" className=""/ >
          <div className=''></div>
        </div>
        <div>
          <label className="" for="number">Phone Number</label>
          <input type="number" id="number" className=""/ >
          <div className=''></div>
        </div>
      </div>
    </form>
  )
}

export default Form1