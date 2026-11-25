import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Mail, Phone, MapPin, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-estate-950 text-parchment-light/80 border-t border-gold/25 relative overflow-hidden">
      {/* Top Private Allocation Newsletter Band */}
      <div className="border-b border-gold/15 py-12 px-4 bg-estate-900/60">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-tag text-gold">The Bloom Cellar Circle</span>
          <h3 className="font-serif text-3xl sm:text-4xl text-parchment-light mt-1 mb-2">
            Join Our Private Botanical Allocation
          </h3>
          <p className="text-xs sm:text-sm text-parchment-light/70 max-w-lg mx-auto mb-6">
            Receive private harvest announcements, seasonal botanical cuvées, and sommelier brewing guides directly to your inbox.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your private email..."
              className="flex-1 px-5 py-3.5 bg-estate-950 text-parchment-light text-xs tracking-wider border border-gold/30 focus:outline-none focus:border-gold placeholder:text-stone-500 rounded-none"
            />
            <button
              type="submit"
              className="btn-luxury-gold text-[10px] py-3.5 px-6 whitespace-nowrap"
            >
              Request Access
            </button>
          </form>
        </div>
      </div>

      {/* Main Vineyard Estate Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-xs">
        {/* Col 1: Estate Heritage */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full border border-gold/60 flex items-center justify-center bg-estate-850">
              <span className="font-serif text-lg text-gold font-bold">CB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.25em] text-xl font-medium text-parchment-light uppercase">
                Caffibloom
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-gold-dark font-sans">
                Botanical Tea Estate
              </span>
            </div>
          </div>

          <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
            Hand-harvested Butterfly Pea (Clitoria ternatea / Aparajitha) botanical infusions. Pure, single-origin flower teas with natural pH-responsive color transformation. Zero caffeine. Zero synthetic additives.
          </p>

          <div className="pt-2 flex items-center space-x-3">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gold/40 text-gold-shimmer hover:bg-gold/10 hover:border-gold transition-colors text-[11px] tracking-wider uppercase font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              Sommelier Concierge
            </a>
          </div>
        </div>

        {/* Col 2: The Cellar Collection */}
        <div className="space-y-3">
          <h4 className="font-serif text-base text-gold tracking-wider uppercase border-b border-gold/20 pb-2">
            The Cellar
          </h4>
          <ul className="space-y-2 text-stone-400">
            <li>
              <Link to="/products/original" className="hover:text-gold transition-colors">
                Original Reserve Pure
              </Link>
            </li>
            <li>
              <Link to="/products/citrus" className="hover:text-gold transition-colors">
                Citrus Bloom Vintage
              </Link>
            </li>
            <li>
              <Link to="/products/mint" className="hover:text-gold transition-colors">
                Mint Bloom Grand Cru
              </Link>
            </li>
            <li>
              <Link to="/products/lemongrass" className="hover:text-gold transition-colors">
                Lemongrass Bloom Cuvée
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gold transition-colors text-gold-light">
                &rarr; View All Vintages
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Terroir & Science */}
        <div className="space-y-3">
          <h4 className="font-serif text-base text-gold tracking-wider uppercase border-b border-gold/20 pb-2">
            Terroir &amp; Lore
          </h4>
          <ul className="space-y-2 text-stone-400">
            <li>
              <Link to="/our-story" className="hover:text-gold transition-colors">
                The Heritage Story
              </Link>
            </li>
            <li>
              <Link to="/science" className="hover:text-gold transition-colors">
                Anthocyanin Science
              </Link>
            </li>
            <li>
              <Link to="/sustainability" className="hover:text-gold transition-colors">
                Wayanad Soil &amp; Estate
              </Link>
            </li>
            <li>
              <Link to="/behind-innovation" className="hover:text-gold transition-colors font-medium text-gold-shimmer">
                &bull; Academic Evaluation
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold transition-colors">
                Tasting Room Bookings
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Tasting Room & Estate HQ */}
        <div className="space-y-3">
          <h4 className="font-serif text-base text-gold tracking-wider uppercase border-b border-gold/20 pb-2">
            Estate Cellar
          </h4>
          <div className="space-y-2 text-stone-400 text-xs">
            <p className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
              <span>Caffibloom Estate Cellar, Indiranagar, Bangalore, KA 560038</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>+91 98765 43210</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>curator@caffibloom.in</span>
            </p>
            <div className="pt-2 flex items-center space-x-3 text-stone-400">
              <a href="#" className="hover:text-gold"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-gold"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-gold"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Botanical Certifications & Purity Badges Bar */}
      <div className="border-t border-gold/15 py-6 px-4 bg-estate-950/90 text-stone-400 text-[11px] text-center">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-12 tracking-widest uppercase">
          <span>&bull; 100% Caffeine-Free</span>
          <span>&bull; Clitoria Ternatea Native Terroir</span>
          <span>&bull; Natural Anthocyanin Ternatins</span>
          <span>&bull; Zero Synthetic Food Additives</span>
          <span>&bull; Solar Cured Botanicals</span>
        </div>
      </div>

      {/* Bottom Legal Band */}
      <div className="border-t border-stone-800/60 py-5 px-4 text-stone-500 text-[11px]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>
            &copy; {currentYear} Caffibloom Botanical Tea Estate. All rights reserved. Handcrafted in India.
          </p>
          <div className="flex gap-6 tracking-wider uppercase">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Cellar</a>
            <a href="#" className="hover:text-gold transition-colors">Shipping &amp; Returns</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
