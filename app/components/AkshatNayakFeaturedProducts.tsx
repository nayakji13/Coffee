'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ClientWrapper from './ClientWrapper'

const products = [
  {
    id: 1,
    name: 'Premium Arabica',
    description: 'Rich and smooth with notes of chocolate and caramel',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  {
    id: 2,
    name: 'Ethiopian Yirgacheffe',
    description: 'Bright and floral with citrus undertones',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1156&q=80'
  },
  {
    id: 3,
    name: 'Colombian Supremo',
    description: 'Well-balanced with nutty and chocolate notes',
    price: '$26.99',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
]

const FeaturedProducts = () => {
  return (
    <ClientWrapper>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif text-center mb-12"
          >
            Featured Products
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-background rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-64 relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">{product.price}</span>
                    <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ClientWrapper>
  )
}

export default FeaturedProducts 