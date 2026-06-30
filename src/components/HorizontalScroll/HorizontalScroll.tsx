import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import "./HorizontalScroll.scss";

const cards = [
  {
    title: "1. The Attack Plan",
    description: "We reverse-engineer your competitors and architect a bulletproof strategy to win your market.",
    icon: <Search className="w-12 h-12" />,
    color: "pink",
  },
  {
    title: "2. Psychological Design",
    description: "We wireframe consumer psychology into every button, pixel, and page to maximize conversions.",
    icon: <PenTool className="w-12 h-12" />,
    color: "sky",
  },
  {
    title: "3. Bulletproof Engineering",
    description: "We write clean, blazingly fast code that scales to millions of users without breaking a sweat.",
    icon: <Code2 className="w-12 h-12" />,
    color: "royal",
  },
  {
    title: "4. Launch & Scale",
    description: "We push to production and immediately begin data-driven monitoring to squeeze every last drop of ROI.",
    icon: <Rocket className="w-12 h-12" />,
    color: "slate",
  },
];

const HorizontalScroll: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Tracks scroll progress over the tall targetRef container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll to horizontal translation.
  // When scrollYProgress goes from 0 to 1, move the cards container from 0% to -75% 
  // (adjust based on how many cards and card width)
  // We have 4 cards, so moving -75% shows the 4th card fully if each card is 25% of the total width.
  // Actually it's easier to map to a viewport width string.
  // Wait, framer-motion useTransform can map to percentages smoothly.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="horizontal-scroll-section">
      <div className="horizontal-sticky-container">
        
        <div className="horizontal-header">
          <h2>The Growth Blueprint</h2>
          <p>How we turn your casual visitors into raving fans.</p>
        </div>

        <div className="horizontal-scroll-window">
          <motion.div style={{ x }} className="horizontal-cards-track">
            {cards.map((card, index) => (
              <div key={card.title + index} className="horizontal-card-wrapper">
                <div className="horizontal-card glass-panel">
                  <div className={`horizontal-card-icon icon-${card.color}`}>
                    {card.icon}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HorizontalScroll;
