import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ProtectedRoute from './components/common/ProtectedRoute';

import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';
import SimulatorPage from './pages/SimulatorPage';
import MentorPage from './pages/MentorPage';
import ResumePage from './pages/ResumePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';

import './styles/index.css';
import './styles/common.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />

      <main className="app-main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:careerId" element={<SimulatorPage />} />
          <Route path="/mentor" element={<MentorPage />} />
          <Route
            path="/resume"
            element={
              <ProtectedRoute>
                <ResumePage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
