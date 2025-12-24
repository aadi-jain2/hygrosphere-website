import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Team.css'
import { initScrollReveal } from '../utils/scrollReveal'

function Team() {
  useEffect(() => {
    initScrollReveal()
  }, [])

  return (
    <div className="team">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content reveal">
            <h1>Team & Story</h1>
            <p className="page-hero-subtitle">
              Meet the student founders behind Hygrosphere and learn about our journey 
              from concept to prototype.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Our Story</h2>
            <p className="section-subtitle">
              How two high school students identified a global problem and set out to solve it
            </p>
          </div>
          <div className="story-content reveal">
            <p>
              Hygrosphere was born from a simple observation: while working on science fair projects 
              related to water quality and climate change, we noticed that existing solutions for 
              off-grid water treatment had significant limitations. Chlorine tablets require ongoing 
              supply chains, household filters need electricity or frequent cartridge replacements, 
              and boiling produces CO₂ emissions and indoor air pollution.
            </p>
            <p>
              We asked ourselves: <strong>Could we design a system that harvests water from air, 
              disinfects it with sunlight, and filters microplastics—all without electricity, 
              chemicals, or recurring costs?</strong>
            </p>
            <p>
              Drawing inspiration from biomimicry (the Namib desert beetle), validated methods 
              (SODIS), and emerging research on biphilic condensation, we began prototyping. 
              After multiple iterations, we developed Hygrosphere—a three-in-one solar water 
              station designed specifically for off-grid communities.
            </p>
            <p>
              Our goal is to make clean water accessible to the 2+ billion people who lack it, 
              while reducing environmental impact and improving health outcomes. We're excited 
              to share our progress with the Conrad Challenge community and seek partnerships 
              to pilot and scale this solution.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Meet the Team</h2>
          </div>
          <div className="team-grid">
            <div className="team-member reveal">
              <div className="team-avatar">
                <span className="avatar-icon">👨‍🔬</span>
              </div>
              <h3>Co-Founder & Engineering Lead</h3>
              <p className="team-role">Engineering & Design</p>
              <p className="team-bio">
                Leads the technical design, prototyping, and validation of Hygrosphere's three 
                integrated modules. Experienced in science competitions and passionate about 
                applying biomimicry and materials science to solve real-world problems. 
                Focuses on optimizing condensation efficiency and system integration.
              </p>
              <p className="team-achievement">
                <strong>Key Contribution:</strong> Designed and tested biphilic surface patterns, 
                achieving measurable improvement in droplet collection vs. uniform surfaces in benchtop tests.
              </p>
              <div className="team-expertise">
                <span className="expertise-tag">Biomimicry</span>
                <span className="expertise-tag">Materials Science</span>
                <span className="expertise-tag">Prototyping</span>
              </div>
            </div>
            <div className="team-member reveal">
              <div className="team-avatar">
                <span className="avatar-icon">🌍</span>
              </div>
              <h3>Co-Founder & Impact Lead</h3>
              <p className="team-role">Impact & Partnerships</p>
              <p className="team-bio">
                Drives the social impact strategy, market research, and partnership development. 
                Strong background in environmental science and social entrepreneurship. Focuses 
                on understanding user needs, validating impact metrics, and building relationships 
                with NGOs, schools, and relief organizations.
              </p>
              <p className="team-achievement">
                <strong>Key Contribution:</strong> Conducted market research identifying the microplastic 
                gap in low-cost systems and developed the integrated three-module concept.
              </p>
              <div className="team-expertise">
                <span className="expertise-tag">Social Impact</span>
                <span className="expertise-tag">Sustainability</span>
                <span className="expertise-tag">Partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Development Timeline</h2>
            <p className="section-subtitle">
              Key milestones in our journey
            </p>
          </div>
          <div className="timeline reveal">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">Initial Research</div>
                <h3>Problem Identification</h3>
                <p>
                  Identified limitations of existing water treatment methods through literature 
                  review and field research. Studied biomimicry, SODIS, and condensation science.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">Concept Development</div>
                <h3>Design Concept</h3>
                <p>
                  Developed the three-module integrated system concept. Designed initial 
                  specifications for condensation cylinder, SODIS tray, and filtration module.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">Prototype v1</div>
                <h3>First Prototype</h3>
                <p>
                  Built initial prototype with basic materials. Tested condensation on simple 
                  surfaces. Identified need for optimized surface patterning.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">Prototype v2</div>
                <h3>Surface Optimization</h3>
                <p>
                  Implemented biphilic surface patterning (hydrophilic/hydrophobic lanes). 
                  Tested droplet formation and collection. Improved collection efficiency.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">Prototype v3</div>
                <h3>Integrated System</h3>
                <p>
                  Integrated all three modules. Optimized SODIS tray depth and reflector design. 
                  Selected and tested filtration options. Validated flow between modules.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">Current</div>
                <h3>Validation & Refinement</h3>
                <p>
                  Conducting performance testing, validating targets, and refining design for 
                  manufacturability. Preparing for pilot partnerships and Conrad Challenge submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Key Lessons & Challenges Overcome</h2>
            <p className="section-subtitle">
              What we've learned through the development process
            </p>
          </div>
          <div className="lessons-grid">
            <div className="lesson-item reveal">
              <h3>Technical Challenges</h3>
              <p>
                Initial prototypes showed that uniform surfaces had poor droplet collection. 
                Research into biphilic patterns led to the helical lane design, which significantly 
                improved collection efficiency in benchtop tests.
              </p>
            </div>
            <div className="lesson-item reveal">
              <h3>Design Iterations</h3>
              <p>
                We went through three major prototype iterations, learning that integration between 
                modules requires careful flow design. The modular approach allows for independent 
                optimization of each component.
              </p>
            </div>
            <div className="lesson-item reveal">
              <h3>Market Understanding</h3>
              <p>
                Research revealed that most low-cost systems ignore microplastics. This became a 
                key differentiator. We also learned that cost is critical—even $5-10 difference 
                can be prohibitive for target users.
              </p>
            </div>
            <div className="lesson-item reveal">
              <h3>Validation Approach</h3>
              <p>
                We learned the importance of clearly distinguishing between benchtop tests, design 
                validation (based on literature), and field validation. Transparency about what's 
                tested vs. projected builds credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Care */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Why We Care</h2>
          </div>
          <div className="values-grid">
            <div className="value-item reveal">
              <div className="value-icon">💧</div>
              <h3>Water is a Human Right</h3>
              <p>
                Access to clean, safe drinking water should not depend on infrastructure, 
                income, or location. We believe technology can bridge this gap.
              </p>
            </div>
            <div className="value-item reveal">
              <div className="value-icon">🌱</div>
              <h3>Sustainability Matters</h3>
              <p>
                Solutions must not create new problems. We're committed to reducing emissions, 
                waste, and environmental impact while solving the water crisis.
              </p>
            </div>
            <div className="value-item reveal">
              <div className="value-icon">🔬</div>
              <h3>Science for Good</h3>
              <p>
                We're passionate about applying scientific principles—biomimicry, materials 
                science, and validated methods—to create practical, scalable solutions.
              </p>
            </div>
            <div className="value-item reveal">
              <div className="value-icon">🤝</div>
              <h3>Collaboration is Key</h3>
              <p>
                We can't solve this alone. We're seeking partnerships with NGOs, schools, 
                researchers, and communities to test, refine, and scale Hygrosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section">
        <div className="container">
          <div className="cta-section reveal">
            <h2>Join Us on This Journey</h2>
            <p>
              Interested in partnering, piloting, or learning more? We'd love to hear from you.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
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

export default Team

