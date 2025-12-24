import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HowItWorks.css'
import { initScrollReveal } from '../utils/scrollReveal'

function HowItWorks() {
  useEffect(() => {
    initScrollReveal()
  }, [])

  return (
    <div className="how-it-works">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content reveal">
            <h1>How Hygrosphere Works</h1>
            <p className="page-hero-subtitle">
              Three integrated modules working in sequence to harvest, disinfect, and filter water 
              using only solar energy—no electricity, no chemicals, minimal maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Module 1: Condensation */}
      <section className="section">
        <div className="container">
          <div className="module-content">
            <div className="module-text reveal">
              <div className="module-badge">Module 1</div>
              <h2>Atmospheric Water Harvesting</h2>
              <p className="module-intro">
                Our biomimetic condenser draws inspiration from the <strong>Namib desert beetle</strong>, 
                which survives in one of the driest environments on Earth by harvesting water from morning fog.
              </p>
              
              <h3>Design & Mechanism</h3>
              <ul className="feature-list">
                <li>
                  <strong>Vertical transparent cylinder</strong> (prototype: 140mm diameter × 300mm height)
                  made from UV-stable polycarbonate
                </li>
                <li>
                  <strong>Biphilic surface patterning:</strong> Alternating helical lanes of hydrophilic 
                  (water-attracting) and hydrophobic (water-repelling) coatings
                </li>
                <li>
                  <strong>Droplet nucleation:</strong> Hydrophilic tracks capture water vapor and form droplets
                </li>
                <li>
                  <strong>Guided collection:</strong> Hydrophobic rails with guard rims channel droplets downward 
                  into a hydrophilic collection ring and sloped channel
                </li>
              </ul>

              <h3>Performance Targets</h3>
              <div className="performance-box">
                <div className="performance-item">
                  <span className="performance-label">Output Rate:</span>
                  <span className="performance-value">50-150 mL/hour at 60-80% RH</span>
                </div>
                <div className="performance-item">
                  <span className="performance-label">Daily Target:</span>
                  <span className="performance-value">0.75-1.0 L per night (moderate humidity)</span>
                </div>
                <div className="performance-item">
                  <span className="performance-label">Validation:</span>
                  <span className="performance-value">Benchtop tests show faster droplet motion on patterned surfaces vs. controls</span>
                </div>
              </div>

              <h3>Scientific Foundation</h3>
              <p>
                Research on biphilic condensation surfaces (e.g., Boreyko & Chen, 2009; 
                Parker & Lawrence, 2001) demonstrates that alternating wettability patterns 
                can enhance condensation rates by 2-3× compared to uniform surfaces. Our design 
                applies these principles in a vertical, scalable format optimized for off-grid use.
              </p>
            </div>
            <div className="module-illustration reveal">
              <CondensationDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Module 2: SODIS */}
      <section className="section section-alt">
        <div className="container">
          <div className="module-content reverse">
            <div className="module-illustration reveal">
              <SODISDiagram />
            </div>
            <div className="module-text reveal">
              <div className="module-badge">Module 2</div>
              <h2>Solar Water Disinfection (SODIS)</h2>
              <p className="module-intro">
                A shallow, UV-exposed tray that uses solar UV-A radiation and heat to inactivate 
                pathogens—validated by WHO and used in over 50 countries.
              </p>
              
              <h3>Design & Mechanism</h3>
              <ul className="feature-list">
                <li>
                  <strong>Shallow horizontal tray</strong> (internal volume: ~0.75 L, dimensions: 25 × 8 × 3.75 cm)
                </li>
                <li>
                  <strong>UV-transparent material:</strong> Borosilicate glass or UV-stable polycarbonate 
                  (blocks UV-B/C, transmits UV-A)
                </li>
                <li>
                  <strong>Reflective backing:</strong> Mylar/PET reflector increases UV-A exposure and heating
                </li>
                <li>
                  <strong>Shallow depth:</strong> Improves UV penetration and reduces treatment time
                </li>
              </ul>

              <h3>Performance Targets</h3>
              <div className="performance-box">
                <div className="performance-item">
                  <span className="performance-label">Pathogen Reduction:</span>
                  <span className="performance-value">3-log (99.9%) reduction of E. coli</span>
                </div>
                <div className="performance-item">
                  <span className="performance-label">Treatment Time:</span>
                  <span className="performance-value">2-4 hours (with reflector) vs. 4-6 hours for classic PET-bottle SODIS</span>
                </div>
                <div className="performance-item">
                  <span className="performance-label">Validation:</span>
                  <span className="performance-value">Design follows WHO/SODIS guidance; UV cards + temperature logging used in testing</span>
                </div>
              </div>

              <h3>Scientific Foundation</h3>
              <p>
                SODIS is a WHO-recommended method with extensive validation (Meierhofer & Wegelin, 2002; 
                McGuigan et al., 2012). UV-A (320-400 nm) damages DNA/RNA, while temperatures above 45°C 
                provide synergistic effects. Our optimized tray design reduces treatment time while maintaining 
                efficacy through improved UV exposure and shallow depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Module 3: Filtration */}
      <section className="section">
        <div className="container">
          <div className="module-content">
            <div className="module-text reveal">
              <div className="module-badge">Module 3</div>
              <h2>Microplastic & Fine Particle Filtration</h2>
              <p className="module-intro">
                A final-stage filter that addresses microplastic contamination—a growing concern 
                that most low-cost water treatment systems ignore.
              </p>
              
              <h3>Design & Mechanism</h3>
              <ul className="feature-list">
                <li>
                  <strong>Membrane filter:</strong> 0.2-0.5 µm PES/PVDF membrane, or
                </li>
                <li>
                  <strong>Layered cartridge:</strong> Sand + activated carbon + microfiber layers
                </li>
                <li>
                  <strong>Gravity-fed:</strong> No pressure or electricity required
                </li>
                <li>
                  <strong>Replaceable:</strong> Modular design allows component replacement
                </li>
              </ul>

              <h3>Performance Targets</h3>
              <div className="performance-box">
                <div className="performance-item">
                  <span className="performance-label">Removal Efficiency:</span>
                  <span className="performance-value">75-90% removal of microplastic surrogates and particles &gt;0.5 µm</span>
                </div>
                <div className="performance-item">
                  <span className="performance-label">Validation:</span>
                  <span className="performance-value">Targets based on published membrane studies; early tests show substantial visible reduction</span>
                </div>
              </div>

              <h3>Why This Matters</h3>
              <p>
                Microplastics are increasingly found in water sources worldwide. While health impacts 
                are still being studied, removing them proactively is prudent. Most household filters 
                and SODIS systems don't address particles in this size range. Our final filter stage 
                explicitly targets this gap.
              </p>
            </div>
            <div className="module-illustration reveal">
              <FilterDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Flow */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Integrated Water Flow</h2>
            <p className="section-subtitle">
              The three modules work together in a continuous cycle
            </p>
          </div>
          <div className="flow-diagram reveal">
            <IntegratedFlowDiagram />
          </div>
          <div className="flow-steps">
            <div className="flow-step reveal">
              <div className="flow-step-number">1</div>
              <p>Water condenses in the vertical cylinder during high-humidity periods (typically overnight)</p>
            </div>
            <div className="flow-step reveal">
              <div className="flow-step-number">2</div>
              <p>Collected water flows into a storage block (~1 L capacity) for temporary holding</p>
            </div>
            <div className="flow-step reveal">
              <div className="flow-step-number">3</div>
              <p>Water is transferred to the SODIS tray for solar disinfection (2-4 hours in strong sunlight)</p>
            </div>
            <div className="flow-step reveal">
              <div className="flow-step-number">4</div>
              <p>Disinfected water passes through the final filter to remove microplastics and fine particles</p>
            </div>
            <div className="flow-step reveal">
              <div className="flow-step-number">5</div>
              <p>Clean, safe water is ready for consumption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Summary */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>What's Been Tested vs. What's Projected</h2>
            <p className="section-subtitle">
              Transparency about our validation status
            </p>
          </div>
          <div className="validation-summary">
            <div className="validation-item reveal">
              <h3>✅ Tested & Validated</h3>
              <ul>
                <li><strong>Biphilic condensation:</strong> Benchtop tests show improved droplet collection on patterned surfaces vs. controls</li>
                <li><strong>SODIS design:</strong> Follows WHO-validated SODIS method; our optimized tray design is based on published research</li>
                <li><strong>System integration:</strong> Functional prototype with all three modules working together</li>
                <li><strong>Material selection:</strong> UV-stable polycarbonate and glass tested for durability</li>
              </ul>
            </div>
            <div className="validation-item reveal">
              <h3>🔄 In Progress</h3>
              <ul>
                <li><strong>Field performance:</strong> Testing in diverse climates and humidity conditions</li>
                <li><strong>Long-term durability:</strong> Accelerated aging tests for surface coatings and materials</li>
                <li><strong>Microplastic removal:</strong> Early testing with surrogate particles; full validation planned</li>
                <li><strong>User acceptance:</strong> Pilot studies with target communities</li>
              </ul>
            </div>
            <div className="validation-item reveal">
              <h3>📋 Planned</h3>
              <ul>
                <li><strong>Large-scale field trials:</strong> With NGO and school partners</li>
                <li><strong>Manufacturing optimization:</strong> Cost reduction and quality control protocols</li>
                <li><strong>Lifecycle assessment:</strong> Full environmental impact analysis</li>
                <li><strong>Health impact studies:</strong> Long-term health outcomes in pilot communities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section">
        <div className="container">
          <div className="cta-section reveal">
            <h2>Ready to Learn More?</h2>
            <p>Explore our technical specifications, validation protocols, and impact metrics.</p>
            <div className="cta-buttons">
              <Link to="/technology" className="btn btn-primary">
                View Technical Details
              </Link>
              <Link to="/impact" className="btn btn-secondary">
                See Our Impact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// SVG Diagrams
