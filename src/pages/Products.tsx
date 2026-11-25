import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Sparkles, ShieldCheck, Truck } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-parchment-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">Grand Reserve Catalog &bull; Vintage 2024</span>
          <h1 className="section-heading-light text-4xl sm:text-5xl mt-2 mb-4">
            The Botanical Cellar
          </h1>
          <div className="gold-divider" />
          <p className="text-stone-600 text-sm sm:text-base font-sans leading-relaxed">
            Four single-origin, handcrafted infusions derived from the sacred Aparajitha blossom. Naturally sapphire, alchemically responsive to citrus, and 100% caffeine-free.
          </p>
        </div>

        {/* Vintage Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Cellar Standards / Terroir Assurances */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-stone-200">
          <div className="card-vineyard-light p-6 text-center">
            <Truck className="w-6 h-6 text-gold mx-auto mb-3" />
            <h3 className="font-serif text-lg text-estate-950 mb-1">
              Complimentary Tasting Delivery
            </h3>
            <p className="text-xs text-stone-600 font-sans leading-relaxed">
              Express nationwide courier on all orders exceeding ₹499 across all Indian pin codes.
            </p>
          </div>

          <div className="card-vineyard-light p-6 text-center">
            <Compass className="w-6 h-6 text-gold mx-auto mb-3" />
            <h3 className="font-serif text-lg text-estate-950 mb-1">
              Single-Estate Sourcing
            </h3>
            <p className="text-xs text-stone-600 font-sans leading-relaxed">
              Harvested exclusively at high-altitude smallholder farms in Wayanad and the Western Ghats.
            </p>
          </div>

          <div className="card-vineyard-light p-6 text-center">
            <ShieldCheck className="w-6 h-6 text-gold mx-auto mb-3" />
            <h3 className="font-serif text-lg text-estate-950 mb-1">
              Zero Synthetic Chemistry
            </h3>
            <p className="text-xs text-stone-600 font-sans leading-relaxed">
              100% natural anthocyanin pigments. No artificial colourings, zero stimulants, zero preservatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
