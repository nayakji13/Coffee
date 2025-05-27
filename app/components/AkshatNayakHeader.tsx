'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ClientWrapper from './ClientWrapper'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <ClientWrapper>
      <header className="fixed w-full z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="text-2xl font-serif">
              Coffee Shop
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#menu" className="text-gray-600 hover:text-primary transition-colors">
                Menu
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#locations" className="text-gray-600 hover:text-primary transition-colors">
                Locations
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-600 hover:text-primary transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden py-4"
            >
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  href="#menu"
                  className="text-gray-600 hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Menu
                </Link>
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  href="#locations"
                  className="text-gray-600 hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Locations
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-600 hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </div>
            </motion.nav>
          )}
        </div>
      </header>
    </ClientWrapper>
  )
}

export default Header 