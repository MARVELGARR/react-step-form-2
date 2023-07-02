import React, { useContext } from 'react'
import { MyContext } from '../state managemant/MyContex'
function Form4() {

  const { selectedPlan, handleBack, handleNext, period, selectedPrice} = useContext(MyContext)

  return (
    <div className="px-4 py-7 pb-16 flex flex-col">
      <div className="">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-cyan-800">Finishing up</h1>
          <p className=" text-xl text-gray-500 pb-4">Double-check everything looks OK before confirming</p>
        </div>
        <div className="">
          <div className="">
            <div className="">
              <div className=" text-cyan-900 text-lg font-bold">{`${selectedPlan} (${period})`}</div>
              <div on className=" text-gray-400 underline">change</div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between mt-5">
        <button onClick={handleBack} type="button" className="text-cyan-800 bg-white w-fit px-2 py-1 rounded-md text-xl"> Go Back </button>
        <button onClick={handleNext} type="button" className="bg-cyan-800 text-white w-fit px-2 py-1 rounded-md "> Next Step </button>
      </div>
    </div>
  )
}

export default Form4