'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle, FiSearch, FiSettings, FiCode, FiShield, FiPlay } from 'react-icons/fi';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Analysis',
    description: 'We analyze your business needs, conduct stakeholder interviews, and evaluate your current IT environment to define project requirements and objectives.',
    icon: FiSearch,
    duration: '1-2 weeks',
    deliverables: ['Business requirements specification', 'Technical assessment report', 'Project roadmap']
  },
  {
    number: '02',
    title: 'Design & Architecture',
    description: 'Our solution architects design the technical blueprint while UX/UI designers create wireframes and prototypes for optimal user experience.',
    icon: FiSettings,
    duration: '2-4 weeks',
    deliverables: ['System architecture', 'UI/UX designs', 'Technical specifications']
  },
  {
    number: '03',
    title: 'Planning & Strategy',
    description: 'We assemble the development team, select methodologies, create detailed timelines, and establish risk management strategies.',
    icon: FiCheckCircle,
    duration: '1-2 weeks',
    deliverables: ['Project plan', 'Team allocation', 'Risk mitigation strategy']
  },
  {
    number: '04',
    title: 'Development',
    description: 'Our engineers build frontend and backend components, implement integrations, and conduct regular code reviews to ensure quality.',
    icon: FiCode,
    duration: '1-4 months',
    deliverables: ['Working software', 'Code documentation', 'Integration modules']
  },
  {
    number: '05',
    title: 'Quality Assurance',
    description: 'Comprehensive testing including functional, performance, security, and compatibility tests to ensure the solution meets all requirements.',
    icon: FiShield,
    duration: '2-4 weeks',
    deliverables: ['Test reports', 'Bug fixes', 'Performance optimization']
  },
  {
    number: '06',
    title: 'Deployment & Launch',
    description: 'We deploy the solution to your environment, conduct user training, and provide ongoing support to ensure smooth operations.',
    icon: FiPlay,
    duration: '1-2 weeks',
    deliverables: ['Live deployment', 'User training', 'Support documentation']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
} as const;

export default function Process() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Proven Development Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We follow a structured 6-step methodology to deliver exceptional software solutions 
            that meet your business objectives and exceed expectations.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection Line */}
          <div className="absolute left-8 top-20 bottom-20 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary hidden lg:block" />
          
          <div className="space-y-12">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={stepVariants}
                  className="relative"
                >
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                        {step.number}
                      </div>
                      <div className="absolute -top-2 -left-2 w-20 h-20 bg-primary/10 rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-border/10 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Main Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-foreground">
                                {step.title}
                              </h3>
                              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                                {step.duration}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            {step.description}
                          </p>

                          {/* Deliverables */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Key Deliverables:</h4>
                            <div className="flex flex-wrap gap-2">
                              {step.deliverables.map((deliverable, idx) => (
                                <span
                                  key={idx}
                                  className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full border"
                                >
                                  {deliverable}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Step Indicator */}
                        <div className="hidden lg:block text-right">
                          <div className="text-6xl font-black text-primary/5">
                            {step.number}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss your requirements and create a customized development roadmap 
              that aligns with your business goals and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                Get a Quote
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary/5 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}