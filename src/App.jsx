import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import JourneyPreview from './components/JourneyPreview'
import Contact from './components/Contact'

import Journey from './pages/Journey'
import JourneyDay from './pages/JourneyDay'


import './App.css'

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <JourneyPreview />
        <Contact />
      </main>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/journey/day/:day" element={<JourneyDay />} />
    </Routes>
  )
}

export default App