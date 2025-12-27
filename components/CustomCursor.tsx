'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isLightSection, setIsLightSection] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springX = useSpring(cursorX, { stiffness: 300, damping: 25 })
  const springY = useSpring(cursorY, { stiffness: 300, damping: 25 })

  // Handle mounting and touch device detection
  useEffect(() => {
    setIsMounted(true)
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    if (!isMounted || isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleHoverDetection = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      setIsHovering(isClickable)
    }

    // Track scroll position to change cursor color
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 1.5
      setIsLightSection(window.scrollY > scrollThreshold)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousemove', handleHoverDetection)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousemove', handleHoverDetection)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMounted, isTouchDevice, cursorX, cursorY, isVisible])

  // Don't render until mounted or on touch devices
  if (!isMounted || isTouchDevice) return null

  return (
    <>
      {/* Glowing dot that follows cursor */}
      <motion.div
        className="fixed pointer-events-none z-[99999]"
        style={{
          left: springX,
          top: springY,
          x: '-50%',
          y: '-50%',
        }}
      >
        {/* Outer glow */}
        <motion.div
          className="absolute rounded-full"
          animate={{
            width: isHovering ? 50 : 30,
            height: isHovering ? 50 : 30,
            opacity: isVisible ? 0.6 : 0,
            background: isLightSection 
              ? 'radial-gradient(circle, rgba(180, 130, 60, 0.5) 0%, rgba(140, 90, 40, 0.3) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(20, 184, 166, 0.5) 0%, rgba(13, 148, 136, 0.3) 50%, transparent 70%)',
          }}
          style={{
            x: '-50%',
            y: '-50%',
            left: '50%',
            top: '50%',
            filter: 'blur(8px)',
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Core dot */}
        <motion.div
          className="rounded-full"
          animate={{
            width: isHovering ? 16 : 12,
            height: isHovering ? 16 : 12,
            opacity: isVisible ? 1 : 0,
            boxShadow: isLightSection
              ? '0 0 10px #B4823C, 0 0 20px #B4823C, 0 0 30px rgba(180, 130, 60, 0.5)'
              : '0 0 10px #14B8A6, 0 0 20px #14B8A6, 0 0 30px rgba(20, 184, 166, 0.5)',
          }}
          style={{
            background: '#fff',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </>
  )
}
