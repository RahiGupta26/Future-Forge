import Hero from '../components/landing/Hero';
import WhyFutureForge from '../components/landing/WhyFutureForge';
import Testimonials from '../components/landing/Testimonials';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
    
      <Hero />
      <WhyFutureForge />

      <Testimonials />

      <section style={{
        padding: '80px 24px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, transparent 0%, var(--bg-tertiary) 100%)'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            fontWeight: 700,
            marginBottom: '16px',
            color: 'var(--text-primary)'
          }}>
            Ready to <span className="gradient-text">Take Control</span> of Your Tech Career?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '620px',
            margin: '0 auto 32px auto',
            lineHeight: 1.6
          }}>
            Jump straight into our interactive career simulator, benchmark salaries across top companies,
            and evaluate your resume against industry standards.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/careers"
              className="hero-cta-primary"
              style={{ textDecoration: 'none', padding: '14px 28px', fontSize: '1rem' }}
            >
              Browse Careers Now 🚀
            </Link>
            <Link
              to="/mentor"
              className="hero-cta-secondary"
              style={{ textDecoration: 'none', padding: '14px 28px', fontSize: '1rem' }}
            >
              Chat With AI Mentor 💬
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
