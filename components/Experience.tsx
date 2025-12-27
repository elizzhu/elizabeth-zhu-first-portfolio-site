'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn } from './animations'

const workExperiences = [
  {
    logo: '/images/company-logos/meta.png',
    logoAlt: 'Meta',
    logoWidth: 86,
    logoHeight: 18,
    roles: ['Senior Product Designer'],
    dates: '2025 - Present',
  },
  {
    logo: '/images/company-logos/square-logo.png',
    logoAlt: 'Square',
    logoWidth: 96,
    logoHeight: 28,
    roles: ['Staff Product Designer', 'Senior Product Designer'],
    dates: '2025 - Present',
  },
  {
    logo: '/images/company-logos/dropbox-logo.png',
    logoAlt: 'Dropbox',
    logoWidth: 106,
    logoHeight: 27,
    roles: ['Senior Product Designer'],
    dates: '2025 - Present',
  },
  {
    logo: '/images/company-logos/shopify-logo.png',
    logoAlt: 'Shopify',
    logoWidth: 99,
    logoHeight: 33,
    roles: ['Senior Product Designer', 'Product Designer', 'UX Design Intern'],
    dates: '2025 - Present',
  },
  {
    logo: '/images/company-logos/brainstation-logo.png',
    logoAlt: 'BrainStation',
    logoWidth: 147,
    logoHeight: 31,
    roles: ['UX Instructor'],
    dates: '2025 - Present',
  },
]

const communityItems = [
  {
    title: 'Toronto Tech Morning',
    description: 'Panelist, "Careers & Coffee"',
  },
  {
    title: 'Experience Design Summit',
    description: 'Speaker, "Tying Design to Business Outcomes"',
  },
  {
    title: 'UX Laurier Workshop Series',
    description: 'Speaker, "Unlocking the Business Power of Design"',
  },
  {
    title: 'Technovation Girls',
    description: 'Speaker, "Minimum Viable Product"',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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

export default function Experience() {
  return (
    <section className="bg-background py-16 lg:pt-16 lg:pb-32">
      <div className="px-6 lg:px-[100px]">
        <FadeIn>
          <h2 className="font-serif font-medium text-[#1a1a1a] text-[40px] lg:text-[60px] leading-none mb-16 lg:mb-[180px]">
            Experience
          </h2>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-[120px]">
          {/* Left Column: Work */}
          <div className="w-full lg:w-[400px]">
            <FadeIn delay={0.1}>
              <h3 className="font-sans font-semibold text-[#1a1a1a] text-[28px] mb-10">
                Work
              </h3>
            </FadeIn>

            <motion.div 
              className="flex flex-col gap-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {workExperiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="flex justify-between items-start gap-5"
                  variants={itemVariants}
                >
                  <div className="flex flex-col gap-2 flex-1">
                    <div 
                      className="relative"
                      style={{ 
                        width: exp.logoWidth, 
                        height: exp.logoHeight 
                      }}
                    >
                      <Image
                        src={exp.logo}
                        alt={exp.logoAlt}
                        width={exp.logoWidth}
                        height={exp.logoHeight}
                        className="object-contain object-left"
                      />
                    </div>
                    <div className="font-sans font-medium text-[#1a1b1c] text-base">
                      {exp.roles.map((role, i) => (
                        <p key={i} className={i < exp.roles.length - 1 ? 'mb-0' : ''}>
                          {role}
                        </p>
                      ))}
                    </div>
                  </div>
                  <p className="font-sans font-medium text-[#1a1b1c] text-base whitespace-nowrap">
                    {exp.dates}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Education & Community */}
          <div className="w-full lg:w-[436px] flex flex-col gap-[60px]">
            {/* Education */}
            <div>
              <FadeIn delay={0.2}>
                <h3 className="font-sans font-semibold text-[#1a1a1a] text-[28px] mb-5">
                  Education
                </h3>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="flex flex-col gap-1">
                  <p className="font-sans font-semibold text-[#1a1a1a] text-base">
                    Bachelor of Design, GPA 3.9
                  </p>
                  <p className="font-sans font-medium text-[#1a1b1c] text-base">
                    York University & Sheridan College
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Community */}
            <div>
              <FadeIn delay={0.3}>
                <h3 className="font-sans font-semibold text-[#1a1a1a] text-[28px] mb-5">
                  Community
                </h3>
              </FadeIn>

              <motion.div 
                className="flex flex-col gap-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                {communityItems.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col gap-1"
                    variants={itemVariants}
                  >
                    <p className="font-sans font-semibold text-[#1a1a1a] text-base">
                      {item.title}
                    </p>
                    <p className="font-sans font-medium text-[#1a1b1c] text-base">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