function CondensationDiagram() {
  return (
    <svg viewBox="0 0 300 400" className="module-diagram">
      <defs>
        <pattern id="hydrophilic" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="#3b82f6" opacity="0.1" />
          <line x1="0" y1="10" x2="20" y2="10" stroke="#2563eb" strokeWidth="1" />
        </pattern>
        <pattern id="hydrophobic" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="#e5e7eb" />
        </pattern>
      </defs>
      
      {/* Cylinder */}
      <rect x="100" y="50" width="100" height="280" fill="none" stroke="#2563eb" strokeWidth="3" rx="5" />
      
      {/* Surface patterns */}
      <rect x="100" y="50" width="100" height="140" fill="url(#hydrophilic)" />
      <rect x="100" y="190" width="100" height="140" fill="url(#hydrophobic)" />
      
      {/* Droplets */}
      <circle cx="150" cy="100" r="8" fill="#3b82f6" opacity="0.6" />
      <circle cx="180" cy="120" r="6" fill="#3b82f6" opacity="0.5" />
      <circle cx="120" cy="140" r="7" fill="#3b82f6" opacity="0.6" />
      <circle cx="160" cy="160" r="5" fill="#3b82f6" opacity="0.4" />
      
      {/* Collection channel */}
      <path d="M 120 330 L 150 320 L 180 330" stroke="#10b981" strokeWidth="3" fill="none" />
      <path d="M 150 320 L 150 350" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
      
      {/* Labels */}
      <text x="150" y="40" textAnchor="middle" fontSize="14" fontWeight="600" fill="#2563eb">Condensation Cylinder</text>
      <text x="50" y="100" fontSize="12" fill="#6b7280">Hydrophilic</text>
      <text x="50" y="250" fontSize="12" fill="#6b7280">Hydrophobic</text>
      
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
        </marker>
      </defs>
    </svg>
  )
}

