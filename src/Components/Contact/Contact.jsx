import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setResult("")

    const formData = new FormData(event.target)
    formData.append("access_key", "8af619b2-7b23-4e32-93f3-c455aaa3662c")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResult("Message sent successfully!")
        event.target.reset()
      } else {
        setResult("Failed to send message. Please try again.")
      }
    } catch (error) {
      setResult("Something went wrong. Please try later.", error)
    }

    setLoading(false)
  }

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send
            me a message about anything you want me to work on.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>shaikhayaz950@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91-7506338531</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>MH, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Write Your Message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="contact-submit" disabled={loading}>
            {loading ? "Sending..." : "Submit now"}
          </button>

          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact
