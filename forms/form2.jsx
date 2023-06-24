import React, {useContext, useState} from 'react'
import { MyContext } from '../state managemant/MyContex'

function Form2() {
  const { handleBack, handleNext, handPeriodChange, periodicy, setPeriodicy} = useContext(MyContext);
  const [plan, setPlan] = useState('');
  const [price, setPrice] = useState('');
  const [selectedPlan, setSelectedPlan] = useState([]);

  const handleSelectRadio = (index) =>{
    if(index === 0){
      setPlan("arcade");
      console.log(plan); 
    }
    if(index === 1){
      setPlan("advance");
      console.log(plan); 
    }
    if(index === 2){
      setPlan("pro");
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
        <fieldset className="flex relative border-2 rounded-lg p-3 gap-5 items-center">
          <img className="" src="/images/icon-arcade.svg"/>
          <input onClick={()=>handleSelectRadio(0)} className='absolute opacity-0 left-0 right-0 top-0 bottom-0' type='radio' name='radio' value='Arcade'/>
          <div className="">
            <strong className='text-cyan-900 bold'>Arcade</strong>
            <div className="">{ periodicy ? `$9/mo` : "$90/yr"}</div>
          </div>
        </fieldset>
        <fieldset className=" flex relative border-2 gap-5 p-3 rounded-lg items-center">
          <img className="" src="/images/icon-advanced.svg"/>
          <input onClick={()=>handleSelectRadio(1)} className='absolute opacity-0 left-0 right-0 top-0 bottom-0' type='radio' name='radio' value='Advance'/>
          <div className="">
            <strong className='text-cyan-900 bold'>Advanced</strong>
            <div className="">{ periodicy ? `$12/mo`: "$120/yr"}</div>
          </div>
        </fieldset>
        <fieldset className="flex relative border-2 gap-5 p-3 rounded-lg items-center">
          <img className="" src="/images/icon-pro.svg"/>
          <input onClick={()=>handleSelectRadio(2)} className="absolute opacity-0 left-0 right-0 top-0 bottom-0" type='radio' name='radio' value='Pro'/>
          <div className="">
            <strong className='text-cyan-900 bold'>Pro</strong>
            <div className="">{ periodicy ? `$15/mo` : "$150/yr"}</div>
          </div>
        </fieldset>
      </div>
      <div className="flex">
        <strong className="">monthly</strong>
        <div className="">
        <label class="relative inline-flex items-center mb-5 cursor-pointer">
          <input onClick={handPeriodChange} type="checkbox" value="" class="sr-only peer"/>
          <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
        </label>

        </div>
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