import Navbar from './components/common/Navbar'

import './App.css'

function App() {
  
  return (
    <div classnName="App">
      <Navbar 
        onNavigate={setCurrentView}
        onBackToHome={handleBackToHome}
        
      />
    </div>
  )
}

export default App
