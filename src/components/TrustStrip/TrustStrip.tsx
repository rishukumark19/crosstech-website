import React from 'react';
import './TrustStrip.scss';

const LOGOS = [
  { name: 'HealthFirst', emoji: '🏥' },
  { name: 'StateCouncil', emoji: '🏛️' },
  { name: 'EduGroup', emoji: '🎓' },
  { name: 'LegalPartners', emoji: '⚖️' },
  { name: 'MedClinic', emoji: '💊' },
  { name: 'CivicHub', emoji: '🏢' },
  { name: 'AcadPortal', emoji: '📚' },
  { name: 'ServicePro', emoji: '🔧' },
];

const LogoItem: React.FC<{ name: string; emoji: string }> = ({ name, emoji }) => (
  <div className="trust-logo" aria-label={name}>
    <span className="trust-logo-emoji">{emoji}</span>
    <span className="trust-logo-name">{name}</span>
  </div>
);

const TrustStrip: React.FC = () => {
  return (
    <section className="trust-strip" aria-label="Trusted by organizations">
      <div className="trust-strip-header">
        <span className="trust-strip-label">Trusted by healthcare, education, politics & service businesses</span>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="trust-marquee-wrapper" aria-hidden="true">
        <div className="trust-marquee trust-marquee--left">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <LogoItem key={i} {...logo} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="trust-marquee-wrapper" aria-hidden="true">
        <div className="trust-marquee trust-marquee--right">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <LogoItem key={i} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
