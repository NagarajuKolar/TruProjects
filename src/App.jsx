
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>


    </Routes>


    </>
  )
}

export default App
