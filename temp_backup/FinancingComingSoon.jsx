import ModernComingSoon from "./ModernComingSoon";

export default function FinancingComingSoon() {
  return (
    <ModernComingSoon
      title="Financing page will be up soon..."
      subtitle="approximately"
      date="2024-08-12T23:00:00Z"
      illustration={<img src="/assets/soon.svg" alt="Financing Coming Soon" style={{ width: 340, height: 220 }} />}
    />
  );
} 