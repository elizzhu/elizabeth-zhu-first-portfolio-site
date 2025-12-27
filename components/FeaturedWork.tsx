'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

const projects = [
  {
    logo: '/images/company-logos/meta.png',
    logoAlt: 'Meta',
    logoWidth: 115,
    logoHeight: 50,
    title: '3D Movies in Horizon TV',
    year: '2025',
    role: 'VR/AR | Lead Designer',
    opportunity: 'Expand the Horizon+ subscription program beyond games into immersive 3D movies, requiring new ways for users to discover content and subscribe.',
    solution: 'Integrate Horizon+ into the Horizon TV app, enabling users to subscribe to Horizon+ and access subscription content directly from Horizon TV.',
    roleDescription: 'Lead designer driving cross-surface vision and execution across Horizon+, Horizon TV, Purchase, and Store teams.',
    image: '/images/projects/project-bg.jpg',
    video: '/videos/horizon-demo.mp4',
  },
  {
    logo: '/images/company-logos/square-logo.png',
    logoAlt: 'Square',
    logoWidth: 96,
    logoHeight: 28,
    title: 'Order Online',
    year: '2024',
    role: 'Lead designer',
    opportunity: 'New food & beverage sellers struggled to get online quickly, often blocked by complex setup, unclear requirements, and legacy Square Online flows.',
    solution: 'Designed a new 0→1 Order Online experience that helps sellers publish a fast, free ordering site in minutes, with clear paths to advanced features as their business grows.',
    roleDescription: 'Lead product designer for Order Online—owning end-to-end experience, from seller onboarding to ordering, upgrades, and platform integration.',
    image: '/images/projects/project-bg.jpg',
    video: undefined,
  },
  {
    logo: '/images/company-logos/shopify.png',
    logoAlt: 'Shopify',
    logoWidth: 99,
    logoHeight: 33,
    title: 'Signup Revamped',
    year: '2025',
    role: 'Lead designer',
    opportunity: 'New Shopify users frequently dropped off during signup, resulting in significant churn before reaching the admin.',
    solution: 'Redesigned the web and mobile signup experience to reduce friction, personalize onboarding, and improve conversion.',
    roleDescription: 'Lead designer for Shopify Signup (Web & Mobile), driving strategy, A/B test experimentation, user research and execution.',
    image: '/images/projects/signup-revamped-bg.png',
    video: undefined,
  },
  {
    logo: '/images/company-logos/shopify.png',
    logoAlt: 'Shopify',
    logoWidth: 99,
    logoHeight: 33,
    title: 'Compass Mobile',
    year: '2025',
    role: 'Lead designer',
    opportunity: 'New Shopify users frequently dropped off during signup, resulting in significant churn before reaching the admin.',
    solution: 'Redesigned the web and mobile signup experience to reduce friction, personalize onboarding, and improve conversion.',
    roleDescription: 'Lead designer for Shopify Signup (Web & Mobile), driving strategy, A/B test experimentation, user research and execution.',
    image: '/images/projects/project-bg.jpg',
    video: undefined,
  },
]

// Project text content component
function ProjectText({ project }: { project: typeof projects[0] }) {
  return (
    <div className="flex flex-col gap-8 lg:gap-16">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="relative h-[35px] mb-2" style={{ width: project.logoWidth }}>
          <Image
            src={project.logo}
            alt={project.logoAlt}
            width={project.logoWidth}
            height={project.logoHeight}
            className="object-contain object-left"
          />
        </div>
        <h3 className="font-sans font-semibold text-text-dark text-xl lg:text-[28px]">
          {project.title}
        </h3>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-6 lg:gap-8">
        <div>
          <p className="font-sans font-semibold text-text-dark-alt text-sm lg:text-base mb-1">
            Opportunity
          </p>
          <p className="font-sans font-medium text-text-dark-alt text-sm lg:text-base leading-relaxed">
            {project.opportunity}
          </p>
        </div>
        <div>
          <p className="font-sans font-semibold text-text-dark-alt text-sm lg:text-base mb-1">
            Solution
          </p>
          <p className="font-sans font-medium text-text-dark-alt text-sm lg:text-base leading-relaxed">
            {project.solution}
          </p>
        </div>
        <div>
          <p className="font-sans font-semibold text-text-dark-alt text-sm lg:text-base mb-1">
            Role
          </p>
          <p className="font-sans font-medium text-text-dark-alt text-sm lg:text-base leading-relaxed">
            {project.roleDescription}
          </p>
        </div>
      </div>
    </div>
  )
}

