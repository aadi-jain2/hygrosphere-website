import React, { useState, useEffect } from 'react'
import './Contact.css'
import { initScrollReveal } from '../utils/scrollReveal'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    message: '',
    interest: 'partnership'
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    initScrollReveal()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    // In a real application, you would send this to a backend API
    console.log('Form submitted:', formData)
    
    // Simulate form submission
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        organisation: '',
        message: '',
        interest: 'partnership'
      })
      setSubmitted(false)
    }, 5000)
  }

  if (submitted) {
    return (
      <div className="contact">
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-content reveal">
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h1>Thank You!</h1>
                <p className="page-hero-subtitle">
                  We've received your message and will get back to you soon.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="contact">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content reveal">
            <h1>Contact & Partner With Us</h1>
            <p className="page-hero-subtitle">
              Interested in piloting Hygrosphere, partnering with us, or learning more? 
              We'd love to hear from NGOs, schools, relief organizations, researchers, and judges.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info reveal">
              <h2>Get in Touch</h2>
              <p>
                We're actively seeking partnerships to pilot Hygrosphere in real-world settings. 
                Whether you represent an NGO, school, relief organization, or research institution, 
                we're interested in collaborating.
              </p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📧</div>
                  <div>
                    <strong>Email</strong>
                    <p>contact@hygrosphere.org</p>
                    <p className="contact-note">(Placeholder - update with actual contact)</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">🌍</div>
                  <div>
                    <strong>Location</strong>
                    <p>Global (Remote Team)</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">🤝</div>
                  <div>
                    <strong>Partnerships</strong>
                    <p>NGOs, Schools, Relief Organizations, Researchers</p>
                  </div>
                </div>
              </div>

              <div className="contact-cta-box">
                <h3>For Conrad Challenge Judges</h3>
                <p>
                  Thank you for reviewing our submission! We're happy to provide additional 
                  technical documentation, test data, or answer any questions. Please use 
                  the form or contact us directly.
                </p>
              </div>
            </div>

            <div className="contact-form-wrapper reveal">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="Your full name"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="organisation">Organisation</label>
                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Your organization (optional)"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="interest">I'm interested in:</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="partnership">Partnership / Piloting</option>
                    <option value="judge">Conrad Challenge Judge Inquiry</option>
                    <option value="research">Research Collaboration</option>
                    <option value="media">Media / Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Tell us about your interest, questions, or how we can collaborate..."
                    rows="6"
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>What Happens Next?</h2>
          </div>
          <div className="next-steps">
            <div className="next-step reveal">
              <div className="next-step-number">1</div>
              <h3>We Review Your Inquiry</h3>
              <p>We'll read your message and understand your needs or questions.</p>
            </div>
            <div className="next-step reveal">
              <div className="next-step-number">2</div>
              <h3>We Respond Promptly</h3>
              <p>Expect a response within 2-3 business days with next steps.</p>
            </div>
            <div className="next-step reveal">
              <div className="next-step-number">3</div>
              <h3>We Explore Collaboration</h3>
              <p>For partnerships, we'll discuss pilot opportunities, requirements, and logistics.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

