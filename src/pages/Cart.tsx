import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] bg-parchment-light flex flex-col items-center justify-center gap-6 px-4 text-center">
        <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center bg-white shadow-sm">
          <ShoppingBag className="w-8 h-8 text-gold" />
        </div>
        <div>
          <h2 className="font-serif text-3xl text-estate-950 mb-2">
            Your Cellar Basket is Empty
          </h2>
          <p className="text-stone-500 text-sm max-w-sm mx-auto">
            You have not yet reserved any botanical vintages. Explore our four single-origin cuvées.
          </p>
        </div>
        <Link to="/products" className="btn-luxury-dark text-xs flex items-center gap-2">
          <span>Explore The Cellar</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    )
  }

  const shipping = totalPrice >= 499 ? 0 : 59
  const grandTotal = totalPrice + shipping

  return (
    <div className="min-h-screen bg-parchment-light py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-4 border-b border-stone-200 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="section-tag">Cellar Reservations</span>
            <h1 className="font-serif text-3xl sm:text-4xl text-estate-950 mt-1">
              Your Tasting Basket ({totalItems} {totalItems === 1 ? 'item' : 'items'})
            </h1>
          </div>
          <Link to="/products" className="text-xs uppercase tracking-widest text-gold-dark hover:underline">
            &larr; Continue Shopping The Cellar
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Items List */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="card-vineyard-light p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-parchment flex items-center justify-center text-3xl border border-stone-200 flex-shrink-0 overflow-hidden">
                    {item.image.startsWith('/') ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      item.image
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-estate-950">
                      {item.name}
                    </h3>
                    <span className="text-xs text-stone-500">
                      ₹{item.price} per unit allocation
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-8">
                  {/* Quantity Counter */}
                  <div className="flex items-center border border-stone-300 bg-white">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2.5 py-1 text-stone-600 hover:bg-stone-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center font-mono text-xs font-semibold text-estate-950">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2.5 py-1 text-stone-600 hover:bg-stone-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="text-right">
                    <span className="font-serif text-xl font-bold text-estate-950 block">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-stone-400 hover:text-red-500 transition-colors p-1"
                    title="Remove allocation"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Free Shipping Progress Alert */}
            {totalPrice < 499 && (
              <div className="p-4 bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-center justify-between">
                <span>
                  Reserve <strong>₹{499 - totalPrice}</strong> more to unlock <strong>Complimentary Nationwide Delivery</strong>.
                </span>
                <Link to="/products" className="font-semibold underline ml-2 whitespace-nowrap">
                  Add a blend
                </Link>
              </div>
            )}
          </div>

          {/* Cellar Order Summary (Right) */}
          <div className="lg:col-span-4">
            <div className="card-vineyard-light p-6 sticky top-28 space-y-6">
              <h2 className="font-serif text-2xl text-estate-950 border-b border-stone-200 pb-3">
                Order Summary
              </h2>

              <div className="space-y-3 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="font-medium text-estate-950">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Nationwide Express Delivery</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-botanical font-semibold">FREE</span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                <div className="border-t border-stone-200 pt-3 flex justify-between font-serif text-xl font-bold text-estate-950">
                  <span>Total Amount</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full btn-luxury-dark py-3.5 text-xs flex items-center justify-center gap-2"
              >
                <span>Proceed To Checkout</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold" />
              </Link>

              <div className="space-y-2 pt-2 text-[11px] text-stone-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-botanical" />
                  <span>100% Secure Simulated Transaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  <span>Handcrafted Single-Origin Harvest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
