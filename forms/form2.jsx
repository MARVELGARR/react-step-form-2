import React, {useContext, useState} from 'react'
import { MyContext } from '../state managemant/MyContex'

function Form2() {
  const { handleBack, handleNext, handPeriodChange, periodicy, setPeriodicy} = useContext(MyContext);
  const [plan, setPlan] = useState([]);
  const [price, setPrice] = useState([]);

  const handleSelectRadio = (index) =>{
    if(index === 0){
      setPlan([...plan, "arcade"]);
      console.log(plan); 
    }
    if(index === 1){
      setPlan([...plan, "advance"]);
      console.log(plan); 
    }
    if(index === 2){
      setPlan([...plan, "pro"]);
      console.log(plan); 
    }
  }

  return (
    <div className=" px-7 py-7 pb-16 flex flex-col">
      <div className="">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-cyan-800">Select Your plan</h1>
          <p className=" text-xl text-gray-500 pb-4">You have the option of monthly or yearly billing.</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <fieldset className="flex border-2 rounded-lg p-3 gap-5 items-center">
          <img className="" src="/images/icon-arcade.svg"/>
          <input onClick={()=>handleSelectRadio(0)} type='radio' name='radio' value='Arcade'/>
          <div className="">
            <strong className='text-cyan-900 bold'>Arcade</strong>
            <div className="">$9/mo</div>
          </div>
        </fieldset>
        <fieldset className=" flex border-2 gap-5 p-3 rounded-lg items-center">
          <img className="" src="/images/icon-advanced.svg"/>
          <input onClick={()=>handleSelectRadio(1)} type='radio' name='radio' value='Advance'/>
          <div className="">
            <strong className='text-cyan-900 bold'>Advanced</strong>
            <div className="">$12/mo</div>
          </div>
        </fieldset>
        <fieldset className="flex border-2 gap-5 p-3 rounded-lg items-center">
          <img className="" src="/images/icon-pro.svg"/>
          <input onClick={()=>handleSelectRadio(2)} type='radio' name='radio' value='Pro'/>
          <div className="">
            <strong className='text-cyan-900 bold'>Pro</strong>
            <div className="">$15/mo</div>
          </div>
        </fieldset>
      </div>
      <div className="flex">
        <strong className="">monthly</strong>
        <div className=""></div>
        <div className="">yearly</div>
      </div>
      <div className="w-full flex justify-between ">

        <button onClick={handleBack} type="button" className="text-cyan-800 bg-white w-fit px-2 py-1 rounded-md text-xl"> Go Back </button>
        <button onClick={handleNext} type="button" className="bg-cyan-800 text-white w-fit px-2 py-1 rounded-md "> Next Step </button>
      </div>
    </div>
  )
}

export default Form2