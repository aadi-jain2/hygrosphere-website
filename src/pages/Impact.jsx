import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Impact.css'
import { initScrollReveal } from '../utils/scrollReveal'

function Impact() {
  useEffect(() => {
    initScrollReveal()
  }, [])

  return (
    <div className="impact">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content reveal">
            <h1>Impact & Sustainability</h1>
            <p className="page-hero-subtitle">
              Addressing the global water crisis while reducing environmental impact and 
              improving health outcomes for off-grid communities.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Stats */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2>The Global Water Crisis</h2>
            <p className="section-subtitle">
              Understanding the scale and urgency of the problem we're addressing
            </p>
          </div>
          <div className="crisis-stats">
            <div className="crisis-stat reveal">
              <div className="crisis-stat-number">2.2 Billion</div>
              <div className="crisis-stat-label">
                People lack safely managed drinking water services (WHO/UNICEF, 2023)
              </div>
            </div>
            <div className="crisis-stat reveal">
              <div className="crisis-stat-number">485,000</div>
              <div className="crisis-stat-label">
                Annual deaths from diarrheal diseases linked to unsafe water (WHO)
              </div>
            </div>
            <div className="crisis-stat reveal">
              <div className="crisis-stat-number">4+ Hours</div>
              <div className="crisis-stat-label">
                Daily time spent by women and girls collecting water in many regions
              </div>
            </div>
            <div className="crisis-stat reveal">
              <div className="crisis-stat-number">$260 Billion</div>
              <div className="crisis-stat-label">
                Annual economic losses from inadequate water and sanitation (World Bank)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Hygrosphere vs. Traditional Methods</h2>
            <p className="section-subtitle">
              How our solution compares to existing water treatment options
            </p>
          </div>
          <div className="comparison-table-wrapper reveal">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Initial Cost</th>
                  <th>Operating Cost</th>
                  <th>Electricity</th>
                  <th>Chemicals</th>
                  <th>Maintenance</th>
                  <th>Microplastics</th>
                  <th>CO₂ Emissions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="highlight-row">
                  <td><strong>Hygrosphere</strong></td>
                  <td>$15-25</td>
                  <td>Minimal</td>
                  <td>❌ None</td>
                  <td>❌ None</td>
                  <td>Low</td>
                  <td>✅ Removes</td>
                  <td>✅ Zero</td>
                </tr>
                <tr>
                  <td>Chlorine Tablets</td>
                  <td>$5-10</td>
                  <td>$2-5/month</td>
                  <td>❌ None</td>
                  <td>⚠️ Required</td>
                  <td>Ongoing supply</td>
                  <td>❌ No</td>
                  <td>Low (manufacturing)</td>
                </tr>
                <tr>
                  <td>Household Filters</td>
                  <td>$20-50</td>
                  <td>$5-15/year (cartridges)</td>
                  <td>⚠️ Some models</td>
                  <td>❌ None</td>
                  <td>Cartridge replacement</td>
                  <td>⚠️ Partial</td>
                  <td>Low</td>
                </tr>
                <tr>
                  <td>Boiling</td>
                  <td>$10-30 (fuel)</td>
                  <td>$5-20/month (fuel)</td>
                  <td>❌ None</td>
                  <td>❌ None</td>
                  <td>Fuel procurement</td>
                  <td>❌ No</td>
                  <td>⚠️ High (CO₂ + indoor pollution)</td>
                </tr>
                <tr>
                  <td>Bottled Water</td>
                  <td>N/A</td>
                  <td>$30-60/month</td>
                  <td>❌ None</td>
                  <td>❌ None</td>
                  <td>None</td>
                  <td>⚠️ Source dependent</td>
                  <td>⚠️ High (transport + plastic)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-note reveal">
            <p>
              <strong>Important Notes:</strong>
            </p>
            <ul style={{ marginTop: 'var(--spacing-sm)', paddingLeft: 'var(--spacing-lg)' }}>
              <li>Costs are approximate and vary significantly by region, local material costs, and distribution channels.</li>
              <li>Hygrosphere targets $15-25 retail price with volume manufacturing; prototype cost is higher (~$6-7).</li>
              <li>Operating costs are minimal as the system requires no fuel, chemicals, or frequent filter replacements, 
              but filter replacement may be needed after 6-12 months depending on water quality.</li>
              <li>Comparison assumes typical usage patterns; actual costs vary based on local fuel/tablet prices and consumption rates.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Key Advantages</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card reveal">
              <div className="benefit-icon-large">🌍</div>
              <h3>Off-Grid Operation</h3>
              <p>
                Works entirely on solar energy—no electricity grid, no fuel, no batteries. 
                Ideal for rural communities, disaster relief, and remote schools.
              </p>
            </div>
            <div className="benefit-card reveal">
              <div className="benefit-icon-large">💰</div>
              <h3>Low Lifetime Cost</h3>
              <p>
                One-time purchase with minimal maintenance. Over 3-5 years, significantly 
                cheaper than boiling (fuel costs) or bottled water, even accounting for 
                initial investment.
              </p>
            </div>
            <div className="benefit-card reveal">
              <div className="benefit-icon-large">🌱</div>
              <h3>Zero Emissions</h3>
              <p>
                Eliminates CO₂ emissions from boiling (estimated 1-2 kg CO₂ per liter of 
                water when using wood/kerosene). Also reduces plastic waste vs. bottled water.
              </p>
            </div>
            <div className="benefit-card reveal">
              <div className="benefit-icon-large">🔬</div>
              <h3>Comprehensive Treatment</h3>
              <p>
                Addresses bacteria, viruses, protozoa (via SODIS) AND microplastics/fine 
                particles (via filtration)—a combination most low-cost systems don't offer.
              </p>
            </div>
            <div className="benefit-card reveal">
              <div className="benefit-icon-large">⏱️</div>
              <h3>Time Savings</h3>
              <p>
                Passive operation means no time spent collecting fuel or waiting for water 
                to boil. Set up in the evening, collect clean water the next day.
              </p>
            </div>
            <div className="benefit-card reveal">
              <div className="benefit-icon-large">🔧</div>
              <h3>Modular & Repairable</h3>
              <p>
                Components can be replaced individually. Durable materials (polycarbonate, 
                glass) designed for long-term use in harsh conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>UN Sustainable Development Goals</h2>
            <p className="section-subtitle">
              Hygrosphere directly supports multiple SDGs
            </p>
          </div>
          <div className="sdg-grid">
            <div className="sdg-card reveal">
              <div className="sdg-icon">6</div>
              <h3>SDG 6: Clean Water & Sanitation</h3>
              <p>
                Provides safely managed drinking water for off-grid communities, 
                addressing Target 6.1 (universal access to safe drinking water).
              </p>
            </div>
            <div className="sdg-card reveal">
              <div className="sdg-icon">3</div>
              <h3>SDG 3: Good Health & Well-being</h3>
              <p>
                Reduces waterborne diseases through effective pathogen removal, 
                supporting Target 3.3 (end epidemics of communicable diseases).
              </p>
            </div>
            <div className="sdg-card reveal">
              <div className="sdg-icon">13</div>
              <h3>SDG 13: Climate Action</h3>
              <p>
                Eliminates CO₂ emissions from boiling and reduces plastic waste, 
                contributing to climate mitigation efforts.
              </p>
            </div>
            <div className="sdg-card reveal">
              <div className="sdg-icon">5</div>
              <h3>SDG 5: Gender Equality</h3>
              <p>
                Reduces time burden on women and girls who typically collect water, 
                freeing time for education and economic activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Target Users & Applications</h2>
          </div>
          <div className="use-cases">
            <div className="use-case reveal">
              <div className="use-case-icon">🏫</div>
              <h3>Rural Schools</h3>
              <p>
                Provide safe drinking water for students without relying on unreliable 
                municipal supply or expensive bottled water. Multiple units can serve 
                larger schools.
              </p>
              <ul>
                <li>No ongoing fuel or chemical costs</li>
                <li>Educational value: demonstrates renewable energy and water science</li>
                <li>Reduces absenteeism from waterborne illnesses</li>
              </ul>
            </div>
            <div className="use-case reveal">
              <div className="use-case-icon">🏕️</div>
              <h3>Disaster Relief</h3>
              <p>
                Rapid deployment in emergency situations where infrastructure is damaged. 
                Works immediately without setup of power or supply chains.
              </p>
              <ul>
                <li>Portable and lightweight</li>
                <li>No dependency on external supply chains</li>
                <li>Works in diverse climate conditions</li>
              </ul>
            </div>
            <div className="use-case reveal">
              <div className="use-case-icon">🏘️</div>
              <h3>Off-Grid Households</h3>
              <p>
                Families in rural areas without reliable water infrastructure can produce 
                clean water daily, supplementing or replacing other methods.
              </p>
              <ul>
                <li>Affordable one-time investment</li>
                <li>Reduces time spent on water collection and treatment</li>
                <li>Improves health outcomes for entire family</li>
              </ul>
            </div>
            <div className="use-case reveal">
              <div className="use-case-icon">🏥</div>
              <h3>Health Clinics</h3>
              <p>
                Small clinics in remote areas need reliable, safe water for patient care 
                and staff. Hygrosphere provides consistent supply without fuel dependency.
              </p>
              <ul>
                <li>Consistent water quality</li>
                <li>No interruption from fuel shortages</li>
                <li>Cost-effective for small facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Projected Impact (Per Unit, Annual)</h2>
            <p className="section-subtitle">
              Estimated impact based on target performance and typical usage
            </p>
          </div>
          <div className="impact-metrics">
            <div className="impact-metric reveal">
              <div className="impact-metric-value">~300 L</div>
              <div className="impact-metric-label">Clean water produced annually</div>
              <div className="impact-metric-note">(Based on 0.75-1.0 L/night target)</div>
            </div>
            <div className="impact-metric reveal">
              <div className="impact-metric-value">~200 kg</div>
              <div className="impact-metric-label">CO₂ emissions avoided</div>
              <div className="impact-metric-note">(vs. boiling with wood/kerosene)</div>
            </div>
            <div className="impact-metric reveal">
              <div className="impact-metric-value">~150 hours</div>
              <div className="impact-metric-label">Time saved per household</div>
              <div className="impact-metric-note">(vs. traditional boiling methods)</div>
            </div>
            <div className="impact-metric reveal">
              <div className="impact-metric-value">$50-100</div>
              <div className="impact-metric-label">Cost savings over 3 years</div>
              <div className="impact-metric-note">(vs. fuel/tablets/bottled water)</div>
            </div>
          </div>
          <div className="impact-note reveal">
            <p>
              <strong>Important:</strong> These are projected estimates based on target performance 
              and typical usage patterns. Actual impact will vary significantly by:
            </p>
            <ul style={{ marginTop: 'var(--spacing-sm)', paddingLeft: 'var(--spacing-lg)' }}>
              <li><strong>Location & Climate:</strong> Humidity levels, sunlight hours, and temperature affect output</li>
              <li><strong>Usage Patterns:</strong> How frequently the system is used and maintained</li>
              <li><strong>Water Quality:</strong> Source water quality affects filter lifespan and maintenance needs</li>
              <li><strong>Baseline Comparison:</strong> Savings depend on what method is being replaced (boiling, tablets, etc.)</li>
            </ul>
            <p style={{ marginTop: 'var(--spacing-md)' }}>
              Field validation in diverse climates and usage scenarios is needed to confirm these projections.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-section reveal">
            <h2>Partner With Us</h2>
            <p>
              Interested in piloting Hygrosphere in your community, school, or organization? 
              We're looking for partners to test and scale this solution.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
              <Link to="/technology" className="btn btn-secondary">
                View Technical Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Impact

