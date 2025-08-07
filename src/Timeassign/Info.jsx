import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./ContactForm.css"; // Import the CSS file

const ContactForm = ({ onNext, onBack }) => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const form = e.target;
    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const phoneNumber = form.phoneNumber.value.trim();

    if (!fullName || !email || !phoneNumber) {
      alert("Please fill all required fields.");
      return;
    }

    // Perform form validation or API calls here
    navigate("/review-appointment"); // Move to the review appointment page
  };

  return (
    <div className="form-container">
      {/* Title and Back Button */}
      <div className="form-header">
        <h2 className="form-title">Your Information</h2>
        <button
          type="button"
          onClick={() => navigate("/scheduler")} // Go back to the previous step
          className="border font-bold text-sm border-[#1e293b] rounded-md py-2 px-4 hover:bg-[#161d31]"
        >
          Back
        </button>
      </div>

      <p className="form-subtitle">
        Please provide your contact details for your appointment
      </p>

      {/* Form */}
      <form className="form" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="form-group">
          <label>Full Name *</label>
          <input type="text" name="fullName" placeholder="John Doe" required />
        </div>

        {/* Email Address */}
        <div className="form-group">
          <label>Email Address *</label>
          <input type="email" name="email" placeholder="john.doe@example.com" required />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label>Phone Number *</label>
          <input type="text" name="phoneNumber" placeholder="(123) 456-7890" required />
        </div>

        {/* Address Section */}
        <div className="address-section">
          <h3>Address Information (Optional)</h3>

          <div className="form-group">
            <label>Street Address</label>
            <input type="text" name="streetAddress" placeholder="123 Main St" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input type="text" name="city" placeholder="New York" />
            </div>
            <div className="form-group small">
              <label>State</label>
              <input type="text" name="state" placeholder="NY" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Zip Code</label>
              <input type="text" name="zipCode" placeholder="10001" />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input type="text" name="country" placeholder="United States" />
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="continue-button-container">
          <p className="required-fields-note">Required fields are marked with *</p>
          <button type="submit" className="continue-button">
            Continue to Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
