import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './MaintenanceCTA.scss';

const PLANS = [
  {
    name: 'Essential',
    emoji: '🛡️',
    price: '₹3,000',
    period: '/month',
    tag: null,
    color: 'plan--essential',
    features: [
      'Weekly security patches',
      'Daily automated backups',
      'Monthly performance report',
      'Uptime monitoring',
      '2 content edits/month',
    ],
  },
  {
    name: 'Growth',
    emoji: '🚀',
    price: '₹8,000',
    period: '/month',
    tag: 'Most Popular',
    color: 'plan--growth',
    features: [
      'Everything in Essential',
      '8 content edits/month',
      'Monthly design improvements',
      'SEO health check',
      'Priority response (4 hrs)',
    ],
  },
  {
    name: 'Partnership',
    emoji: '🤝',
    price: 'Custom',
    period: 'retainer',
    tag: null,
    color: 'plan--partnership',
    features: [
      'Everything in Growth',
      'Unlimited content edits',
      'Dedicated developer hours',
      'Strategy reviews (monthly)',
      '2-hour SLA response',
    ],
  },
];

const UPTIMESTAT = [
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '< 2h', label: 'Response Time' },
  { value: '24/7', label: 'Monitoring' },
  { value: '0', label: 'Surprise Fees' },
];

const MaintenanceCTA: React.FC = () => {
  return (
    <section className="maintenance-cta">
      {/* ── Top dark header band ─────────────────── */}
      <div className="maintenance-header">
        <motion.div
          className="maintenance-header-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="maintenance-badge">⚡ Post-Launch Support</div>
          <h2 className="maintenance-title">
            We Don't Disappear<br />
            <span className="maintenance-title--accent">After Launch.</span>
          </h2>
          <p className="maintenance-subtitle">
            Most agencies ghost you after delivery. We stay — monitoring, updating, and improving your site every single month so you never have to worry about it.
          </p>

          {/* Uptime stats row */}
          <div className="maintenance-stats">
            {UPTIMESTAT.map((s) => (
              <div key={s.label} className="maintenance-stat">
                <span className="maintenance-stat-value">{s.value}</span>
                <span className="maintenance-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Plans grid ───────────────────────────── */}
      <div className="maintenance-plans-wrapper">
        <motion.div
          className="maintenance-plans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              className={`maintenance-plan ${plan.color}`}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              {plan.tag && <div className="plan-tag">{plan.tag}</div>}
              <div className="plan-header">
                <span className="plan-emoji">{plan.emoji}</span>
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="plan-price-value">{plan.price}</span>
                  <span className="plan-price-period">{plan.period}</span>
                </div>
              </div>
              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="plan-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="plan-cta">
                Get Started →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <p className="maintenance-footnote">
          All plans include a free 30-minute onboarding call. No lock-in contracts on first month.
        </p>
      </div>
    </section>
  );
};

export default MaintenanceCTA;
