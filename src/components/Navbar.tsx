import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu, X, Sparkles, Compass } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setIsOpen(false), [location.pathname])

  const links = [
    { label: 'Home', to: '/' },
    { label: 'The Cellar', to: '/products' },
    { label: 'Our Story', to: '/our-story' },
    { label: 'The Science', to: '/science' },
    { label: 'The Estate', to: '/sustainability' },
    { label: 'Academic Pitch', to: '/behind-innovation' },
    { label: 'Contact', to: '/contact' },
  ]

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Vineyard Announcement Bar */}
      <div className="bg-estate-950 text-gold-shimmer border-b border-gold/15 py-1.5 px-4 text-center text-[11px] tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-gold animate-pulse" />
        <span>Complimentary Tasting Delivery on orders above ₹499 &bull; 100% Caffeine-Free Botanical Terroir</span>
        <Sparkles className="w-3 h-3 text-gold animate-pulse" />
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav
        className={`transition-all duration-500 border-b ${
          scrolled
            ? 'bg-estate-950/95 backdrop-blur-md border-gold/25 shadow-estate py-3'
            : 'bg-estate-900/90 backdrop-blur-md border-gold/15 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Brand Logo with Vineyard Crest */}
            <Link to="/" className="flex items-center space-x-3 group shrink-0">
              <div className="w-10 h-10 rounded-full border border-gold/60 flex items-center justify-center bg-estate-850 group-hover:border-gold transition-colors">
                <span className="font-serif text-lg text-gold font-bold">CB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.22em] text-xl font-medium text-parchment-light uppercase group-hover:text-gold transition-colors">
                  Caffibloom
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-gold-dark font-sans">
                  Botanical Tea Estate
                </span>
              </div>
            </Link>

            {/* Desktop Menu with balanced spacing from Brand Logo */}
            <div className="hidden lg:flex items-center space-x-3.5 xl:space-x-6 lg:ml-5 xl:ml-10 lg:pl-5 xl:pl-8 lg:border-l lg:border-gold/20">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-[11px] xl:text-xs uppercase tracking-[0.1em] xl:tracking-[0.15em] whitespace-nowrap transition-all duration-200 relative py-1 ${
                    isActive(l.to)
                      ? 'text-gold font-semibold'
                      : 'text-parchment-light/80 hover:text-gold-light'
                  }`}
                >
                  {l.label}
                  {isActive(l.to) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right CTAs with refined spacing from Contact */}
            <div className="flex items-center space-x-3 xl:space-x-4 shrink-0 lg:ml-5 xl:ml-8 lg:pl-5 xl:pl-6 lg:border-l lg:border-gold/20">
              <Link
                to="/products"
                className="hidden sm:inline-flex btn-luxury-gold text-[10px] py-2.5 px-4 xl:px-5 whitespace-nowrap"
              >
                Shop The Blends
              </Link>

              {/* Shopping Bag Icon with Vineyard Counter */}
              <Link
                to="/cart"
                className="relative p-2 text-parchment-light hover:text-gold transition-colors"
                aria-label="View Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-estate-950 text-[10px] font-bold rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Link>

              {/* Mobile Drawer Trigger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-parchment-light hover:text-gold transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-estate-950 border-b border-gold/30 shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`block text-xs uppercase tracking-[0.2em] py-2 border-b border-gold/10 ${
                    isActive(l.to) ? 'text-gold font-semibold' : 'text-parchment-light/80'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  to="/products"
                  className="w-full block text-center btn-luxury-gold py-3 text-xs"
                >
                  Shop The Reserve Collection
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
