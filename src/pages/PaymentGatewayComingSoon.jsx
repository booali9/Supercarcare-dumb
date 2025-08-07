import React from "react";
import ModernComingSoon from "./ModernComingSoon";

export default function PaymentGatewayComingSoon() {
  return (
    <ModernComingSoon
      title="Payment Gateway will be up soon..."
      subtitle="Securely manage your payments here."
      date="2024-12-31T23:59:59Z" // Example future date for the countdown
      illustration={
        <img
          src="/assets/your_image.png" // Use your custom image or remove for default
          alt="Payment Gateway Coming Soon"
          style={{ width: 340, height: 220 }}
        />
      }
    />
  );
} 