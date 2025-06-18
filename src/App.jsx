import Contact from "./pages/Contact"
import Home from "./pages/Home.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Projects from "./pages/Projects.jsx"
import About from "./pages/About.jsx"
import Navbar from "./components//Navbar.jsx"
import Footer from "./components//Footer.jsx"
import Skills from "./pages/Skills.jsx"
import './index.css'
import AdminMessages from './AdminMessages.jsx'

function App() {

  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/admin/messages" element={<AdminMessages />} />
          

        </Routes>
        <Footer/>



      </BrowserRouter>

    </div>
  )
}

export default App
