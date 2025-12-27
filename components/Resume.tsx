'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const workExperiences = [
  { logo: '/images/company-logos/meta.png', logoAlt: 'Meta', logoWidth: 86, logoHeight: 20, roles: ['Senior Product Designer'], dates: '2025 - Now' },
  { logo: '/images/company-logos/square-logo.png', logoAlt: 'Square', logoWidth: 96, logoHeight: 28, roles: ['Staff Product Designer', 'Senior Product Designer'], dates: '2024 - 2025' },
  { logo: '/images/company-logos/dropbox-logo.png', logoAlt: 'Dropbox', logoWidth: 120, logoHeight: 31, roles: ['Senior Product Designer'], dates: '2022 - 2024' },
  { logo: '/images/company-logos/shopify-logo.png', logoAlt: 'Shopify', logoWidth: 99, logoHeight: 33, roles: ['Senior Product Designer', 'Product Designer'], dates: '2018 - 2022' },
]

const educationItems = [
  { title: 'BrainStation', subtitle: 'Part-Time UX Instructor', dates: '2023 - 2025' },
  { title: 'York University', subtitle: 'Graduate, Bachelor of Design', dates: '2014 - 2018' },
]

export default function Resume() {
  return (
    <section className="bg-[#F7F7F7] py-20 lg:py-32">
      <div className="px-6 lg:px-[100px]">
        {/* Header */}
        <motion.h2 
          className="font-serif text-[#1a1a1a] text-[48px] lg:text-[60px] leading-[1.1] mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Work Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#888] font-medium mb-8">Work</h3>
            <div className="space-y-8">
              {workExperiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative flex-shrink-0" style={{ width: exp.logoWidth, height: exp.logoHeight }}>
                    <Image 
                      src={exp.logo} 
                      alt={exp.logoAlt} 
                      width={exp.logoWidth} 
                      height={exp.logoHeight} 
                      className="object-contain object-left" 
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-sans text-[#888] text-sm">{exp.dates}</span>
                    </div>
                    <div className="font-sans text-[#1a1b1c] text-[15px] leading-[1.7]">
                      {exp.roles.map((role, i) => (<p key={i}>{role}</p>))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#888] font-medium mb-8">Education</h3>
            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="font-sans font-semibold text-[#1a1a1a] text-base">{item.title}</p>
                  <p className="font-sans text-[#1a1b1c] text-[15px] leading-[1.7]">{item.subtitle}</p>
                  <p className="font-sans text-[#888] text-sm mt-1">{item.dates}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#ddd] rounded-full text-[#1a1a1a] text-sm hover:bg-[#eee] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}

