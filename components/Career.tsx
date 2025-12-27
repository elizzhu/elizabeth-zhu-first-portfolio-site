'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn } from './animations'

const experiences = [
  {
    logo: '/images/company-logos/meta.svg',
    logoAlt: 'Meta',
    logoWidth: 115,
    logoHeight: 50,
    roles: ['Senior Product Designer'],
    dates: '2025 - Present',
  },
  {
    logo: '/images/company-logos/faire.png',
    logoAlt: 'Faire',
    logoWidth: 96,
    logoHeight: 28,
    roles: ['Staff Product Designer', 'Senior Product Designer'],
    dates: '2023 - 2025',
  },
  {
    logo: '/images/company-logos/rbc.png',
    logoAlt: 'RBC',
    logoWidth: 106,
    logoHeight: 27,
    roles: ['Senior Product Designer'],
    dates: '2022 - 2023',
  },
  {
    logo: '/images/company-logos/shopify.png',
    logoAlt: 'Shopify',
    logoWidth: 99,
    logoHeight: 33,
    roles: ['Senior Product Designer', 'Product Designer', 'UX Design Intern'],
    dates: '2018 - 2022',
  },
  {
    logo: '/images/company-logos/brainstation.png',
    logoAlt: 'BrainStation',
    logoWidth: 147,
    logoHeight: 31,
    roles: ['UX Instructor'],
    dates: '2021 - 2022',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
}

export default function Career() {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="px-6 lg:px-[100px]">
        <FadeIn>
          <h2 className="section-heading mb-12 lg:mb-[152px]">Career</h2>
        </FadeIn>

        {/* Experience */}
        <div className="w-full lg:w-[500px]">
          <FadeIn delay={0.1}>
            <h3 className="font-sans font-semibold text-text-dark text-2xl lg:text-[28px] mb-8 lg:mb-10">
              Experience
            </h3>
          </FadeIn>

          <motion.div 
            className="flex flex-col gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="flex justify-between items-start gap-5"
                variants={itemVariants}
              >
                <div className="flex flex-col gap-2">
                  <div className="relative h-[28px] lg:h-[33px]" style={{ width: exp.logoWidth }}>
                    <Image
                      src={exp.logo}
                      alt={exp.logoAlt}
                      width={exp.logoWidth}
                      height={exp.logoHeight}
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="font-sans font-medium text-text-dark-alt text-sm lg:text-base">
                    {exp.roles.map((role, i) => (
                      <p key={i} className={i < exp.roles.length - 1 ? 'mb-0' : ''}>
                        {role}
                      </p>
                    ))}
                  </div>
                </div>
                <p className="font-sans font-medium text-text-dark-alt text-sm lg:text-base whitespace-nowrap">
                  {exp.dates}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
