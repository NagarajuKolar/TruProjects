
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
import Contactus from './Pages/Contactus'
import Register from './Pages/Register'
import DocumentWriting from './Pages/DocumentWriting'
import DomainPage from './Pages/DomainPage'
import SummerInternship from './Pages/SummerInternship'


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<Aboutus />} />
        <Route path='/research' element={<Researchpaper />}></Route>
        <Route path='/contact' element={<Contactus />} />
        <Route path='/register' element={<Register />} />
        <Route path='/document-writing' element={<DocumentWriting />} />
        <Route path='/:program' element={<ProgramPage />} />
        <Route path="/:program/:branch" element={<BranchProjectspage />} />
        <Route path='/:program/:branch/:type' element={<DomainPage />} />
        <Route path='/internships' element={<SummerInternship/>}/>
        <Route path="/internships/:slug" element={<SummerInternship />} />




      </Routes>
      <Footer />


    </>
  )
}

export default App