function SODISDiagram() {
  return (
    <svg viewBox="0 0 400 250" className="module-diagram">
      {/* Sun */}
      <circle cx="350" cy="30" r="25" fill="#fbbf24" opacity="0.8" />
      <line x1="320" y1="30" x2="300" y2="30" stroke="#f59e0b" strokeWidth="2" />
      <line x1="350" y1="0" x2="350" y2="-10" stroke="#f59e0b" strokeWidth="2" />
      <line x1="380" y1="30" x2="400" y2="30" stroke="#f59e0b" strokeWidth="2" />
      <line x1="350" y1="60" x2="350" y2="70" stroke="#f59e0b" strokeWidth="2" />
      
      {/* UV rays */}
      <line x1="330" y1="20" x2="250" y2="80" stroke="#fbbf24" strokeWidth="1" opacity="0.5" strokeDasharray="2,2" />
      <line x1="350" y1="15" x2="250" y2="80" stroke="#fbbf24" strokeWidth="1" opacity="0.5" strokeDasharray="2,2" />
      <line x1="370" y1="20" x2="250" y2="80" stroke="#fbbf24" strokeWidth="1" opacity="0.5" strokeDasharray="2,2" />
      
      {/* Tray */}
      <rect x="50" y="80" width="300" height="120" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="3" rx="5" />
      <rect x="50" y="80" width="300" height="60" fill="#fbbf24" opacity="0.3" />
      
      {/* Water level */}
      <rect x="60" y="130" width="280" height="60" fill="#3b82f6" opacity="0.4" />
      
      {/* Reflector */}
      <polygon points="50,200 50,80 350,80 350,200 200,220" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
      <line x1="200" y1="200" x2="200" y2="220" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3" />
      
      {/* Labels */}
      <text x="200" y="70" textAnchor="middle" fontSize="14" fontWeight="600" fill="#f59e0b">SODIS Tray</text>
      <text x="200" y="240" textAnchor="middle" fontSize="12" fill="#6b7280">Reflective Backing</text>
      <text x="360" y="25" fontSize="12" fill="#f59e0b">UV-A</text>
    </svg>
  )
}

