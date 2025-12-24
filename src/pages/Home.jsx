import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { initScrollReveal } from '../utils/scrollReveal'

function Home() {
  useEffect(() => {
    initScrollReveal()
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text reveal">
              <h1>Clean Water for Off-Grid Communities</h1>
              <p className="hero-subtitle">
                Hygrosphere is a three-in-one solar water station that harvests water from air, 
                disinfects it with sunlight, and filters microplastics—all without electricity or chemicals.
              </p>
              <div className="hero-badge">
                <span className="badge-text">Conrad Challenge Submission</span>
              </div>
              <div className="hero-cta">
                <Link to="/contact" className="btn btn-primary">
                  Partner With Us
                </Link>
                <Link to="/how-it-works" className="btn btn-secondary">
                  See the Science
                </Link>
              </div>
            </div>
            <div className="hero-illustration reveal">
              <DeviceIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Opportunity */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>The Water Crisis</h2>
            <p className="section-subtitle">
              Over 2 billion people lack safely managed drinking water. 
              Traditional solutions have significant limitations.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card reveal">
              <div className="stat-number">2+ Billion</div>
              <div className="stat-label">People lack safe drinking water</div>
            </div>
            <div className="stat-card reveal">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Pathogen reduction (SODIS target)</div>
            </div>
            <div className="stat-card reveal">
              <div className="stat-number">$15-25</div>
              <div className="stat-label">Target retail price (volume manufacturing)</div>
            </div>
            <div className="stat-card reveal">
              <div className="stat-number">Zero</div>
              <div className="stat-label">CO₂ emissions (vs. boiling)</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2>How Hygrosphere Works</h2>
            <p className="section-subtitle">
              Three integrated modules working together to provide clean, safe drinking water
            </p>
          </div>
          <div className="steps-grid">
            <div className="step-card reveal">
              <div className="step-number">1</div>
              <div className="step-icon">
                <CondensationIcon />
              </div>
              <h3>Atmospheric Harvesting</h3>
              <p>
                Vertical biomimetic condenser with alternating hydrophilic and hydrophobic surfaces 
                captures water from air, inspired by the Namib desert beetle.
              </p>
              <p className="step-metric">
                <strong>Target:</strong> 50-150 mL/hour at 60-80% humidity
                <br />
                <span className="validation-status">✅ Prototype tested</span>
              </p>
            </div>
            <div className="step-card reveal">
              <div className="step-number">2</div>
              <div className="step-icon">
                <SODISIcon />
              </div>
              <h3>Solar Disinfection</h3>
              <p>
                Shallow UV-exposed tray with reflective backing uses solar UV-A radiation 
                to inactivate pathogens, achieving 99.9% reduction in 2-4 hours.
              </p>
              <p className="step-metric">
                <strong>Target:</strong> 3-log (99.9%) reduction of E. coli
                <br />
                <span className="validation-status">✅ Design validated (WHO/SODIS)</span>
              </p>
            </div>
            <div className="step-card reveal">
              <div className="step-number">3</div>
              <div className="step-icon">
                <FilterIcon />
              </div>
              <h3>Microplastic Filtration</h3>
              <p>
                Final membrane filter removes microplastics and fine particles, 
                addressing a challenge most low-cost systems ignore.
              </p>
              <p className="step-metric">
                <strong>Target:</strong> 75-90% removal of particles &gt;0.5 µm
                <br />
                <span className="validation-status">🔄 Early testing</span>
              </p>
            </div>
          </div>
          <div className="text-center reveal" style={{ marginTop: 'var(--spacing-xl)' }}>
            <Link to="/how-it-works" className="btn btn-primary">
              Learn More About the Technology
            </Link>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>What Makes Hygrosphere Different?</h2>
            <p className="section-subtitle">
              One of the few low-cost systems that combines atmospheric harvesting, solar disinfection, 
              AND microplastic filtration—all without electricity or chemicals
            </p>
          </div>
          <div className="competitive-advantage reveal">
            <div className="advantage-box">
              <h3>Key Differentiators</h3>
              <ul>
                <li><strong>Addresses microplastics</strong> - Most low-cost systems focus only on pathogens, not microplastics</li>
                <li><strong>Integrated design</strong> - Combines harvesting + disinfection + filtration in one compact unit</li>
                <li><strong>Zero inputs required</strong> - No electricity, no chemicals, minimal maintenance after initial setup</li>
                <li><strong>Biomimetic approach</strong> - Design inspired by proven natural systems (Namib desert beetle) with scientific validation</li>
                <li><strong>Modular & repairable</strong> - Components can be replaced individually, extending system lifetime</li>
              </ul>
            </div>
          </div>
          <div className="benefits-grid">
            <div className="benefit-item reveal">
              <div className="benefit-icon">⚡</div>
              <h4>No Electricity Required</h4>
              <p>Fully solar-powered, works in off-grid settings</p>
            </div>
            <div className="benefit-item reveal">
              <div className="benefit-icon">🌱</div>
              <h4>Zero Chemicals</h4>
              <p>No chlorine tablets or chemical additives needed</p>
            </div>
            <div className="benefit-item reveal">
              <div className="benefit-icon">💰</div>
              <h4>Low Operating Cost</h4>
              <p>Minimal maintenance, no recurring filter replacements</p>
            </div>
            <div className="benefit-item reveal">
              <div className="benefit-icon">🌍</div>
              <h4>Climate Positive</h4>
              <p>Reduces fuel use and emissions vs. boiling</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Judges Section */}
      <section className="section">
        <div className="container">
          <div className="judges-section reveal">
            <h2>For Conrad Challenge Judges</h2>
            <div className="judges-content">
              <div className="judges-box">
                <h3>Validation Status</h3>
                <ul>
                  <li><strong>✅ Prototype Built:</strong> Functional 3-module system with benchtop testing</li>
                  <li><strong>✅ Design Validated:</strong> Based on published research (biphilic condensation, SODIS)</li>
                  <li><strong>🔄 Performance Testing:</strong> Ongoing validation of target metrics</li>
                  <li><strong>📋 Field Testing:</strong> Planned with pilot partners</li>
                </ul>
              </div>
              <div className="judges-box">
                <h3>Key Differentiators</h3>
                <ul>
                  <li>Addresses microplastics (gap in low-cost systems)</li>
                  <li>Biomimetic approach with scientific foundation</li>
                  <li>Modular, repairable design for sustainability</li>
                  <li>Clear path to $15-25 retail price at scale</li>
                </ul>
              </div>
              <div className="judges-box">
                <h3>Known Limitations & Future Work</h3>
                <ul>
                  <li>Output depends on humidity (works best 60-80% RH)</li>
                  <li>SODIS requires 2-4 hours of strong sunlight</li>
                  <li>Daily output limited to ~1L (suitable for small households)</li>
                  <li>Field validation needed in diverse climates</li>
                </ul>
              </div>
            </div>
            <div className="judges-cta">
              <Link to="/technology" className="btn btn-primary">
                View Technical Documentation
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Questions? Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// SVG Illustrations
function DeviceIllustration() {
  return (
    <svg viewBox="0 0 400 500" className="device-svg">
      {/* Condensation Cylinder */}
      <rect x="150" y="50" width="100" height="300" fill="none" stroke="#2563eb" strokeWidth="3" rx="5" />
      <circle cx="200" cy="100" r="30" fill="#3b82f6" opacity="0.3" />
      <circle cx="200" cy="150" r="25" fill="#3b82f6" opacity="0.4" />
      <circle cx="200" cy="200" r="20" fill="#3b82f6" opacity="0.5" />
      <path d="M 170 350 L 200 340 L 230 350" stroke="#2563eb" strokeWidth="2" fill="none" />
      
      {/* Storage Block */}
      <rect x="120" y="370" width="160" height="40" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="2" rx="3" />
      
      {/* SODIS Tray */}
      <rect x="100" y="430" width="200" height="30" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="2" rx="3" />
      <rect x="100" y="430" width="200" height="15" fill="#fbbf24" opacity="0.3" />
      
      {/* Filter */}
      <rect x="180" y="470" width="40" height="20" fill="#6b7280" opacity="0.3" stroke="#6b7280" strokeWidth="2" rx="2" />
      
      {/* Flow Arrows */}
      <path d="M 200 350 L 200 370" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrowhead)" fill="none" />
      <path d="M 200 410 L 200 430" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead)" fill="none" />
      <path d="M 200 460 L 200 470" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead)" fill="none" />
      
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#2563eb" />
        </marker>
      </defs>
    </svg>
  )
}

