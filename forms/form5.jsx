import React, { useContext } from 'react'
import { MyContext } from '../state managemant/MyContex'
import { v4 as uuid } from "uuid"
function Form4() {

  const { selectedPlan, handleChange, mon, totalPrice,  handleBack, per, selectedService, handleNext, period, selectedPrice} = useContext(MyContext)



  return (
    <div className="px-5 py-7 pb-16 flex flex-col items-center">
      <img className=' w-20 h-20' src="/images/icon-thank-you.svg"/>
      <div className="">
        <h1 className=" text-center font-extrabold text-3xl">Thank you!</h1>
        <p className=" text-center font-medium text-lg text-gray-400">Thanks for confirming your subscription! we hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    </div>
  )
}

export default Form4