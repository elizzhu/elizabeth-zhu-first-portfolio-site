'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// Orb positions
const orbPositions = [
  { x: 0.05, y: 0.25 },
  { x: 0.10, y: 0.75 },
  { x: 0.85, y: 0.85 },
  { x: 0.90, y: 0.55 },
  { x: 0.50, y: 0.80 },
]

export default function Hero() {

  return (
    <section className="relative min-h-screen bg-[#1A1A1A] overflow-hidden">
      {/* Profile image */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[55%] z-[1]">
        <Image 
          src="/images/profile.jpg" 
          alt="Elizabeth Zhu" 
          fill 
          className="object-cover" 
          style={{ objectPosition: 'center 25%' }}
          priority 
        />
        {/* Smooth gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" style={{ width: '70%' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1A1A1A]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-[#1A1A1A]/40 to-transparent" />
      </div>

      {/* Glowing orbs */}
      <div className="hidden lg:block absolute inset-0 z-[2] pointer-events-none">
        {orbPositions.map((pos, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${pos.x * 100}%`,
              top: `${pos.y * 100}%`,
            }}
            animate={{
              y: [0, -20 + index * 5, 0],
              x: [0, 10 - index * 3, 0],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div
              style={{
                width: index === 2 ? '450px' : index === 4 ? '350px' : '400px',
                height: index === 2 ? '450px' : index === 4 ? '350px' : '400px',
                background: index === 0 ? 'radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, transparent 70%)' :
                           index === 1 ? 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, transparent 70%)' :
                           index === 2 ? 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)' :
                           index === 3 ? 'radial-gradient(circle, rgba(250, 204, 21, 0.3) 0%, transparent 70%)' :
                                        'radial-gradient(circle, rgba(20, 184, 166, 0.35) 0%, transparent 70%)',
                filter: 'blur(60px)',
                borderRadius: '50%',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center px-6 lg:px-[100px]">
        <div className="max-w-[600px]">
          {/* Name */}
          <motion.h1 
            className="font-serif text-white text-[60px] lg:text-[80px] leading-[0.95] mb-8 uppercase tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elizabeth<br />Zhu
          </motion.h1>
          
          {/* Tagline */}
          <motion.p 
            className="font-sans text-[#CDCDCD] text-[18px] lg:text-[22px] leading-relaxed mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Senior Product Designer at Meta
          </motion.p>
          
          <motion.p 
            className="font-sans text-[#CDCDCD] text-[18px] lg:text-[22px] leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I design new products—and evolve them through experimentation—across B2B, e-commerce, and consumer experiences on mobile, web, and XR.
          </motion.p>
        </div>
      </div>

      {/* LinkedIn footer */}
      <a 
        href="https://www.linkedin.com/in/elizabethzhu1/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:block absolute bottom-[60px] left-[100px] z-10 font-sans text-[#CDCDCD] hover:text-white transition-colors text-base"
      >
        LinkedIn →
      </a>

      {/* Mobile content */}
      <div className="lg:hidden flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col justify-center px-6 py-20">
          <motion.h1 
            className="font-serif text-white text-[48px] leading-[0.95] mb-6 uppercase tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elizabeth<br />Zhu
          </motion.h1>
          
          <motion.p 
            className="font-sans text-[#CDCDCD] text-[16px] leading-relaxed mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Senior Product Designer at Meta
          </motion.p>
          
          <motion.p 
            className="font-sans text-[#CDCDCD] text-[16px] leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I design new products—and evolve them through experimentation—across B2B, e-commerce, and consumer experiences on mobile, web, and XR.
          </motion.p>
          
          <motion.a 
            href="https://www.linkedin.com/in/elizabethzhu1/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[#CDCDCD] hover:text-white transition-colors text-sm mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            LinkedIn →
          </motion.a>
        </div>
        
        <div className="relative h-[350px]">
          <Image 
            src="/images/profile.jpg" 
            alt="Elizabeth Zhu" 
            fill 
            className="object-cover object-top" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
