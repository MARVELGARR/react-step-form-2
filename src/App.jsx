
import './App.css'
import Hero from '../components/Hero'
import SideBar
 from '../components/SideBar'


function App() {

  return (
    <div className="">
      <div className="">
        <div className="">
          <SideBar/>
        </div>
        <div className="bg-teal-600/30 h-96">
          <Hero/>
        </div>
      </div>
    </div>
  )
}

export default App
