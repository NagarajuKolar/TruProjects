
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Researchpaper from './Pages/Researchpaper'
import ProgramPage from './Pages/ProgramPage'
import Aboutus from './Pages/Aboutus'
import BranchProjectspage from './Pages/BranchProjectspage'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/research' element={<Researchpaper />}></Route>
        <Route path='/:program' element={<ProgramPage />} />
        <Route path="/about" element={<Aboutus />} />
         <Route path="/:program/:branch" element={<BranchProjectspage />} />




      </Routes>
      <Footer />


    </>
  )
}

export default App
