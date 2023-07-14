
import './App.css'
import Hero from '../components/Hero'
import SideBar from '../components/SideBar'
import MyProvider from '../state managemant/MyProvider'

function App() {

 

  return (
    <MyProvider>

      <div className=" bg-teal-600/30 h-screen md:flex md:justify-center md:items-center">
        <div className="md:flex md:p-2 md:bg-white md:rounded-xl lg:flex bg-teal-600/30">
          <div className="sidebar">
            <SideBar/>
          </div>
          <div className="  md:bg-white md:flex md:items-center md:w-full bg-teal-500/20 ">
            <Hero/>
          </div>
        </div>
      </div>
    </MyProvider>
  )
}

export default App
