
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
import SubjectPage from './Pages/SubjectPage'
import ScrollToTop from './Components/ScrollToTop'


function App() {


  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/register" element={<Register />} />
        <Route path="/document-writing" element={<DocumentWriting />} />

        <Route path="/research/:city" element={<Researchpaper />} />
        <Route path="/research" element={<Researchpaper />} />

        <Route path="/internships/:slug" element={<SummerInternship />} />
        <Route path="/internships" element={<SummerInternship />} />

        {/* <Route path="/:program/:branch/:type/:subject/:city" element={<SubjectPage />} /> */}
        <Route path="/:program/:branch/:type/:subject" element={<SubjectPage />} />
        
        <Route path="/:program/:branch/projects/:type/:city" element={<DomainPage />} />
        <Route path="/:program/:branch/projects/:type" element={<DomainPage />} />

        <Route path="/:program/:branch/city/:city" element={<BranchProjectspage />} />
        <Route path="/:program/:branch" element={<BranchProjectspage />} />

        <Route path="/:program/:city" element={<ProgramPage />} />
        <Route path="/:program" element={<ProgramPage />} />
      </Routes>

      <Footer />


    </>
  )
}

export default App
