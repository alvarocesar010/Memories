import './App.css'

import { Outlet } from 'react-router-dom'

// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='App'>
      <div className="container">
        <NavBar />
        <Outlet />
        <Footer/>
      </div>
    </div>
  )
}

export default App
