
import './App.css'
import Hero from '../components/Hero'
import SideBar
 from '../components/SideBar'
import MyProvider from '../state managemant/MyProvider'

function App() {

  return (
    <MyProvider>

      <div className="bg-teal-600/30">
        <div className="bg-teal-600/30">
          <div className="sidebar">
            <SideBar/>
          </div>
          <div className=" bg-teal-500/20 h-screen">
            <Hero/>
          </div>
        </div>
      </div>
    </MyProvider>
  )
}

export default App
