import React from 'react'

function Form3() {
  return (
    <div className="px-7 py-7 pb-16 flex flex-col">
      <div className="">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-cyan-800">Pick add-ons</h1>
          <p className=" text-xl text-gray-500 pb-4">Add-ons helps enhance your gaming experience</p>
        </div>
        <div className="">
          <fieldset className=" flex border-2 rounded-lg gap-3 items-center justify-between">
            <input type="checkbox" className=""/>
            <div className="">
              <h3 className=" font-bold text-lg text-cyan-900">Online service</h3>
              <p className="">Access to multiplayer games</p>
            </div>
            <div className="text-cyan-900 font-semibold"> +$1/mo</div>
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default Form3