import React, { useRef, useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Award, Rocket, Code2, Users, Star } from 'lucide-react';
import './Stats.scss';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  subLabel: string;
  icon: React.ReactNode;
  colorClass: string;
}

const STATS: StatItem[] = [
  {
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    subLabel: 'delivering digital excellence',
    icon: <Award className="w-6 h-6" />,
    colorClass: 'pink',
  },
  {
    value: 500,
    suffix: '+',
    label: 'Sites Launched',
    subLabel: 'across 15+ industries',
    icon: <Rocket className="w-6 h-6" />,
    colorClass: 'sky',
  },
  {
    value: 80,
    suffix: '+',
    label: 'Internal Assets',
    subLabel: 'reusable design components',
    icon: <Code2 className="w-6 h-6" />,
    colorClass: 'royal',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    subLabel: 'based on post-launch surveys',
    icon: <Star className="w-6 h-6" />,
    colorClass: 'pink',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Niche Industries',
    subLabel: 'healthcare, education & more',
    icon: <Users className="w-6 h-6" />,
    colorClass: 'sky',
  },
];

function useCountUp(target: number, duration = 1600, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

const StatCard: React.FC<{ stat: StatItem; variants: Variants; animate: boolean }> = ({ stat, variants, animate }) => {
  const count = useCountUp(stat.value, 1500, animate);

  return (
    <motion.div className="stat-card glass-panel" variants={variants}>
      <div className={`stat-icon icon-${stat.colorClass}`}>
        {stat.icon}
      </div>
      <div className="stat-content">
        <span className="stat-value">
          {count}{stat.suffix}
        </span>
        <span className="stat-label">{stat.label}</span>
        <span className="stat-sublabel">{stat.subLabel}</span>
      </div>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="stats" data-section="Our Impact" ref={sectionRef}>
      <div className="stats-container">
        <motion.div
          className="stats-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="stats-badge">📊 Real Numbers</div>
          <h2>The ROI Engine</h2>
          <p>We don't do vanity metrics. We deliver hard data and real growth — every project, every client.</p>
        </motion.div>

        <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {STATS.map((stat, index) => (
            <StatCard key={index} stat={stat} variants={itemVariants} animate={hasAnimated} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
