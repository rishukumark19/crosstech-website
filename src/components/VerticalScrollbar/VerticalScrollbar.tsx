/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect, useCallback } from 'react';
import './VerticalScrollbar.scss';

interface SectionData {
  id: string;
  title: string;
  snippet: string;
  element: Element;
  container: Element;
}

const VerticalScrollbar: React.FC = () => {
  const [sections, setSections] = useState<SectionData[]>([]);
  const [activeSectionIndex, setActiveSectionIndex] = useState(-1);
  const [sectionProgress, setSectionProgress] = useState<number[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const findSections = useCallback(() => {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;
    
    // Include sections with h2, explicitly marked sections, and footer
    const headings = Array.from(document.querySelectorAll('main section h2, main section h1, main [data-section], footer'));
    
    const seenContainers = new Set();
    const sectionData = headings
      .map((heading, index) => {
        const title = heading.tagName.toLowerCase() === 'footer' 
          ? 'Footer' 
          : (heading.getAttribute('data-section') || heading.textContent || '');
          
        if (!title || title.length > 50) return null;

        const id = heading.id || `nav-section-${index}`;
        if (!heading.id) heading.id = id;

        const container = heading.tagName.toLowerCase() === 'footer' 
          ? heading 
          : (heading.closest('section') || heading.parentElement);
        
        if (seenContainers.has(container)) return null;
        seenContainers.add(container);

        let snippet = "";
        if (container) {
          const firstP = container.querySelector('p');
          if (firstP && firstP.textContent) snippet = firstP.textContent.split('.')[0] + '.';
        }

        return {
          id,
          title,
          snippet,
          element: heading,
          container: container || heading
        };
      })
      .filter(Boolean) as SectionData[];
      
    const sortedSections = sectionData.sort((a, b) => {
        const aTop = a.container.getBoundingClientRect().top;
        const bTop = b.container.getBoundingClientRect().top;
        return aTop - bTop;
    });

    setSections(sortedSections);
    setSectionProgress(new Array(sortedSections.length).fill(0));
  }, []);

  const handleScroll = useCallback(() => {
    if (sections.length === 0) return;

    const viewportHeight = window.innerHeight;
    let triggerPoint = viewportHeight * 0.4;

    if (sections.length > 1) {
      const s0TopAbsolute = sections[0].container.getBoundingClientRect().top + window.scrollY;
      const s1TopAbsolute = sections[1].container.getBoundingClientRect().top + window.scrollY;
      const firstGap = s1TopAbsolute - s0TopAbsolute;
      
      if (firstGap > 0 && firstGap < triggerPoint * 1.5) {
        triggerPoint = Math.max(firstGap * 0.6, 120);
      }
    }

    let newActiveIndex = -1;
    const nextProgress = new Array(sections.length).fill(0);

    sections.forEach((section, index) => {
      const containerRect = section.container.getBoundingClientRect();
      const sectionTop = containerRect.top;
      
      let nextSectionTop;
      if (index < sections.length - 1) {
        nextSectionTop = sections[index + 1].container.getBoundingClientRect().top;
      } else {
        nextSectionTop = document.documentElement.getBoundingClientRect().bottom;
      }
      
      const effectiveHeight = Math.max(nextSectionTop - sectionTop, 1);

      if (sectionTop <= triggerPoint) {
        newActiveIndex = index;
      }

      let progress = 0;
      if (sectionTop <= triggerPoint) {
        const scrolledPastTrigger = triggerPoint - sectionTop;
        progress = Math.min(Math.max(scrolledPastTrigger / effectiveHeight, 0), 1);
      }
      
      nextProgress[index] = Math.round(progress * 1000) / 1000;
    });

    if (newActiveIndex === -1 && sections.length > 0) {
      newActiveIndex = 0;
    }

    const isAtBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;
    if (isAtBottom && sections.length > 0) {
      newActiveIndex = sections.length - 1;
      nextProgress[sections.length - 1] = 1;
    }

    setSectionProgress(prevProgress => {
      if (prevProgress.length !== nextProgress.length) return nextProgress;
      let hasChanged = false;
      for (let i = 0; i < prevProgress.length; i++) {
        if (prevProgress[i] !== nextProgress[i]) {
          hasChanged = true;
          break;
        }
      }
      return hasChanged ? nextProgress : prevProgress;
    });

    setActiveSectionIndex(prev => {
      if (prev !== newActiveIndex) return newActiveIndex;
      return prev;
    });
  }, [sections]);

  useEffect(() => {
    findSections();
    const observer = new MutationObserver(() => {
      findSections();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [findSections]);

  useEffect(() => {
    if (sections.length === 0) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sections, handleScroll]);

  const scrollToSection = (section: SectionData) => {
    const element = section.container || document.getElementById(section.id);
    if (element) {
      if (element.tagName && element.tagName.toLowerCase() === 'footer') {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        return;
      }
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (sections.length === 0) return null;

  return (
    <div className={`vertical-scrollbar pill-track ${isMounted ? 'mounted' : ''}`}>
      <div className="pills-container">
        {sections.map((section, index) => {
          const isActive = activeSectionIndex === index;
          const progress = sectionProgress[index] || 0;
          
          return (
            <div 
              key={section.id}
              className={`pill-wrapper ${isActive ? 'active' : ''}`}
              onClick={() => scrollToSection(section)}
            >
              <div className="preview-card">
                <div className="preview-content">
                  <span className="preview-label">Section {index + 1}</span>
                  <h4 className="preview-title">{section.title}</h4>
                  {section.snippet && <p className="preview-snippet">{section.snippet}</p>}
                </div>
              </div>

              <div className="pill-content">
                <div className="pill-shape">
                  <div 
                    className="pill-progress" 
                    style={{ 
                      transform: isActive ? `scaleY(${progress})` : 'scaleY(0)'
                    }} 
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VerticalScrollbar;
