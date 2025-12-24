import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Technology.css'
import { initScrollReveal } from '../utils/scrollReveal'

function Technology() {
  useEffect(() => {
    initScrollReveal()
  }, [])

  return (
    <div className="technology">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content reveal">
            <h1>Technology & Design</h1>
            <p className="page-hero-subtitle">
              Detailed specifications, performance metrics, validation protocols, and design rationale 
              for judges and technical partners.
            </p>
          </div>
        </div>
      </section>

      {/* Dimensions & Materials */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Physical Specifications</h2>
            <p className="section-subtitle">
              Prototype dimensions and material selection
            </p>
          </div>
          <div className="specs-grid">
            <div className="spec-card reveal">
              <h3>Condensation Cylinder</h3>
              <div className="spec-details">
                <div className="spec-item">
                  <span className="spec-label">Height:</span>
                  <span className="spec-value">300 mm (optimized) / 250 mm (compact)</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Outer Diameter:</span>
                  <span className="spec-value">140 mm (optimized) / 120 mm (compact)</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Wall Thickness:</span>
                  <span className="spec-value">3.5 mm</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Material:</span>
                  <span className="spec-value">UV-stable polycarbonate</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Surface Coating:</span>
                  <span className="spec-value">Fluorinated/silicone hydrophobic + hydrophilic silane/silica-acrylic</span>
                </div>
              </div>
            </div>
            <div className="spec-card reveal">
              <h3>Storage Block</h3>
              <div className="spec-details">
                <div className="spec-item">
                  <span className="spec-label">Internal Dimensions:</span>
                  <span className="spec-value">25 × 8 × 5 cm</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Capacity:</span>
                  <span className="spec-value">~1 L</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Material:</span>
                  <span className="spec-value">Food-safe plastic</span>
                </div>
              </div>
            </div>
            <div className="spec-card reveal">
              <h3>SODIS Tray</h3>
              <div className="spec-details">
                <div className="spec-item">
                  <span className="spec-label">Internal Dimensions:</span>
                  <span className="spec-value">25 × 8 × 3.75 cm</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Internal Volume:</span>
                  <span className="spec-value">~0.75 L</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Material:</span>
                  <span className="spec-value">Borosilicate glass or UV-stable polycarbonate</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Reflector:</span>
                  <span className="spec-value">Mylar/PET backing</span>
                </div>
              </div>
            </div>
            <div className="spec-card reveal">
              <h3>Filtration Module</h3>
              <div className="spec-details">
                <div className="spec-item">
                  <span className="spec-label">Filter Type:</span>
                  <span className="spec-value">0.2-0.5 µm PES/PVDF membrane OR layered cartridge</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Cartridge Layers:</span>
                  <span className="spec-value">Sand + activated carbon + microfiber</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Flow Rate:</span>
                  <span className="spec-value">Gravity-fed, no pressure required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Performance Metrics & Targets</h2>
            <p className="section-subtitle">
              Target performance based on prototype testing and literature validation
            </p>
          </div>
          <div className="performance-table-wrapper reveal">
            <table className="performance-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Target/Prototype Result</th>
                  <th>Validation Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Condensation Rate</strong></td>
                  <td>50-150 mL/hour at 60-80% RH</td>
                  <td>Benchtop humidity chamber (60-80% RH), droplet motion analysis on patterned surfaces vs. controls</td>
                  <td>✅ Prototype tested (benchtop)</td>
                </tr>
                <tr>
                  <td><strong>Daily Output</strong></td>
                  <td>0.75-1.0 L per night (moderate humidity)</td>
                  <td>Field testing in controlled conditions</td>
                  <td>🔄 In progress</td>
                </tr>
                <tr>
                  <td><strong>Pathogen Reduction (SODIS)</strong></td>
                  <td>3-log (99.9%) reduction of E. coli</td>
                  <td>UV cards, temperature logging, literature-based (WHO/SODIS)</td>
                  <td>✅ Design validated</td>
                </tr>
                <tr>
                  <td><strong>SODIS Treatment Time</strong></td>
                  <td>2-4 hours (with reflector) vs. 4-6 hours standard</td>
                  <td>UV exposure measurement, temperature monitoring</td>
                  <td>🔄 Testing</td>
                </tr>
                <tr>
                  <td><strong>Microplastic Removal</strong></td>
                  <td>75-90% removal of particles &gt;0.5 µm</td>
                  <td>Turbidity tests, surrogate particle analysis, literature-based</td>
                  <td>🔄 Early testing</td>
                </tr>
                <tr>
                  <td><strong>System Lifetime</strong></td>
                  <td>3-5 years (with component replacement)</td>
                  <td>Material durability testing, accelerated aging</td>
                  <td>📋 Planned</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="validation-note reveal">
            <p>
              <strong>Validation Status:</strong> ✅ = Validated/Tested | 🔄 = In Progress | 📋 = Planned
            </p>
            <p>
              <strong>Important Notes:</strong>
            </p>
            <ul style={{ marginTop: 'var(--spacing-sm)', paddingLeft: 'var(--spacing-lg)' }}>
              <li>Performance targets are based on prototype benchtop testing, published research on biphilic 
              condensation and SODIS, and membrane filtration studies.</li>
              <li>Results may vary significantly with environmental conditions (humidity, sunlight intensity, ambient temperature).</li>
              <li>"Prototype tested" means benchtop/lab testing; field validation in diverse climates is planned.</li>
              <li>"Design validated" means the design follows validated methods (e.g., WHO SODIS guidelines) but 
              our specific implementation needs field testing.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Design Rationale */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Design Rationale & Innovation</h2>
          </div>
          <div className="rationale-grid">
            <div className="rationale-item reveal">
              <h3>Why Biphilic Condensation?</h3>
              <p>
                Research shows that alternating hydrophilic/hydrophobic patterns can enhance 
                condensation rates by 2-3× compared to uniform surfaces. The Namib desert beetle 
                demonstrates this principle in nature. Our vertical design maximizes surface area 
                while allowing gravity-assisted collection.
              </p>
              <p className="rationale-reference">
                <strong>References:</strong> Boreyko & Chen (2009), Parker & Lawrence (2001)
              </p>
            </div>
            <div className="rationale-item reveal">
              <h3>Why Optimize SODIS?</h3>
              <p>
                Classic SODIS in PET bottles requires 4-6 hours. Our shallow tray with reflective 
                backing increases UV-A exposure and heating, reducing treatment time to 2-4 hours 
                while maintaining efficacy. This makes daily water treatment more practical.
              </p>
              <p className="rationale-reference">
                <strong>References:</strong> WHO SODIS guidelines, McGuigan et al. (2012)
              </p>
            </div>
            <div className="rationale-item reveal">
              <h3>Why Address Microplastics?</h3>
              <p>
                Most low-cost water treatment systems focus on pathogens but ignore microplastics. 
                As microplastic contamination increases globally, proactive removal is prudent. Our 
                final filter stage explicitly targets this gap.
              </p>
            </div>
            <div className="rationale-item reveal">
              <h3>Why Modular Design?</h3>
              <p>
                Components can be replaced individually, extending system lifetime and reducing 
                waste. If one module fails, others continue functioning. This also allows for 
                future improvements without replacing the entire system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Cost Analysis</h2>
            <p className="section-subtitle">
              Prototype costs and target retail pricing
            </p>
          </div>
          <div className="cost-breakdown reveal">
            <div className="cost-section">
              <h3>Prototype BOM (India, Small Scale)</h3>
              <div className="cost-items">
                <div className="cost-item">
                  <span>Condensation cylinder (polycarbonate + coatings)</span>
                  <span>₹200-250 (~$2.5-3)</span>
                </div>
                <div className="cost-item">
                  <span>SODIS tray (glass/polycarbonate + reflector)</span>
                  <span>₹100-120 (~$1.2-1.5)</span>
                </div>
                <div className="cost-item">
                  <span>Storage block + filter module</span>
                  <span>₹100-110 (~$1.2-1.4)</span>
                </div>
                <div className="cost-item">
                  <span>Assembly & hardware</span>
                  <span>₹60-70 (~$0.7-0.9)</span>
                </div>
                <div className="cost-item cost-total">
                  <span><strong>Total Prototype Cost</strong></span>
                  <span><strong>₹460-500 (~$6-7)</strong></span>
                </div>
              </div>
              <p className="cost-note">
                <em>Note: Excludes labor, tooling, and overhead. Costs vary by region and material sourcing.</em>
              </p>
            </div>
            <div className="cost-section">
              <h3>Target Retail Price (Volume Manufacturing)</h3>
              <div className="cost-target">
                <div className="target-price">$15-25</div>
                <p>
                  With tooling, volume manufacturing, and optimized supply chains, target retail 
                  price for NGOs, schools, and relief organizations. Includes packaging and basic 
                  documentation.
                </p>
                <div className="target-comparison">
                  <p><strong>Cost Comparison (3-year lifetime):</strong></p>
                  <ul>
                    <li>Hygrosphere: $15-25 one-time</li>
                    <li>Boiling (fuel): $180-360 (fuel costs)</li>
                    <li>Chlorine tablets: $72-180 (monthly supply)</li>
                    <li>Bottled water: $1,080-2,160 (monthly supply)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limitations & Challenges */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Limitations & Future Improvements</h2>
            <p className="section-subtitle">
              Honest assessment of current limitations and areas for improvement
            </p>
          </div>
          <div className="limitations-grid">
            <div className="limitation-item reveal">
              <h3>Environmental Dependencies</h3>
              <ul>
                <li><strong>Humidity:</strong> Optimal performance at 60-80% RH; lower output in arid conditions (&lt;40% RH)</li>
                <li><strong>Sunlight:</strong> SODIS requires 2-4 hours of strong sunlight; cloudy days extend treatment time</li>
                <li><strong>Temperature:</strong> Condensation efficiency varies with temperature gradients</li>
              </ul>
            </div>
            <div className="limitation-item reveal">
              <h3>Output Limitations</h3>
              <ul>
                <li><strong>Daily capacity:</strong> ~0.75-1.0 L per unit (suitable for 1-2 people, not large families)</li>
                <li><strong>Collection time:</strong> Water condenses primarily overnight; daytime output is lower</li>
                <li><strong>Storage:</strong> Limited to ~1L storage capacity between modules</li>
              </ul>
            </div>
            <div className="limitation-item reveal">
              <h3>Technical Challenges</h3>
              <ul>
                <li><strong>Surface coating durability:</strong> Long-term performance of biphilic coatings needs field validation</li>
                <li><strong>Filter maintenance:</strong> Filter replacement schedule needs optimization based on water quality</li>
                <li><strong>Integration:</strong> Flow between modules needs optimization for reliability</li>
              </ul>
            </div>
            <div className="limitation-item reveal">
              <h3>Future Improvements</h3>
              <ul>
                <li>Larger capacity versions for schools/communities</li>
                <li>Enhanced coatings for better low-humidity performance</li>
                <li>Automated flow control between modules</li>
                <li>Integration with existing water sources (hybrid systems)</li>
                <li>Cost reduction through material optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Scalability */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Manufacturing & Scalability</h2>
          </div>
          <div className="manufacturing-content">
            <div className="manufacturing-item reveal">
              <h3>Materials & Sourcing</h3>
              <p>
                All materials are commercially available and can be sourced locally in most regions. 
                Polycarbonate, glass, and food-safe plastics are standard industrial materials. 
                Surface coatings can be applied using spray or dip methods.
              </p>
            </div>
            <div className="manufacturing-item reveal">
              <h3>Assembly</h3>
              <p>
                Simple assembly process suitable for local manufacturing or assembly centers. 
                No specialized equipment required beyond basic tools. Modular design allows for 
                quality control at each stage.
              </p>
            </div>
            <div className="manufacturing-item reveal">
              <h3>Scalability</h3>
              <p>
                Design is optimized for both small-scale production (hundreds of units) and 
                larger-scale manufacturing (thousands+). Tooling costs are minimal as most 
                components use standard materials and simple geometries.
              </p>
            </div>
            <div className="manufacturing-item reveal">
              <h3>Quality Control</h3>
              <p>
                Key quality checkpoints: surface coating uniformity, UV transmission of SODIS 
                tray, filter integrity. Simple visual and functional tests can be performed 
                without expensive equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section section-alt">
        <div className="container">
          <div className="cta-section reveal">
            <h2>Interested in Technical Details?</h2>
            <p>
              For detailed technical documentation, test protocols, or partnership inquiries, 
              please contact us.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technology

