'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'hero', name: 'Intro' },
  { id: 'resume', name: 'Resume' },
  { id: 'work', name: 'Work' },
  { id: 'contact', name: 'Contact' },
]

export default function ProgressBar() {
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Always visible
      setIsVisible(true)
      
      // Hero section is 300vh
      const heroSection = document.querySelector('section')
      const heroHeight = heroSection?.offsetHeight || windowHeight * 3
      
      const resumeEl = document.querySelector('section:nth-of-type(2)')
      const workEl = document.querySelector('section:nth-of-type(3)')
      const contactEl = document.querySelector('section:nth-of-type(4)')
      
      const resumeTop = resumeEl?.getBoundingClientRect().top ?? Infinity
      const workTop = workEl?.getBoundingClientRect().top ?? Infinity
      const contactTop = contactEl?.getBoundingClientRect().top ?? Infinity
      
      // Light mode when entering Resume section
      setIsLightMode(resumeTop < windowHeight * 0.8)
      
      // Determine active section
      if (contactTop < windowHeight * 0.5) {
        setActiveSection(3)
      } else if (workTop < windowHeight * 0.5) {
        setActiveSection(2)
      } else if (resumeTop < windowHeight * 0.5) {
        setActiveSection(1)
      } else {
        setActiveSection(0)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section')
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      className="hidden lg:block fixed top-8 left-[100px] z-[100]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -20 
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Liquid glass container */}
      <motion.div 
        className="flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500"
        animate={{
          background: isLightMode 
            ? 'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          border: isLightMode 
            ? '1px solid rgba(0,0,0,0.1)'
            : '1px solid rgba(255,255,255,0.15)',
          boxShadow: isLightMode
            ? '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)'
            : '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {sections.map((section, index) => {
          const isActive = index === activeSection
          const isPast = index < activeSection
          
          return (
            <div key={section.id} className="flex items-center">
              {/* Section button with dot and label */}
              <button
                onClick={() => scrollToSection(index)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 group"
                style={{
                  background: isActive 
                    ? isLightMode
                      ? 'linear-gradient(135deg, rgba(180,130,60,0.2) 0%, rgba(140,90,40,0.15) 100%)'
                      : 'linear-gradient(135deg, rgba(20,184,166,0.3) 0%, rgba(16,185,129,0.2) 100%)'
                    : 'transparent',
                }}
              >
                {/* Dot indicator */}
                <div 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? isLightMode
                        ? 'bg-amber-600 shadow-[0_0_8px_rgba(180,130,60,0.6)]'
                        : 'bg-teal-400 shadow-[0_0_8px_rgba(20,184,166,0.6)]' 
                      : isPast 
                        ? isLightMode
                          ? 'bg-amber-600/60'
                          : 'bg-teal-400/60' 
                        : isLightMode
                          ? 'bg-black/20 group-hover:bg-black/40'
                          : 'bg-white/30 group-hover:bg-white/50'
                  }`}
                />
                
                {/* Label */}
                <span 
                  className={`font-sans text-xs whitespace-nowrap transition-all duration-300 ${
                    isActive 
                      ? isLightMode
                        ? 'text-text-dark font-medium'
                        : 'text-white font-medium' 
                      : isPast
                        ? isLightMode
                          ? 'text-text-dark/60'
                          : 'text-white/60'
                        : isLightMode
                          ? 'text-text-dark/40 group-hover:text-text-dark/60'
                          : 'text-white/40 group-hover:text-white/60'
                  }`}
                >
                  {section.name}
                </span>
              </button>

              {/* Connector line (except for last item) */}
              {index < sections.length - 1 && (
                <div 
                  className={`w-4 h-[1px] transition-all duration-300 ${
                    isPast 
                      ? isLightMode
                        ? 'bg-amber-600/60'
                        : 'bg-teal-400/60' 
                      : isLightMode
                        ? 'bg-black/15'
                        : 'bg-white/20'
                  }`}
                />
              )}
            </div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
