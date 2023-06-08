import React from 'react'

function SideBar() {
  return (
    <div className="">
      <div className=" hidden md:flex relative">
        <img src="/images/bg-sidebar-desktop.svg"
          className="hidden md:flex"
          alt="desktop side bar"
        />
        <div className=" absolute desktop">
          <nav className="">
            <ul className="flex flex-col gap-20">
              <li className=" border-2 rounded-full w-7 h-7 flex justify-center items-center hover:bg-blue-300 font-bold">1</li>
              <li className=" border-2 rounded-full w-7 h-7 flex justify-center items-center hover:bg-blue-300 font-bold">2</li>
              <li className=" border-2 rounded-full w-7 h-7 flex justify-center items-center hover:bg-blue-300 font-bold">3</li>
              <li className=" border-2 rounded-full w-7 h-7 flex justify-center items-center hover:bg-blue-300 font-bold">4</li>
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
              <li className=" border-2 rounded-full w-7 h-7 flex justify-center items-center hover:bg-blue-300 font-bold">1</li>
              <li className=" border-2 rounded-full w-7 h-7 flex justify-center items-center hover:bg-blue-300 font-bold">2</li>
              <li className=" border-2 rounded-full w-7 h-7 flex justify-center items-center hover:bg-blue-300 font-bold">3</li>
              <li className=" border-2 rounded-full w-7 h-7 flex justify-center items-center hover:bg-blue-300 font-bold">4</li>
            </ul>
          </nav>
        </div>
      </div>
      
    </div>
  )
}

export default SideBar