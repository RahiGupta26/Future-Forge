import Navbar from './components/common/Navbar.jsx'
import Hero from './components/landing/Hero.jsx'
import ResumeAnalyzer from './components/resume/ResumeAnalyzer.jsx'
import './App.css'

function App() {
  
  return (
    <div classnName="App">
      <Navbar 
        onNavigate={setCurrentView}
        onBackToHome={handleBackToHome}
        
      />
      <main>
        <section id="home">
          <Hero />
        </section>
      </main>
    </div>
  )
}

export default App
