'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ClientWrapper from './ClientWrapper'

const About = () => {
  return (
    <ClientWrapper>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div 
                className="h-[500px] rounded-lg overflow-hidden"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2024, our coffee journey began with a simple passion for exceptional coffee. 
                We source the finest beans from sustainable farms around the world, ensuring every cup 
                tells a story of quality and craftsmanship.
              </p>
              <p className="text-gray-600 mb-8">
                Our mission is to create memorable coffee experiences while supporting local communities 
                and promoting sustainable practices in the coffee industry.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-3xl font-serif text-primary mb-2">100+</h3>
                  <p className="text-gray-600">Coffee Varieties</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-serif text-primary mb-2">50+</h3>
                  <p className="text-gray-600">Global Partners</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ClientWrapper>
  )
}

export default About 