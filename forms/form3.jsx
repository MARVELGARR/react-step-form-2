import React, { useContext, useState} from 'react'
import { MyContext } from '../state managemant/MyContex'
import "../src/app.css"

function Form3() {

  const { handleBack, onlick, final, periodicy, totalPrice, selectedService, checked1, checked2, checked3, checked, servicePrice1, servicePrice2, onClick, servicePrice3, handleNext, handleCheckBox} =  useContext(MyContext)
  const [col, setColo] = useState([])

  const onclick = (index) => {
    setColo([...col, index])
    col.includes(0) ? setColo(col.filter((value)=> value !== 0)) : col.includes(1) ? setColo(col.filter((value)=> value !== 1)) : col.includes(2) ? setColo(col.filter((value)=> value !== 2)) : setColo([...col, index])

  }
  return (
    <div className="px-4 md:py-1 md:pb-10 py-7 pb-16 flex flex-col">
      <div className="">
        <div className="flex flex-col gap-2">
          <h1 className=" md:text-2xl text-3xl font-bold text-cyan-800">Pick add-ons</h1>
          <p className=" md:text-base text-xl text-gray-500 pb-4">Add-ons helps enhance your gaming experience</p>
        </div>
        <div className=" flex flex-col gap-4">
          <fieldset className={` ${selectedService.some((service)=> service.item ==="online service") ? " border-cyan-800" : "" } border-blue-800" : ""} md:justify-normal md:gap-8 flex px-2 py-3 border-2 rounded-lg items-center justify-between`}>
            <input checked={selectedService.some((service)=> service.item ==="online service")} value={`online service, ${servicePrice1}`} onChange={handleCheckBox} type="checkbox" className={`  w-4 h-4`}/>
            <div className="">
              <h3 className=" font-bold text-md text-cyan-900">Online service</h3>
              <p className="text-sm text-gray-400">Access to multiplayer games</p>
            </div>
            <div className=" md:absolute md:right-10 text-cyan-900 text-sm font-semibold">{servicePrice1}</div>
          </fieldset>
          <fieldset className={` ${selectedService.some((service)=> service.item ==="Larger storage") ? " border-cyan-800" : "" }  md:justify-normal md:gap-8 flex px-2 py-3 border-2 rounded-lg items-center justify-between`}>
            <input checked={selectedService.some((service)=> service.item ==="Larger storage")} value={`Larger storage, ${servicePrice2}`} onChange={handleCheckBox} type="checkbox" className=" w-4 h-4"/>
            <div className="">
              <h3 className=" font-bold text-md text-cyan-900">Larger storage</h3>
              <p className="text-sm text-gray-400">Extra 1TB of cloud save</p>
            </div>
            <div className=" md:absolute md:right-10 text-cyan-900 text-sm font-semibold">{servicePrice2}</div>
          </fieldset>
          <fieldset className={` ${selectedService.some((service)=> service.item ==="Customizable profile") ? " border-cyan-800" : "" } md:justify-normal md:gap-8 flex px-2 py-3 border-2 rounded-lg items-center justify-between`}>
            <input checked={selectedService.some((service)=> service.item ==="Customizable profile")} value={`Customizable profile, ${servicePrice3}`} onChange={handleCheckBox} type="checkbox" className=" w-4 h-4"/>
            <div className="">
              <h3 className=" font-bold text-md text-cyan-900">Customizable profile</h3>
              <p className="text-sm text-gray-400">Custom theme on your profile</p>
            </div>
            <div className=" md:absolute md:right-10 text-cyan-900 text-sm font-semibold">{servicePrice3}</div>
          </fieldset>
        </div>
      </div>
      <div className=" md:-mb-10 w-full flex justify-between mt-5">
        <button onClick={handleBack} type="button" className="text-cyan-800 bg-white w-fit px-2 py-1 rounded-md text-xl"> Go Back </button>
        <button onClick={handleNext} type="button" className="bg-cyan-800 text-white w-fit px-2 py-1 rounded-md "> Next Step </button>
      </div>
      
    </div>
  )
}

export default Form3