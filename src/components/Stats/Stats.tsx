import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Award, Rocket, Code2, Users } from 'lucide-react';
import './Stats.scss';

const Stats: React.FC = () => {
  const stats = [
    {
      value: "10+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6" />,
      colorClass: "pink"
    },
    {
      value: "500+",
      label: "Sites Launched",
      icon: <Rocket className="w-6 h-6" />,
      colorClass: "sky"
    },
    {
      value: "80+",
      label: "Internal Assets",
      icon: <Code2 className="w-6 h-6" />,
      colorClass: "royal"
    },
    {
      value: "15+",
      label: "Niche Industries",
      icon: <Users className="w-6 h-6" />,
      colorClass: "pink"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="stats" data-section="Our Impact">
      <div className="stats-container">
        <motion.div 
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="stats-header-column">
            <h2>The ROI Engine</h2>
            <p>We don't do vanity metrics. We deliver hard data and real growth.</p>
          </div>

          {stats.map((stat, index) => (
            <motion.div className="stat-card glass-panel" key={index} variants={itemVariants}>
              <div className={`stat-icon icon-${stat.colorClass}`}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
