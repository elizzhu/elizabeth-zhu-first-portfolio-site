'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('elizabethzhulim@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <section className="relative bg-[#1A1A1A] py-20 lg:py-32 overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orb 1 - top left, teal */}
        <motion.div 
          className="absolute"
          style={{ left: '5%', top: '20%' }}
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div style={{ 
            width: '350px', 
            height: '350px', 
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, transparent 70%)', 
            filter: 'blur(60px)' 
          }} />
        </motion.div>
        
        {/* Orb 2 - bottom left, blue */}
        <motion.div 
          className="absolute"
          style={{ left: '10%', bottom: '15%' }}
          animate={{ 
            y: [0, 12, 0],
            x: [0, -12, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <div style={{ 
            width: '300px', 
            height: '300px', 
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, transparent 70%)', 
            filter: 'blur(50px)' 
          }} />
        </motion.div>
        
        {/* Orb 3 - right side, green */}
        <motion.div 
          className="absolute"
          style={{ right: '15%', top: '40%' }}
          animate={{ 
            y: [0, 20, 0],
            x: [0, -8, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <div style={{ 
            width: '400px', 
            height: '400px', 
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)', 
            filter: 'blur(70px)' 
          }} />
        </motion.div>
        
        {/* Orb 4 - center bottom, yellow */}
        <motion.div 
          className="absolute"
          style={{ left: '40%', bottom: '10%' }}
          animate={{ 
            y: [0, -12, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <div style={{ 
            width: '280px', 
            height: '280px', 
            background: 'radial-gradient(circle, rgba(250, 204, 21, 0.3) 0%, transparent 70%)', 
            filter: 'blur(55px)' 
          }} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-[100px]">
        {/* Header */}
        <motion.h2 
          className="font-serif text-white text-[48px] lg:text-[60px] leading-[1.1] mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        {/* Links */}
        <div className="flex flex-col gap-4">
          {/* Email */}
          <motion.button
            onClick={handleCopyEmail}
            className="font-sans font-semibold text-[#CDCDCD] text-xl lg:text-[28px] text-left hover:text-white transition-colors w-fit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ x: 5 }}
          >
            {copied ? 'Copied!' : 'elizabethzhulim@gmail.com'}
          </motion.button>
          
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/elizabethzhulim/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-semibold text-[#CDCDCD] text-xl lg:text-[28px] hover:text-white transition-colors w-fit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ x: 5 }}
          >
            LinkedIn →
          </motion.a>
        </div>

        {/* Footer */}
        <motion.p 
          className="mt-20 lg:mt-32 font-sans text-[#666] text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Built with AI ✨
        </motion.p>
      </div>
    </section>
  )
}
