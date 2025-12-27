'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    logo: '/images/company-logos/meta.png',
    logoAlt: 'Meta',
    logoWidth: 80,
    logoHeight: 24,
    title: '3D Movies in Horizon TV',
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
    opportunity: 'New food & beverage sellers struggled to get online quickly, often blocked by complex setup, unclear requirements, and legacy Square Online flows.',
    solution: 'Designed a new 0→1 Order Online experience that helps sellers publish a fast, free ordering site in minutes, with clear paths to advanced features as their business grows.',
    roleDescription: 'Lead product designer for Order Online—owning end-to-end experience, from seller onboarding to ordering, upgrades, and platform integration.',
    image: '/images/projects/order-online-bg.png',
    video: '/videos/order-online-demo.mp4',
  },
  {
    logo: '/images/company-logos/shopify.png',
    logoAlt: 'Shopify',
    logoWidth: 99,
    logoHeight: 33,
    title: 'Signup Revamped',
    opportunity: 'New Shopify users frequently dropped off during signup, resulting in significant churn before reaching the admin.',
    solution: 'Redesigned the web and mobile signup experience to reduce friction, personalize onboarding, and improve conversion.',
    roleDescription: 'Lead designer for Shopify Signup (Web & Mobile), driving strategy, A/B test experimentation, user research and execution.',
    image: '/images/projects/signup-revamped-bg.png',
    video: '/videos/signup-revamped-demo.mp4',
  },
  {
    logo: '/images/company-logos/shopify.png',
    logoAlt: 'Shopify',
    logoWidth: 99,
    logoHeight: 33,
    title: 'Compass Mobile',
    opportunity: 'New Shopify users frequently dropped off during signup, resulting in significant churn before reaching the admin.',
    solution: 'Redesigned the web and mobile signup experience to reduce friction, personalize onboarding, and improve conversion.',
    roleDescription: 'Lead designer for Shopify Signup (Web & Mobile), driving strategy, A/B test experimentation, user research and execution.',
    image: '/images/projects/compass-mobile-bg.png',
    videos: ['/videos/compass-mobile-1.mp4', '/videos/compass-mobile-2.mp4', '/videos/compass-mobile-3.mp4'],
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  
  useEffect(() => {
    // Play videos when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              videoRef.current.currentTime = 0
              videoRef.current.play()
            }
            videoRefs.current.forEach((video) => {
              if (video) {
                video.currentTime = 0
                video.play()
              }
            })
          }
        })
      },
      { threshold: 0.3 }
    )
    
    const card = document.getElementById(`project-${index}`)
    if (card) observer.observe(card)
    
    return () => observer.disconnect()
  }, [index])

  return (
    <motion.div 
      id={`project-${index}`}
      className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      {/* Text content - always on left */}
      <div>
        {/* Logo */}
        <div className="relative mb-4" style={{ width: project.logoWidth, height: project.logoHeight }}>
          <Image
            src={project.logo}
            alt={project.logoAlt}
            width={project.logoWidth}
            height={project.logoHeight}
            className="object-contain object-left"
          />
        </div>
        
        {/* Title */}
        <h3 className="font-sans font-bold text-[#1a1a1a] text-[28px] lg:text-[36px] leading-tight mb-8">
          {project.title}
        </h3>
        
        {/* Opportunity */}
        <div className="mb-6">
          <p className="font-sans font-semibold text-[#1a1a1a] text-sm uppercase tracking-wide mb-2">Opportunity</p>
          <p className="font-sans text-[#1a1b1c] text-[15px] leading-[1.7]">{project.opportunity}</p>
        </div>
        
        {/* Solution */}
        <div className="mb-6">
          <p className="font-sans font-semibold text-[#1a1a1a] text-sm uppercase tracking-wide mb-2">Solution</p>
          <p className="font-sans text-[#1a1b1c] text-[15px] leading-[1.7]">{project.solution}</p>
        </div>
        
        {/* Role */}
        <div>
          <p className="font-sans font-semibold text-[#1a1a1a] text-sm uppercase tracking-wide mb-2">Role</p>
          <p className="font-sans text-[#1a1b1c] text-[15px] leading-[1.7]">{project.roleDescription}</p>
        </div>
      </div>

      {/* Image - always on right */}
      <div className="relative aspect-[4/3] rounded-[16px] lg:rounded-[24px] overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        
        {/* Single video */}
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] rounded-lg shadow-2xl z-10"
          />
        )}
        
        {/* Multiple videos - phone mockup style */}
        {project.videos && project.videos.length > 0 && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 lg:gap-5 px-6 z-10">
            {project.videos.map((videoSrc, i) => (
              <div 
                key={i} 
                className="relative w-[28%] aspect-[9/19] rounded-[16px] lg:rounded-[24px] overflow-hidden shadow-2xl bg-black border-[5px] lg:border-[7px] border-gray-800"
              >
                <video
                  ref={(el) => { videoRefs.current[i] = el }}
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Work() {
  return (
    <section className="bg-[#F7F7F7] py-20 lg:py-32">
      <div className="px-6 lg:px-[100px]">
        {/* Header */}
        <motion.h2 
          className="font-serif text-[#1a1a1a] text-[48px] lg:text-[60px] leading-[1.1] mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Work
        </motion.h2>

        {/* Projects */}
        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.p 
          className="mt-20 text-center text-[#888] text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Reach out for detailed case studies →
        </motion.p>
      </div>
    </section>
  )
}