function FilterDiagram() {
  return (
    <svg viewBox="0 0 300 400" className="module-diagram">
      {/* Filter housing */}
      <rect x="100" y="50" width="100" height="300" fill="#6b7280" opacity="0.1" stroke="#6b7280" strokeWidth="3" rx="5" />
      
      {/* Membrane layers */}
      <rect x="110" y="100" width="80" height="8" fill="#9ca3af" opacity="0.4" />
      <rect x="110" y="120" width="80" height="8" fill="#9ca3af" opacity="0.4" />
      <rect x="110" y="140" width="80" height="8" fill="#9ca3af" opacity="0.4" />
      <rect x="110" y="160" width="80" height="8" fill="#9ca3af" opacity="0.4" />
      
      {/* Particles before */}
      <circle cx="80" cy="80" r="3" fill="#ef4444" opacity="0.6" />
      <circle cx="90" cy="75" r="2" fill="#ef4444" opacity="0.5" />
      <circle cx="70" cy="85" r="2.5" fill="#ef4444" opacity="0.6" />
      <text x="50" y="100" fontSize="12" fill="#ef4444">Particles &gt;0.5µm</text>
      
      {/* Filtered water */}
      <path d="M 150 350 L 150 380" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-filter)" fill="none" />
      <text x="150" y="400" textAnchor="middle" fontSize="12" fill="#10b981">Clean Water</text>
      
      {/* Labels */}
      <text x="150" y="40" textAnchor="middle" fontSize="14" fontWeight="600" fill="#6b7280">Membrane Filter</text>
      <text x="150" y="250" textAnchor="middle" fontSize="11" fill="#6b7280">0.2-0.5 µm</text>
      <text x="150" y="265" textAnchor="middle" fontSize="11" fill="#6b7280">PES/PVDF</text>
      
      <defs>
        <marker id="arrow-filter" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
        </marker>
      </defs>
    </svg>
  )
}

function IntegratedFlowDiagram() {
  return (
    <svg viewBox="0 0 800 300" className="flow-diagram-svg">
      {/* Module 1 */}
      <rect x="50" y="100" width="80" height="100" fill="none" stroke="#2563eb" strokeWidth="3" rx="5" />
      <text x="90" y="95" textAnchor="middle" fontSize="12" fontWeight="600" fill="#2563eb">1. Condensation</text>
      
      {/* Arrow 1 */}
      <path d="M 130 150 L 180 150" stroke="#2563eb" strokeWidth="3" markerEnd="url(#arrow-flow)" fill="none" />
      
      {/* Storage */}
      <rect x="180" y="130" width="100" height="40" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="2" rx="3" />
      <text x="230" y="125" textAnchor="middle" fontSize="12" fontWeight="600" fill="#10b981">Storage</text>
      
      {/* Arrow 2 */}
      <path d="M 280 150 L 330 150" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-flow)" fill="none" />
      
      {/* Module 2 */}
      <rect x="330" y="120" width="120" height="60" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="3" rx="5" />
      <text x="390" y="115" textAnchor="middle" fontSize="12" fontWeight="600" fill="#f59e0b">2. SODIS</text>
      
      {/* Arrow 3 */}
      <path d="M 450 150 L 500 150" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow-flow)" fill="none" />
      
      {/* Module 3 */}
      <rect x="500" y="130" width="80" height="40" fill="#6b7280" opacity="0.2" stroke="#6b7280" strokeWidth="3" rx="5" />
      <text x="540" y="125" textAnchor="middle" fontSize="12" fontWeight="600" fill="#6b7280">3. Filter</text>
      
      {/* Arrow 4 */}
      <path d="M 580 150 L 630 150" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-flow)" fill="none" />
      
      {/* Output */}
      <circle cx="680" cy="150" r="30" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="2" />
      <text x="680" y="155" textAnchor="middle" fontSize="11" fontWeight="600" fill="#10b981">Clean</text>
      <text x="680" y="170" textAnchor="middle" fontSize="11" fontWeight="600" fill="#10b981">Water</text>
      
      <defs>
        <marker id="arrow-flow" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#2563eb" />
        </marker>
      </defs>
    </svg>
  )
}

export default HowItWorks

