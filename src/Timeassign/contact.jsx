"use client"

import { useState, useEffect } from "react"
import { FaBuilding, FaMapMarkerAlt, FaPhone } from "react-icons/fa"

function Contact({ onNext }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "white", // Changed to white
      color: "#333", // Darker text for better contrast
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "3rem 1rem",
      fontFamily: "Arial, sans-serif",
    },
    wrapper: {
      maxWidth: "1200px",
      width: "100%",
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      marginBottom: "3rem",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#A1252E", // Darker heading
      marginBottom: "1rem",
    },
    subtitle: {
      color: "#666", // Darker subtitle
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: "1.5",
    },
    formRow: {
      display: "grid",
      gridTemplateColumns: windowWidth >= 640 ? "1fr 1fr" : "1fr",
      gap: "1.5rem",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    label: {
      marginBottom: "0.5rem",
      color: "#444", // Darker label
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      borderRadius: "0.375rem",
      backgroundColor: "#f9f9f9", // Lighter background
      border: "1px solid #ddd", // Lighter border
      color: "#333", // Darker text
      outline: "none",
    },
    textarea: {
      width: "100%",
      padding: "0.75rem",
      borderRadius: "0.375rem",
      backgroundColor: "#f9f9f9", // Lighter background
      border: "1px solid #ddd", // Lighter border
      color: "#333", // Darker text
      minHeight: "150px",
      resize: "vertical",
      outline: "none",
    },
    termsText: {
      fontSize: "0.875rem",
      color: "#666", // Darker terms text
      lineHeight: "1.5",
    },
    link: {
      color: "#d32f2f", // Red links to match button
      textDecoration: "none",
    },
    button: {
      backgroundColor: "#A1252E", // Red button
      color: "white",
      padding: "0.75rem 1.25rem",
      borderRadius: "0.375rem",
      fontWeight: "500",
      border: "none",
      cursor: "pointer",
      width: "fit-content",
      transition: "background-color 0.3s ease",
    },
    infoSection: {
      display: "flex",
      flexDirection: "column",
      gap: "3rem",
    },
    infoBlock: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    iconContainer: {
      backgroundColor: "#f0f0f0", // Lighter background
      padding: "0.75rem",
      borderRadius: "0.375rem",
      display: "inline-block",
    },
    icon: {
      width: "1.5rem",
      height: "1.5rem",
      color: "#A1252E", // Red icons to match theme
    },
    infoTitle: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      color: "#1a1a1a", // Darker title
    },
    infoText: {
      color: "#555", // Darker text
      lineHeight: "1.5",
    },
    phoneNumber: {
      color: "#A1252E", // Red phone number
      marginTop: "0.5rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onNext) {
      onNext()
    }
  }

  return (
    <div  style={styles.container}>
      <div className="pt-20 pb-10" style={styles.wrapper}>
        <div style={styles.header}>
          <h1 style={styles.heading}>Contact Us</h1>
          <p style={styles.subtitle}>
            We use an agile approach to test assumptions and connect with the needs of your audience early and often.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: windowWidth >= 768 ? "2fr 1fr" : "1fr",
            gap: "2rem",
          }}
        >
          <div>
            <form style={styles.form} onSubmit={handleSubmit}>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label htmlFor="first-name" style={styles.label}>
                    First Name
                  </label>
                  <input type="text" id="first-name" placeholder="Bonnie" style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="last-name" style={styles.label}>
                    Last Name
                  </label>
                  <input type="text" id="last-name" placeholder="Green" style={styles.input} />
                </div>
              </div>

              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.label}>
                    Your email
                  </label>
                  <input type="email" id="email" placeholder="name@supercar.com" style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="phone" style={styles.label}>
                    Phone Number
                  </label>
                  <input type="tel" id="phone" placeholder="+12 345 6789" style={styles.input} />
                </div>
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="message" style={styles.label}>
                  Your message
                </label>
                <textarea id="message" placeholder="Leave a comment..." style={styles.textarea}></textarea>
              </div>

              <div style={styles.termsText}>
                By submitting this form you agree to our{" "}
                <a href="#" style={styles.link}>
                  terms and conditions
                </a>{" "}
                and our{" "}
                <a href="#" style={styles.link}>
                  privacy policy
                </a>{" "}
                which explains how we may collect, use and disclose your personal information including to third
                parties.
              </div>

              <div>
                <button 
                  type="submit" 
                  style={styles.button}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#731B22'} // Darker red on hover
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#A1252E'}
                >
                  Send message
                </button>
              </div>
            </form>
          </div>

          <div style={styles.infoSection}>
            <div style={styles.infoBlock}>
              <div style={styles.iconContainer}>
                <FaBuilding style={styles.icon} />
              </div>
              <h3 style={styles.infoTitle}>Company information:</h3>
              <div style={styles.infoText}>
                <p>Themesberg LLC</p>
                <p>Tax id: USXXXXXX</p>
              </div>
            </div>

            <div style={styles.infoBlock}>
              <div style={styles.iconContainer}>
                <FaMapMarkerAlt style={styles.icon} />
              </div>
              <h3 style={styles.infoTitle}>Address:</h3>
              <div style={styles.infoText}>
                <p>SILVER LAKE, United States 1941 Late Avenue</p>
                <p>Zip Code/Postal code:03875</p>
              </div>
            </div>

            <div style={styles.infoBlock}>
              <div style={styles.iconContainer}>
                <FaPhone style={styles.icon} />
              </div>
              <h3 style={styles.infoTitle}>Call us:</h3>
              <div style={styles.infoText}>
                <p>Call us to speak to a member of our team. We are always happy to help.</p>
                <p style={styles.phoneNumber}>+1(646) 786-5060</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact