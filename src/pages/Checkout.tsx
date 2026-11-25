import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Lock, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'

type Step = 'details' | 'address' | 'confirm'

const Checkout: React.FC = () => {
  const { items, totalPrice, totalItems, clearCart } = useCart()
  const [step, setStep] = useState<Step>('details')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  })
  const [ordered, setOrdered] = useState(false)

  const shipping = totalPrice >= 499 ? 0 : 59
  const grandTotal = totalPrice + shipping

  if (items.length === 0 && !ordered) {
    return (
      <div className="min-h-[70vh] bg-parchment-light flex flex-col items-center justify-center gap-4 px-4 text-center">
        <h2 className="text-3xl font-serif text-estate-950">Your Basket is Empty</h2>
        <p className="text-sm text-stone-500">Add botanical teas to your cellar before checking out.</p>
        <Link to="/products" className="btn-luxury-dark text-xs">
          Explore The Cellar
        </Link>
      </div>
    )
  }

  if (ordered) {
    return (
      <div className="min-h-[80vh] bg-parchment-light flex flex-col items-center justify-center gap-6 px-4 text-center py-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 bg-estate-950 border border-gold flex items-center justify-center text-gold shadow-gold"
        >
          <Check className="w-10 h-10 text-gold" />
        </motion.div>
        <div>
          <span className="section-tag text-gold-dark">Allocation Confirmed</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-estate-950 mt-1 mb-2">
            Your Botanical Reservation is Placed
          </h1>
          <p className="text-stone-600 max-w-md mx-auto text-sm leading-relaxed">
            Thank you for bringing Caffibloom into your daily ritual. A confirmation dossier has been simulated for your order.
          </p>
        </div>

        <div className="p-4 bg-amber-50 border border-amber-200 text-xs text-amber-900 max-w-md text-left leading-relaxed">
          <strong>MVP Demonstration Notice:</strong> This is a fully functional front-end simulation. In production, this integrates with payment gateways such as Razorpay, Paytm, or Stripe. No real funds were deducted.
        </div>

        <Link to="/" className="btn-luxury-dark text-xs">
          Return To Estate Home
        </Link>
      </div>
    )
  }

  const setField =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value })

  return (
    <div className="min-h-screen bg-parchment-light py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-4 border-b border-stone-200">
          <span className="section-tag">Direct Cellar Dispatch</span>
          <h1 className="font-serif text-3xl sm:text-4xl text-estate-950 mt-1">
            Cellar Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Checkout Form Flow (Left) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Step Breadcrumb Indicators */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest pb-4 border-b border-stone-200">
              {(['details', 'address', 'confirm'] as Step[]).map((s, idx) => (
                <React.Fragment key={s}>
                  <div
                    className={`flex items-center gap-2 ${
                      step === s ? 'text-estate-950 font-bold' : 'text-stone-400'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 flex items-center justify-center text-[10px] ${
                        step === s
                          ? 'bg-estate-950 text-gold-shimmer'
                          : 'bg-stone-200 text-stone-600'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span>{s}</span>
                  </div>
                  {idx < 2 && <div className="flex-1 h-[1px] bg-stone-200" />}
                </React.Fragment>
              ))}
            </div>

            {/* Step 1: Customer Details */}
            {step === 'details' && (
              <div className="card-vineyard-light p-8 space-y-5">
                <h2 className="font-serif text-2xl text-estate-950">
                  1. Patron Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-500 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={setField('name')}
                      placeholder="e.g. Radhika Sharma"
                      className="w-full px-4 py-3 bg-white border border-stone-300 text-xs text-estate-950 focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-500 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={setField('email')}
                      placeholder="patron@domain.com"
                      className="w-full px-4 py-3 bg-white border border-stone-300 text-xs text-estate-950 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-500 mb-1">
                    Phone / WhatsApp Number (For Courier Updates) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={setField('phone')}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-white border border-stone-300 text-xs text-estate-950 focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setStep('address')}
                    disabled={!form.name || !form.email || !form.phone}
                    className="btn-luxury-dark py-3.5 text-xs w-full disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Delivery Address</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Delivery Address */}
            {step === 'address' && (
              <div className="card-vineyard-light p-8 space-y-5">
                <h2 className="font-serif text-2xl text-estate-950">
                  2. Courier Destination
                </h2>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-500 mb-1">
                    Street Address, Suite / Apartment *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.address}
                    onChange={setField('address')}
                    placeholder="e.g. 42 Bloom Terrace, 4th Cross"
                    className="w-full px-4 py-3 bg-white border border-stone-300 text-xs text-estate-950 focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-500 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.city}
                      onChange={setField('city')}
                      placeholder="e.g. Bangalore"
                      className="w-full px-4 py-3 bg-white border border-stone-300 text-xs text-estate-950 focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-500 mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.state}
                      onChange={setField('state')}
                      placeholder="e.g. Karnataka"
                      className="w-full px-4 py-3 bg-white border border-stone-300 text-xs text-estate-950 focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-500 mb-1">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.pincode}
                      onChange={setField('pincode')}
                      placeholder="560038"
                      className="w-full px-4 py-3 bg-white border border-stone-300 text-xs text-estate-950 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setStep('details')}
                    className="btn-luxury-outline !text-estate-950 !border-stone-300 text-xs flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back
                  </button>
                  <button
                    onClick={() => setStep('confirm')}
                    disabled={!form.address || !form.city || !form.pincode}
                    className="flex-1 btn-luxury-dark py-3.5 text-xs disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <span>Review Allocation Order</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review & Place Simulated Order */}
            {step === 'confirm' && (
              <div className="card-vineyard-light p-8 space-y-6">
                <h2 className="font-serif text-2xl text-estate-950">
                  3. Verify &amp; Confirm Allocation
                </h2>

                <div className="p-4 bg-parchment border border-stone-200 text-xs space-y-2 text-stone-700">
                  <p>
                    <strong className="text-estate-950">Recipient:</strong> {form.name} ({form.phone})
                  </p>
                  <p>
                    <strong className="text-estate-950">Email Dossier:</strong> {form.email}
                  </p>
                  <p>
                    <strong className="text-estate-950">Dispatch Address:</strong> {form.address}, {form.city}, {form.state} - {form.pincode}
                  </p>
                </div>

                <div className="p-4 bg-estate-950 text-parchment-light border border-gold/40 text-xs flex items-start gap-3">
                  <Lock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gold block mb-0.5">
                      Simulated Demonstration Checkout
                    </strong>
                    <span>
                      Clicking below completes the simulated order workflow and resets your cart. No credit card or actual payment is required for this evaluative prototype.
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep('address')}
                    className="btn-luxury-outline !text-estate-950 !border-stone-300 text-xs flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back
                  </button>
                  <button
                    onClick={() => {
                      clearCart()
                      setOrdered(true)
                    }}
                    className="flex-1 btn-luxury-gold py-4 text-xs font-bold"
                  >
                    🌸 Confirm &amp; Place Simulated Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Order Review Column */}
          <div className="lg:col-span-4">
            <div className="card-vineyard-light p-6 sticky top-28 space-y-5">
              <h3 className="font-serif text-xl text-estate-950 border-b border-stone-200 pb-3">
                Allocation Review
              </h3>

              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-xs py-1 border-b border-stone-100 last:border-b-0">
                    <div className="flex items-center gap-3">
                      {item.image.startsWith('/') ? (
                        <img src={item.image} alt={item.name} className="w-8 h-8 object-cover border border-stone-200 flex-shrink-0" />
                      ) : (
                        <span className="text-2xl">{item.image}</span>
                      )}
                      <div>
                        <span className="font-serif font-semibold text-estate-950 block">
                          {item.name}
                        </span>
                        <span className="text-stone-400">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <span className="font-mono font-medium text-estate-950">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-200 pt-3 space-y-2 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Courier Delivery</span>
                  <span>{shipping === 0 ? <strong className="text-botanical">FREE</strong> : `₹${shipping}`}</span>
                </div>
                <div className="border-t border-stone-200 pt-2 flex justify-between font-serif text-lg font-bold text-estate-950">
                  <span>Total Due</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
