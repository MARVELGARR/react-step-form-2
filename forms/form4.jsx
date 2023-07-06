import React, { useContext } from 'react'
import { MyContext } from '../state managemant/MyContex'
import { v4 as uuid } from "uuid"
function Form4() {

  const { selectedPlan, periodicy, totalPrice,  handleBack, per, selectedService, handleNext, period, selectedPrice} = useContext(MyContext)



  return (
    <div className="px-4 py-7 pb-16 flex flex-col">
      <div className="">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-cyan-800">Finishing up</h1>
          <p className=" text-xl text-gray-500 pb-4">Double-check everything looks OK before confirming</p>
        </div>
        <div className="">
          <div className=" flex  justify-between">
            <div className="">
              <div className=" text-cyan-900 text-lg font-bold">{`${selectedPlan} (${period})`}</div>
              <div on className=" text-gray-400 underline">change</div>
            </div>
            <div className="font-bold text-lg">{selectedPrice}</div>
          </div>
          <div className="">{selectedService.map((service)=>{
            return (
              <div key={service.item} className="flex mb-2 mt-3 justify-between items-center">
                <div className=" text-gray-300 text-lg">{service.item}</div>
                <div className=" text-gray-300 text-lg">{service.price}</div>
              </div>
            )
          })}</div>
          <div className="mt-5">
            <div className=''>{`Total (${per})`}</div>
            <div className=''>{totalPrice}</div>
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