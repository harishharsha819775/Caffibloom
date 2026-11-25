import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star, Eye, Compass, Droplet } from 'lucide-react'
import { motion } from 'framer-motion'
import { Product } from '../data/products'
import { useCart } from '../context/CartContext'

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addItem } = useCart()

  return (
    <div className="card-vineyard-light flex flex-col justify-between h-full group border border-stone-200 hover:border-gold/60 transition-all duration-300">
      <div>
        {/* Top Header / Origin Badge */}
        <div className="p-4 border-b border-stone-100 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-stone-500">
          <span className="flex items-center gap-1 text-gold-dark font-medium">
            <Compass className="w-3 h-3 text-gold" />
            {product.origin.split(',')[0]}
          </span>
          {product.badge && (
            <span className="bg-estate-900 text-gold-shimmer px-2 py-0.5 text-[9px] font-semibold tracking-[0.15em] uppercase">
              {product.badge}
            </span>
          )}
        </div>

        {/* Botanical Visual Stage */}
        <div className="relative h-48 bg-gradient-to-b from-parchment-light to-parchment/60 flex items-center justify-center overflow-hidden border-b border-stone-100">
          {product.image.startsWith('/') ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <motion.div
              className="text-7xl select-none filter drop-shadow-md group-hover:scale-110 transition-transform duration-500"
              whileHover={{ rotate: [0, -3, 3, 0] }}
            >
              {product.image}
            </motion.div>
          )}

          {/* Tasting Room Volume & Infusion note */}
          <div className="absolute bottom-2 left-4 text-[10px] uppercase tracking-[0.18em] text-stone-300 sm:text-stone-400 bg-estate-950/60 px-1.5 py-0.5 backdrop-blur-sm">
            {product.weight} &bull; {product.servings} Servings
          </div>
          <div className="absolute bottom-2 right-4 flex items-center gap-1 text-[10px] text-stone-300 sm:text-stone-400 bg-estate-950/60 px-1.5 py-0.5 backdrop-blur-sm">
            <Droplet className="w-2.5 h-2.5 text-sapphire-light" />
            <span>pH Alchemical</span>
          </div>
        </div>

        {/* Product Details & Tasting Profile */}
        <div className="p-6">
          <h3 className="font-serif text-2xl text-estate-950 mb-1 group-hover:text-gold-dark transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-stone-500 tracking-wider mb-4 line-clamp-1 italic font-serif">
            {product.tagline}
          </p>

          {/* Sommelier Tasting Notes Snippet */}
          <div className="p-3 bg-parchment/70 border border-stone-200/60 mb-4 text-xs space-y-1.5">
            <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-dark">
              Tasting Profile
            </div>
            <p className="text-stone-600 text-[11px] leading-relaxed line-clamp-2">
              <span className="font-semibold text-estate-900">Palate:</span> {product.tastingNotes.palate}
            </p>
          </div>

          {/* Rating & Reviews */}
          <div className="flex items-center justify-between text-xs text-stone-500 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'text-gold fill-gold'
                      : 'text-stone-300'
                  }`}
                />
              ))}
              <span className="text-[11px] font-medium text-stone-700 ml-1">
                {product.rating}
              </span>
            </div>
            <span className="text-[10px] tracking-wider text-stone-400">
              ({product.reviews} cellared reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Pricing & Reservation CTA */}
      <div className="p-6 pt-0 border-t border-stone-100/80 mt-auto">
        <div className="flex items-baseline justify-between mb-4 pt-3">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 block">
              Curated Price
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-bold text-estate-950">
                ₹{product.price}
              </span>
              {product.comparePrice && (
                <span className="text-xs text-stone-400 line-through">
                  ₹{product.comparePrice}
                </span>
              )}
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-botanical font-semibold bg-emerald-50 px-2 py-0.5 border border-emerald-200">
            In Stock
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              })
            }
            className="flex-1 btn-luxury-dark py-2.5 text-[10px] flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-gold" />
            Add To Cart
          </button>
          <Link
            to={`/products/${product.id}`}
            className="p-2.5 border border-stone-300 text-stone-600 hover:border-gold hover:text-gold-dark transition-colors flex items-center justify-center"
            title="View Tasting Notes"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
