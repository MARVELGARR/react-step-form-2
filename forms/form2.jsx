import React, {useContext, useState} from 'react'
import { MyContext } from '../state managemant/MyContex'

function Form2() {
  const { handleBack, handleSelectRadio, selectedPrice, selectedPlan, arcadePrice, advancePrice, proPrice, handleNext, handPeriodChange} = useContext(MyContext);
  

  return (
    <div className=" px-7 py-7 pb-16 flex flex-col">
      <div className="">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-cyan-800">Select Your plan</h1>
          <p className=" text-xl text-gray-500 pb-4">You have the option of monthly or yearly billing.</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <fieldset className={` ${ selectedPlan == "arcade" ? " border-cyan-950" : ""} flex relative border-2 rounded-lg p-3 gap-5 items-center`}>
          <img className="" src="/images/icon-arcade.svg"/>
          <input onClick={()=>handleSelectRadio("arcade", arcadePrice)} className='absolute opacity-0 left-0 right-0 top-0 bottom-0' type='radio' name='radio' value='Arcade'/>
          <div className="">
            <strong className='text-cyan-900 bold'>Arcade</strong>
            <div className="">{arcadePrice}</div>
            <div className="">{}</div>
          </div>
        </fieldset>
        <fieldset className={` ${ selectedPlan == "advance" ? " border-cyan-950" : "" } flex relative border-2 gap-5 p-3 rounded-lg items-center`}>
          <img className="" src="/images/icon-advanced.svg"/>
          <input onClick={()=>handleSelectRadio("advance", advancePrice)} className='absolute opacity-0 left-0 right-0 top-0 bottom-0' type='radio' name='radio' value='Advance'/>
          <div className="">
            <strong className='text-cyan-900 bold'>Advanced</strong>
            <div className="">{ advancePrice }</div>
            <div className="">{}</div>
          </div>
        </fieldset>
        <fieldset className={` ${ selectedPlan == "pro" ? " border-cyan-950" : "" } flex relative border-2 gap-5 p-3 rounded-lg items-center`}>
          <img className="" src="/images/icon-pro.svg"/>
          <input onClick={()=>handleSelectRadio("pro", proPrice)} className="absolute opacity-0 left-0 right-0 top-0 bottom-0 " type='radio' name='radio' value='Pro'/>
          <div className="">
            <strong className='text-cyan-900 bold'>Pro</strong>
            <div className="">{ proPrice }</div>
            <div className="">{}</div>
          </div>
        </fieldset>
      </div>
      <div className="flex mt-7 w-full justify-center items-center gap-3">
        <strong className=" text-lg">monthly</strong>
        <div className="pt-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input onClick={handPeriodChange} type="checkbox" value="" className="sr-only peer"/>
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="text-lg">yearly</div>
      </div>
      <div className="w-full flex justify-between mt-5">
        <button onClick={handleBack} type="button" className="text-cyan-800 bg-white w-fit px-2 py-1 rounded-md text-xl"> Go Back </button>
        <button onClick={handleNext} type="button" className="bg-cyan-800 text-white w-fit px-2 py-1 rounded-md "> Next Step </button>
      </div>
    </div>
  )
}

export default Form2