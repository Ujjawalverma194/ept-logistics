import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Resources from './Pages/Resources'
import Contact from './Pages/Contact'
import Navbar from './components/Header/Navbar'
import ScrollToTop from "./components/ScrollToTop";
import ScrollTopButton from "./components/ScrollTopButton";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <ScrollToTop /> */}

  <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/resources" element={<Resources />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>

  <ScrollTopButton />
</>
  )
}

export default App
