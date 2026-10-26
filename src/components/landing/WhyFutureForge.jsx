import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Features.css';

function WhyFutureForge() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.scroll-reveal');
    if (cards) {
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '🎮',
      title: 'Interactive Career Simulator',
      description: 'Step into the shoes of a Software Engineer, Cloud Architect, or Data Scientist. Discover hourly routines, real milestone timelines, and portfolio projects.'
    },
    {
      icon: '📈',
      title: 'Salary & Milestone Growth',
      description: 'Explore verified industry compensation projections from entry-level to Lead & Executive roles, visualized in animated dynamic bar charts.'
    },
    {
      icon: '🧠',
      title: '24/7 AI Career Mentorship',
      description: 'Ask deep technical questions, roadmap inquiries, or interview scenarios. Get tailored advice specifically formatted for your chosen tech career.'
    },
    {
      icon: '📄',
      title: 'Keyword Resume Analyzer',
      description: 'Paste your current resume to compute real-time compatibility scores, discover missing core competencies, and receive targeted improvement tips.'
    }
  ];

  return (
    <section className="features" ref={sectionRef} id="why-future-forge">
      <div className="container">
        <h2 className="section-title">
          Why <span className="gradient-text">Future Forge</span>?
        </h2>
        <p className="section-subtitle">
          Traditional career guidance gives you generic articles. We provide immersive visual simulations,
          practical skill trees, and real-time guidance before you invest years into a career.
        </p>
      </div>

      <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {features.map((feature, index) => (
          <article
            key={index}
            className="feature-card scroll-reveal"
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </article>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <Link
          to="/careers"
          className="hero-cta-primary"
          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          Explore All 6 Career Tracks →
        </Link>
      </div>
    </section>
  );
}

export default WhyFutureForge;