function CondensationIcon() {
  return (
    <svg viewBox="0 0 100 100" className="step-icon-svg">
      <circle cx="50" cy="30" r="15" fill="#3b82f6" opacity="0.4" />
      <circle cx="50" cy="50" r="12" fill="#3b82f6" opacity="0.5" />
      <circle cx="50" cy="70" r="10" fill="#3b82f6" opacity="0.6" />
      <path d="M 30 80 L 50 75 L 70 80" stroke="#2563eb" strokeWidth="3" fill="none" />
    </svg>
  )
}

function SODISIcon() {
  return (
    <svg viewBox="0 0 100 100" className="step-icon-svg">
      <circle cx="50" cy="30" r="20" fill="#fbbf24" opacity="0.6" />
      <rect x="20" y="50" width="60" height="30" fill="#f59e0b" opacity="0.3" stroke="#f59e0b" strokeWidth="2" rx="2" />
      <rect x="20" y="50" width="60" height="15" fill="#fbbf24" opacity="0.4" />
    </svg>
  )
}

function FilterIcon() {
  return (
    <svg viewBox="0 0 100 100" className="step-icon-svg">
      <rect x="30" y="30" width="40" height="50" fill="#6b7280" opacity="0.2" stroke="#6b7280" strokeWidth="2" rx="3" />
      <line x1="35" y1="40" x2="65" y2="40" stroke="#6b7280" strokeWidth="1.5" />
      <line x1="35" y1="50" x2="65" y2="50" stroke="#6b7280" strokeWidth="1.5" />
      <line x1="35" y1="60" x2="65" y2="60" stroke="#6b7280" strokeWidth="1.5" />
      <line x1="35" y1="70" x2="65" y2="70" stroke="#6b7280" strokeWidth="1.5" />
    </svg>
  )
}

export default Home

