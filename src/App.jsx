import { useState, useEffect } from 'react'
import Navbar from './components/common/Navbar'
import Hero from './components/landing/Hero'
import Features from './components/landing/Features'
import Testimonials from './components/landing/Testimonials'
import CareerSelection from './components/careers/CareerSelection'
import SimulatorDashboard from './components/simulator/SimulatorDashboard'
import AIMentor from './components/mentor/AIMentor'
import ResumeAnalyzer from './components/resume/ResumeAnalyzer'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Footer from './components/common/Footer'
import { careerData } from './data/careerData'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [authPage, setAuthPage] = useState('login')
  const [selectedCareer, setSelectedCareer] = useState(null)
  const [currentView, setCurrentView] = useState('home')

  useEffect(() => {
    const savedUser = localStorage.getItem('futureforge-user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch {
        localStorage.removeItem('futureforge-user')
      }
    }
  }, [])

  useEffect(() => {
    if (selectedCareer) {
      setCurrentView('simulator')
      const el = document.getElementById('simulator')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [selectedCareer])

  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem('futureforge-user', JSON.stringify(userData))
  }

  const handleSignUp = (userData) => {
    setUser(userData)
    localStorage.setItem('futureforge-user', JSON.stringify(userData))
  }

  const handleLogout = () => {
    setUser(null)
    setSelectedCareer(null)
    setCurrentView('home')
    localStorage.removeItem('futureforge-user')
  }

  const handleCareerSelect = (careerId) => {
    const career = careerData.find(c => c.id === careerId)
    setSelectedCareer(career)
  }

  const handleBackToHome = () => {
    setSelectedCareer(null)
    setCurrentView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!user) {
    if (authPage === 'login') {
      return (
        <Login
          onLogin={handleLogin}
          onSwitchToSignUp={() => setAuthPage('signup')}
        />
      )
    }
    return (
      <SignUp
        onSignUp={handleSignUp}
        onSwitchToLogin={() => setAuthPage('login')}
      />
    )
  }

  return (
    <div className="app">
      <Navbar 
        onNavigate={setCurrentView} 
        onBackToHome={handleBackToHome}
        showBack={selectedCareer !== null}
        user={user}
        onLogout={handleLogout}
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
      
      <Footer />
    </div>
  )
}

export default App