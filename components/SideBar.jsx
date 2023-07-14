import React, { useContext } from 'react'
import { MyContext } from '../state managemant/MyContex'


function SideBar() {

  const { next} = useContext(MyContext)



  return (
    <div className="">
      <div className=" hidden md:flex relative">
        <img src="/images/bg-sidebar-desktop.svg"
          className="hidden md:flex imgD"
          alt="desktop side bar"
        />
        <div className=" absolute md:top-8 md:left-10 desktop">
          <nav className="">
            <ul className="flex md:gap-8 flex-col gap-20">
              <li className="md:flex gap-3 md:items-center">
                <div className={` ${next === 0 ? " bg-blue-300 text-black" : " "} border-2 rounded-full md:w-9 md:h-9 w-7 h-7 flex justify-center items-center hover:bg-blue-300 text-white z-20 font-bold `}>1</div>
                <div className=" hidden md:flex md:flex-col">
                  <div className='text-gray-200'>STEP1</div>
                  <div className='text-white'>YOUR INFO</div>
                </div>
              </li> 
              <li className="md:flex gap-3 md:items-center">
                <div className={` ${next === 1 ? " bg-blue-300 text-black" : " "} border-2 rounded-full md:w-9 md:h-9 w-7 h-7 flex justify-center items-center hover:bg-blue-300 text-white z-20 font-bold `}>2</div>
                <div className="hidden md:flex md:flex-col">
                  <div className='text-gray-200'>STEP 2</div>
                  <div className='text-white'>SELECT PLAN</div>
                </div>
              </li> 
              <li className="md:flex gap-3 md:items-center">
                <div className={` ${next === 2 ? " bg-blue-300 text-black" : " "} border-2 rounded-full md:w-9 md:h-9 w-7 h-7 flex justify-center items-center hover:bg-blue-300 text-white z-20 font-bold `}>3</div>
                <div className="hidden md:flex md:flex-col">
                  <div className='text-gray-200'>STEP 3</div>
                  <div className='text-white'>ADD ONS</div>
                </div>
              </li> 
              <li className="md:flex gap-3 md:items-center">
                <div className={` ${next === 3 ? " bg-blue-300 text-black" : " "} border-2 rounded-full md:w-9 md:h-9 w-7 h-7 flex justify-center items-center hover:bg-blue-300 text-white z-20 font-bold `}>4</div>
                <div className="hidden md:flex md:flex-col">
                  <div className='text-gray-400'>STEP 4</div>
                  <div className='text-white'>SUMMARY</div>
                </div>
              </li> 
            </ul>
          </nav>
        </div>
      </div>


      <div className=" md:hidden relative">
        <img src="/images/bg-sidebar-mobile.svg"
          className="md:hidden w-screen"
          alt="mobile side bar"
        />
        <div className=" absolute mobile">
          <nav className="">
            <ul className="flex gap-10">
              <li className={` ${next === 0 ? " bg-blue-300 " : ""} border-2 rounded-full w-8 h-8 flex justify-center items-center hover:bg-blue-300 font-bold`}>1</li>
              <li className={` ${next === 1 ? " bg-blue-300 " : ""} border-2 rounded-full w-8 h-8 flex justify-center items-center hover:bg-blue-300 font-bold`}>2</li>
              <li className={` ${next === 2 ? " bg-blue-300 " : ""} border-2 rounded-full w-8 h-8 flex justify-center items-center hover:bg-blue-300 font-bold`}>3</li>
              <li className={` ${next === 3 ? " bg-blue-300 " : ""} border-2 rounded-full w-8 h-8 flex justify-center items-center hover:bg-blue-300 font-bold`}>4</li>
            </ul>
          </nav>
        </div>
      </div>
      
    </div>
  )
}

export default SideBar