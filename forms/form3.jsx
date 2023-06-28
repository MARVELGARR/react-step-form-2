import React, { useContext} from 'react'
import { MyContext } from '../state managemant/MyContex'

function Form3() {

  const { handleBack, toggleRef, servicePrice1, servicePrice2, servicePrice3, handleNext, handleCheckBox} =  useContext(MyContext)



  return (
    <div className="px-4 py-7 pb-16 flex flex-col">
      <div className="">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-cyan-800">Pick add-ons</h1>
          <p className=" text-xl text-gray-500 pb-4">Add-ons helps enhance your gaming experience</p>
        </div>
        <div className=" flex flex-col gap-4">
          <fieldset className=" flex px-2 py-3 border-2 rounded-lg items-center justify-between">
            <input onClick={()=>handleCheckBox("online service", servicePrice1 )} type="checkbox" className=" w-4 h-4"/>
            <div className="">
              <h3 className=" font-bold text-md text-cyan-900">Online service</h3>
              <p className="text-sm text-gray-400">Access to multiplayer games</p>
            </div>
            <div className="text-cyan-900 text-sm font-semibold">{servicePrice1}</div>
          </fieldset>
          <fieldset className=" flex px-2 py-3 border-2 rounded-lg items-center justify-between">
            <input onClick={()=>handleCheckBox("Larger storage", servicePrice2 )} type="checkbox" className=" w-4 h-4"/>
            <div className="">
              <h3 className=" font-bold text-md text-cyan-900">Larger storage</h3>
              <p className="text-sm text-gray-400">Extra 1TB of cloud save</p>
            </div>
            <div className="text-cyan-900 text-sm font-semibold">{servicePrice2}</div>
          </fieldset>
          <fieldset className=" flex px-2 py-3 border-2 rounded-lg items-center justify-between">
            <input  onClick={()=>handleCheckBox("Customizable profile", servicePrice3 )} type="checkbox" className=" w-4 h-4"/>
            <div className="">
              <h3 className=" font-bold text-md text-cyan-900">Customizable profile</h3>
              <p className="text-sm text-gray-400">Custom theme on your profile</p>
            </div>
            <div className="text-cyan-900 text-sm font-semibold">{servicePrice3}</div>
          </fieldset>
        </div>
      </div>
      <div className="w-full flex justify-between mt-5">
        <button onClick={handleBack} type="button" className="text-cyan-800 bg-white w-fit px-2 py-1 rounded-md text-xl"> Go Back </button>
        <button onClick={handleNext} type="button" className="bg-cyan-800 text-white w-fit px-2 py-1 rounded-md "> Next Step </button>
      </div>
    </div>
  )
}

export default Form3