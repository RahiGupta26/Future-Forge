import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './components/common/Navbar.jsx'
import Hero from './components/landing/Hero.jsx'
import Features from './components/landing/Features.jsx'
import Testimonials from './components/landing/Testimonials.jsx'
import CareerSelection from './components/careers/CareerSelection.jsx'
import SimulatorDashboard from './components/simulator/SimulatorDashboard.jsx'
import AIMentor from './components/mentor/AIMentor.jsx'
import ResumeAnalyzer from './components/resume/ResumeAnalyzer.jsx'
import Footer from './components/common/Footer.jsx'
import {careerData} from './data/careerData.js'
import './App.css'


function App() {

  const [selectedCareer, setSelectedCareer] = useState(null)
  const [currentView, setCurrentView] = useState('home')

  useEffect(() => {
    if (selectedCareer) {
      setCurrentView('simulator')
      const el = document.getElementById('simulator')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [selectedCareer])


  const handleCareerSelect = (careerId) => {
    const career = careerData.find(c => c.id === careerId)
    setSelectedCareer(career)
  }

  const handleBackToHome = () => {
    setSelectedCareer(null)
    setCurrentView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <div className="app">
      <Navbar 
        onNavigate={setCurrentView}
        onBackToHome={handleBackToHome}
        showBack={selectedCareer !== null}
      />
      {!selectedCareer ? (
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="features">
            <Features />
          </section>
          <section id="careers">
            <CareerSelection onSelect={handleCareerSelect} />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="mentor">
            <AIMentor career={null} />
          </section>
        </main>
      ) : (
        <main>
          <section id="simulator">
            <SimulatorDashboard career={selectedCareer} />
          </section>
          <section id="mentor">
            <AIMentor career={selectedCareer} />
          </section>
          <section id="resume">
            <ResumeAnalyzer career={selectedCareer} />
          </section>
        </main>
      )}
      <Footer/>
    </div>
  )
}

export default App
