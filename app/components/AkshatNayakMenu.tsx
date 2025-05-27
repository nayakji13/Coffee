'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ClientWrapper from './ClientWrapper'

const menuItems = {
  coffee: [
    {
      id: 1,
      name: 'Espresso',
      description: 'Rich and concentrated coffee shot',
      price: '$3.99',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam',
      price: '$4.99',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1156&q=80'
    },
    {
      id: 3,
      name: 'Latte',
      description: 'Espresso with steamed milk',
      price: '$4.49',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 4,
      name: 'Cold Brew',
      description: 'Slow-steeped coffee served cold',
      price: '$5.99'
    }
  ],
  food: [
    {
      id: 1,
      name: 'Avocado Toast',
      description: 'Sourdough bread with avocado and poached egg',
      price: '$8.99'
    },
    {
      id: 2,
      name: 'Croissant',
      description: 'Buttery, flaky pastry',
      price: '$3.99'
    },
    {
      id: 3,
      name: 'Quiche',
      description: 'Savory egg and cheese pie',
      price: '$7.99'
    }
  ]
}

const Menu = () => {
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
            Our Menu
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.coffee.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-background rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-64 relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">{item.price}</span>
                    <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-all">
                      Order Now
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

export default Menu 