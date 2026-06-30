import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { MonitorSmartphone, LayoutGrid, ShoppingCart, Database, LineChart } from 'lucide-react';
import './Services.scss';

const Services: React.FC = () => {
  const services = [
    {
      title: "Conversion-Obsessed Design",
      desc: "Pixel-perfect interfaces engineered with consumer psychology to turn casual browsers into paying clients.",
      icon: <LayoutGrid className="w-8 h-8" />,
      colorClass: "pink"
    },
    {
      title: "Lightning-Fast Dev",
      desc: "Scalable, secure, and blazingly fast architectures. Because every second of load time costs you sales.",
      icon: <Database className="w-8 h-8" />,
      colorClass: "royal"
    },
    {
      title: "E-commerce Powerhouses",
      desc: "We build 24/7 digital sales machines optimized for maximum AOV and zero cart abandonment.",
      icon: <ShoppingCart className="w-8 h-8" />,
      colorClass: "sky"
    },
    {
      title: "Zero-Headache Support",
      desc: "We handle the hosting, security, and updates. You focus purely on running your business.",
      icon: <MonitorSmartphone className="w-8 h-8" />,
      colorClass: "pink"
    },
    {
      title: "Dominate Google",
      desc: "Data-backed SEO strategies designed to steal organic traffic right out from under your competitors.",
      icon: <LineChart className="w-8 h-8" />,
      colorClass: "royal"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="services">
      <div className="services-container">
        <motion.div className="services-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>Services That Print Money</h2>
          <p>We don't just build websites. We build revenue-generating assets.</p>
        </motion.div>

        <motion.div 
          className="services-bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div className="bento-card glass-panel" key={index} variants={itemVariants}>
              <div className={`service-icon icon-${service.colorClass}`}>
                {service.icon}
              </div>
              <div className="bento-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
