import React from 'react'

function Form2() {
  return (
    <div className=" px-7 py-7 pb-16 flex flex-col">
      <div className="">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-cyan-800">Select Your plan</h1>
          <p className=" text-xl text-gray-500 pb-4">You have the option of monthly or yearly billing.</p>
        </div>
      </div>
      <div className="">
        <fieldset className="">
          <img className="" src="/images/icon-arcade.svg"/>
          <div className="">
            <strong className='text-cyan-900 bold'>Arcade</strong>
            <div className="">$9/mo</div>
          </div>
        </fieldset>
        <fieldset className="">
          <img className="" src="/images/icon-advanced.svg"/>
          <div className="">
            <strong className='text-cyan-900 bold'>Advanced</strong>
            <div className="">$12/mo</div>
          </div>
        </fieldset>
        <fieldset className="">
          <img className="" src="/images/icon-pro.svg"/>
          <div className="">
            <strong className='text-cyan-900 bold'>Pro</strong>
            <div className="">$15/mo</div>
          </div>
        </fieldset>
      </div>
      <div className="w-full flex justify-between ">

        <button type="button" className="text-cyan-800 bg-white w-fit px-2 py-1 rounded-md "> Go Back </button>
        <button type="button" className="bg-cyan-800 text-white w-fit px-2 py-1 rounded-md "> Next Step </button>
      </div>
    </div>
  )
}

export default Form2