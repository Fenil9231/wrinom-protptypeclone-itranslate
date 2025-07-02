'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  } as const;

  return (
    <div className="homepage-header-wrapper relative min-h-screen overflow-hidden">
      {/* Background - Wind Turbine Landscape */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Sky Gradient */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 30%, #FF8C00 60%, #8B4513 100%)'
          }}
        ></div>
        
        {/* Hills/Landscape */}
        <div className="absolute bottom-0 w-full h-1/2">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1920 400" preserveAspectRatio="none">
            <path d="M0,400 L0,300 Q200,250 400,280 T800,260 Q1200,240 1600,270 T1920,250 L1920,400 Z" fill="#2D5016" opacity="0.9"/>
            <path d="M0,400 L0,350 Q300,320 600,340 T1200,320 Q1500,310 1920,330 L1920,400 Z" fill="#3A5F1B" opacity="0.8"/>
          </svg>
        </div>
        
        {/* Wind Turbines */}
        <div className="absolute inset-0 w-full h-full">
          {/* Turbine 1 */}
          <div className="absolute" style={{ left: '15%', bottom: '35%', transform: 'scale(0.8)' }}>
            <div className="relative">
              <div className="w-2 h-64 bg-white mx-auto"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="relative w-4 h-4 bg-white rounded-full">
                  <div className="absolute top-1/2 left-1/2 w-16 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-0 origin-center"></div>
                  <div className="absolute top-1/2 left-1/2 w-16 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-120 origin-center"></div>
                  <div className="absolute top-1/2 left-1/2 w-16 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-240 origin-center"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Turbine 2 */}
          <div className="absolute" style={{ left: '35%', bottom: '40%', transform: 'scale(1.1)' }}>
            <div className="relative">
              <div className="w-2 h-72 bg-white mx-auto"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="relative w-4 h-4 bg-white rounded-full">
                  <div className="absolute top-1/2 left-1/2 w-20 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-45 origin-center"></div>
                  <div className="absolute top-1/2 left-1/2 w-20 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-165 origin-center"></div>
                  <div className="absolute top-1/2 left-1/2 w-20 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-285 origin-center"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Turbine 3 */}
          <div className="absolute" style={{ left: '55%', bottom: '38%', transform: 'scale(0.9)' }}>
            <div className="relative">
              <div className="w-2 h-68 bg-white mx-auto"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="relative w-4 h-4 bg-white rounded-full">
                  <div className="absolute top-1/2 left-1/2 w-18 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-90 origin-center"></div>
                  <div className="absolute top-1/2 left-1/2 w-18 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-210 origin-center"></div>
                  <div className="absolute top-1/2 left-1/2 w-18 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-330 origin-center"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Turbine 4 */}
          <div className="absolute" style={{ left: '75%', bottom: '42%', transform: 'scale(1.2)' }}>
            <div className="relative">
              <div className="w-3 h-80 bg-white mx-auto"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3">
                <div className="relative w-5 h-5 bg-white rounded-full">
                  <div className="absolute top-1/2 left-1/2 w-24 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-135 origin-center"></div>
                  <div className="absolute top-1/2 left-1/2 w-24 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-255 origin-center"></div>
                  <div className="absolute top-1/2 left-1/2 w-24 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-15 origin-center"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Turbine 5 */}
          <div className="absolute" style={{ left: '90%', bottom: '36%', transform: 'scale(0.7)' }}>
            <div className="relative">
              <div className="w-2 h-60 bg-white mx-auto"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="relative w-3 h-3 bg-white rounded-full">
                  <div className="absolute top-1/2 left-1/2 w-14 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-180 origin-center"></div>
                  <div className="absolute top-1/2 left-1/2 w-14 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-300 origin-center"></div>
                  <div className="absolute top-1/2 left-1/2 w-14 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-60 origin-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="homepage-header-content flex items-center justify-start min-h-screen relative z-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
              variants={itemVariants}
            >
              We&apos;re a global software engineering company making success stories for over 25 years
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;