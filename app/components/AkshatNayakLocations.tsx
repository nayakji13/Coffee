'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ClientWrapper from './ClientWrapper'

const locations = [
  {
    id: 1,
    name: 'Downtown',
    address: '123 Main Street',
    hours: '7:00 AM - 8:00 PM',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    name: 'Westside',
    address: '456 West Avenue',
    hours: '7:00 AM - 9:00 PM',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  },
  {
    id: 3,
    name: 'Eastside',
    address: '789 East Boulevard',
    hours: '6:30 AM - 8:00 PM',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
]

const Locations = () => {
  return (
    <ClientWrapper>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif text-center mb-12"
          >
            Our Locations
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-48 relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${location.image})` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">{location.name}</h3>
                  <p className="text-gray-600 mb-2">{location.address}</p>
                  <p className="text-gray-600 mb-4">Hours: {location.hours}</p>
                  <button className="w-full bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-all">
                    Get Directions
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ClientWrapper>
  )
}

export default Locations 