// Project image component
function ProjectImage({ project }: { project: typeof projects[0] }) {
  return (
    <div className="relative w-full h-full rounded-[16px] lg:rounded-[24px] overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Video PiP overlay */}
      {project.video && (
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] rounded-lg shadow-2xl z-10"
        />
      )}
    </div>
  )
}

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isHoveringProject, setIsHoveringProject] = useState(false)
  
  // Custom cursor position
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [cursorX, cursorY])
  
  // Track scroll through the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Header transition: "Experience" -> "Projects" (immediate crossfade)
  const experienceHeaderOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0])
  const featuredWorkHeaderOpacity = useTransform(scrollYProgress, [0.02, 0.06], [0, 1])

  // Text transitions - fade in/out for each project (4 projects)
  // Project 1 visible immediately
  const text1Opacity = useTransform(scrollYProgress, [0, 0.02, 0.18, 0.24], [1, 1, 1, 0])
  const text2Opacity = useTransform(scrollYProgress, [0.22, 0.28, 0.42, 0.48], [0, 1, 1, 0])
  const text3Opacity = useTransform(scrollYProgress, [0.46, 0.52, 0.66, 0.72], [0, 1, 1, 0])
  const text4Opacity = useTransform(scrollYProgress, [0.70, 0.76, 0.95], [0, 1, 1])

  // Image scroll positions - scroll up from below into view, then out the top
  // Image 1: visible immediately
  const image1Y = useTransform(scrollYProgress, [0, 0.18, 0.26], ['0%', '0%', '-100%'])
  const image1Opacity = useTransform(scrollYProgress, [0, 0.02, 0.20, 0.26], [1, 1, 1, 0])
  
  // Image 2
  const image2Y = useTransform(scrollYProgress, [0.22, 0.30, 0.42, 0.50], ['100%', '0%', '0%', '-100%'])
  const image2Opacity = useTransform(scrollYProgress, [0.22, 0.28, 0.44, 0.50], [0, 1, 1, 0])
  
  // Image 3
  const image3Y = useTransform(scrollYProgress, [0.46, 0.54, 0.66, 0.74], ['100%', '0%', '0%', '-100%'])
  const image3Opacity = useTransform(scrollYProgress, [0.46, 0.52, 0.68, 0.74], [0, 1, 1, 0])
  
  // Image 4: enters and stays
  const image4Y = useTransform(scrollYProgress, [0.70, 0.80], ['100%', '0%'])
  const image4Opacity = useTransform(scrollYProgress, [0.70, 0.78], [0, 1])

  return (
    <section ref={sectionRef} className="relative h-[600vh]">
      {/* Custom cursor for project hover - morphs between dot and pill */}
      <motion.div
        className="fixed pointer-events-none"
        style={{
          left: springX,
          top: springY,
          zIndex: 99999,
        }}
      >
        {/* Pill cursor with text */}
        <motion.div
          className="bg-[#1a1a1a] text-white font-sans font-medium text-sm rounded-full whitespace-nowrap tracking-wider shadow-lg overflow-hidden flex items-center justify-center"
          initial={false}
          animate={{
            width: isHoveringProject ? 'auto' : 12,
            height: isHoveringProject ? 'auto' : 12,
            padding: isHoveringProject ? '12px 20px' : '0px',
            x: isHoveringProject ? 8 : -6,
            y: isHoveringProject ? 8 : -6,
            boxShadow: isHoveringProject 
              ? '0 10px 40px rgba(0,0,0,0.3)' 
              : '0 0 10px #B4823C, 0 0 20px #B4823C, 0 0 30px rgba(180, 130, 60, 0.5)',
            background: isHoveringProject ? '#1a1a1a' : '#F1F1F1',
          }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.span
            animate={{
              opacity: isHoveringProject ? 1 : 0,
              scale: isHoveringProject ? 1 : 0,
            }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            REACH OUT FOR CASE STUDY
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Sticky container - stays fixed while scrolling through section */}
      <div 
        className="sticky top-0 h-screen overflow-hidden bg-background"
        onMouseEnter={() => setIsHoveringProject(true)}
        onMouseLeave={() => setIsHoveringProject(false)}
      >
        {/* Header - fixed at top, transitions from "Resume" to "Work" */}
        <div className="absolute top-0 left-0 right-0 pt-28 px-6 lg:px-[100px] z-10">
          <div className="relative h-[80px]">
            {/* Resume header - fades out */}
            <motion.h2 
              className="font-serif text-[60px] text-text-dark absolute left-0 top-0 leading-[1.1]"
              style={{ opacity: experienceHeaderOpacity }}
            >
              Resume
            </motion.h2>
            
            {/* Work header - fades in */}
            <motion.h2 
              className="font-serif text-[60px] text-text-dark absolute left-0 top-0 leading-[1.1]"
              style={{ opacity: featuredWorkHeaderOpacity }}
            >
              Work
            </motion.h2>
          </div>
        </div>

        {/* Projects content - positioned at bottom like Hero's Experience section */}
        <div className="absolute bottom-[97px] left-0 right-0 px-6 lg:px-[100px]">
          {/* Content area - split into fixed left text and scrolling right images */}
          <div className="flex gap-[84px] items-end">
            
            {/* Left side - Fixed text area with transitions */}
            <div className="w-[436px] flex-shrink-0 relative h-[420px]">
              {/* Project 1 text */}
              <motion.div 
                className="absolute inset-0"
                style={{ opacity: text1Opacity }}
              >
                <ProjectText project={projects[0]} />
              </motion.div>
              
              {/* Project 2 text */}
              <motion.div 
                className="absolute inset-0"
                style={{ opacity: text2Opacity }}
              >
                <ProjectText project={projects[1]} />
              </motion.div>
              
              {/* Project 3 text */}
              <motion.div 
                className="absolute inset-0"
                style={{ opacity: text3Opacity }}
              >
                <ProjectText project={projects[2]} />
              </motion.div>
              
              {/* Project 4 text */}
              <motion.div 
                className="absolute inset-0"
                style={{ opacity: text4Opacity }}
              >
                <ProjectText project={projects[3]} />
              </motion.div>
            </div>

            {/* Right side - Scrolling images */}
            <div className="flex-1 relative h-[500px]">
              {/* Image 1 */}
              <motion.div 
                className="absolute inset-0"
                style={{ y: image1Y, opacity: image1Opacity }}
              >
                <ProjectImage project={projects[0]} />
              </motion.div>
              
              {/* Image 2 */}
              <motion.div 
                className="absolute inset-0"
                style={{ y: image2Y, opacity: image2Opacity }}
              >
                <ProjectImage project={projects[1]} />
              </motion.div>
              
              {/* Image 3 */}
              <motion.div 
                className="absolute inset-0"
                style={{ y: image3Y, opacity: image3Opacity }}
              >
                <ProjectImage project={projects[2]} />
              </motion.div>

              {/* Image 4 */}
              <motion.div 
                className="absolute inset-0"
                style={{ y: image4Y, opacity: image4Opacity }}
              >
                <ProjectImage project={projects[3]} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
