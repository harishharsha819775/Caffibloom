import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShoppingBag,
  ArrowLeft,
  Star,
  Minus,
  Plus,
  Compass,
  Clock,
  Thermometer,
  Sparkles,
  ShieldCheck,
  Droplet,
} from 'lucide-react'
import { getProductById, products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { addItem } = useCart()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const product = getProductById(id ?? '')
  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 bg-parchment-light px-4">
        <h2 className="text-3xl font-serif text-estate-950">Vintage Not Found</h2>
        <p className="text-sm text-stone-500">This cellar allocation does not exist or has been retired.</p>
        <Link to="/products" className="btn-luxury-dark text-xs">
          Return To The Cellar
        </Link>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2200)
  }

  return (
    <div className="min-h-screen bg-parchment-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-gold-dark transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to The Cellar</span>
          </button>
          <span className="text-[11px] uppercase tracking-[0.2em] text-gold-dark font-medium">
            Vintage 2024 &bull; {product.origin}
          </span>
        </div>

        {/* Product Tasting Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Visual Showcase Stage (Left) */}
          <div className="lg:col-span-5">
            <div className="card-vineyard-dark p-10 text-center relative border-gold/30">
              {product.badge && (
                <span className="absolute top-4 left-4 bg-gold text-estate-950 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1">
                  {product.badge}
                </span>
              )}

              <div className="py-6 flex items-center justify-center">
                {product.image.startsWith('/') ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 sm:h-80 object-cover object-center shadow-xl border border-gold/30"
                  />
                ) : (
                  <motion.span
                    className="text-9xl select-none filter drop-shadow-2xl py-10"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {product.image}
                  </motion.span>
                )}
              </div>

              <div className="border-t border-gold/20 pt-4 flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-gold" />
                  {product.origin.split(',')[0]}
                </span>
                <span>{product.weight} &bull; {product.servings} Servings</span>
              </div>
            </div>
          </div>

          {/* Tasting Dossier & Purchasing Controls (Right) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="section-tag">{product.origin}</span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-estate-950 mt-1 mb-2">
                {product.name}
              </h1>
              <p className="font-serif italic text-stone-500 text-base sm:text-lg">
                {product.tagline}
              </p>
            </div>

            {/* Ratings & Accolades */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold fill-gold'
                        : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium text-xs text-estate-950">
                {product.rating} / 5.0
              </span>
              <span className="text-xs text-stone-400">
                ({product.reviews} sommelier reviews)
              </span>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-4 py-2 border-t border-b border-stone-200">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-estate-950">
                ₹{product.price}
              </span>
              {product.comparePrice && (
                <span className="text-base text-stone-400 line-through">
                  ₹{product.comparePrice}
                </span>
              )}
              <span className="text-xs uppercase tracking-wider text-botanical font-semibold">
                Complimentary Express Shipping Included
              </span>
            </div>

            {/* Description */}
            <p className="text-stone-700 leading-relaxed font-sans text-sm sm:text-base">
              {product.description}
            </p>

            {/* Sommelier Tasting Profile Breakdown */}
            <div className="p-5 bg-white border border-stone-200 space-y-2.5">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-gold-dark block">
                Sommelier Tasting Monograph
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                <div className="border-l-2 border-gold pl-2.5">
                  <strong className="text-estate-950 block">Aroma / Nose:</strong>
                  <span className="text-stone-600">{product.tastingNotes.nose}</span>
                </div>
                <div className="border-l-2 border-sapphire pl-2.5">
                  <strong className="text-estate-950 block">Palate:</strong>
                  <span className="text-stone-600">{product.tastingNotes.palate}</span>
                </div>
                <div className="border-l-2 border-violet pl-2.5">
                  <strong className="text-estate-950 block">Finish:</strong>
                  <span className="text-stone-600">{product.tastingNotes.finish}</span>
                </div>
              </div>
            </div>

            {/* Brewing Precision */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-stone-200 flex items-center gap-3">
                <Thermometer className="w-5 h-5 text-gold" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block">
                    Ideal Water Temp
                  </span>
                  <span className="text-xs font-semibold text-estate-950">
                    {product.brewingTemp}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white border border-stone-200 flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block">
                    Infusion Duration
                  </span>
                  <span className="text-xs font-semibold text-estate-950">
                    {product.steepTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-stone-500 block mb-2">
                Pure Botanical Composition:
              </span>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="text-xs bg-stone-100 text-stone-700 px-3 py-1 border border-stone-200"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Purchase Controls */}
            <div className="flex items-center gap-4 pt-4 border-t border-stone-200">
              <div className="flex items-center border border-stone-300 bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3 text-stone-600 hover:bg-stone-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-mono text-sm font-semibold text-estate-950">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3 text-stone-600 hover:bg-stone-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 btn-luxury-dark py-3.5 text-xs flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-gold" />
                <span>
                  {added ? '✓ Reserved in Your Cart!' : `Add ${quantity} to Cellar Cart`}
                </span>
              </button>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-stone-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-botanical" />
                Single-Origin Authenticity
              </span>
              <span>&bull;</span>
              <span>Zero Artificial Additives</span>
              <span>&bull;</span>
              <span>Safe Checkout</span>
            </div>
          </div>
        </div>

        {/* Related Vintages */}
        <div className="pt-16 border-t border-stone-200">
          <div className="text-center mb-10">
            <span className="section-tag">Complementary Cellar Allocations</span>
            <h2 className="section-heading-light text-2xl sm:text-3xl mt-1">
              Explore Sister Vintages
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
