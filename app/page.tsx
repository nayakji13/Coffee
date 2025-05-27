import Hero from './components/AkshatNayakHero'
import Header from './components/AkshatNayakHeader'
import FeaturedProducts from './components/AkshatNayakFeaturedProducts'
import About from './components/AkshatNayakAbout'
import Menu from './components/AkshatNayakMenu'
import Locations from './components/AkshatNayakLocations'
import Contact from './components/AkshatNayakContact'
import Footer from './components/AkshatNayakFooter'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProducts />
      <div id="about">
        <About />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="locations">
        <Locations />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  )
} 