import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Sparkles, Sprout, HeartHandshake, ShieldCheck, Recycle, Sun, Droplets } from 'lucide-react'
import { Link } from 'react-router-dom'

const sustainabilityPillars = [
  {
    icon: Sprout,
    title: 'Native Soil Biodiversity',
    desc: 'Clitoria ternatea is a nitrogen-fixing legume native to tropical India. Cultivating it naturally enriches depleted soils, reducing the need for chemical fertilizers across crop rotations.',
    stat: '100% Native Terroir',
  },
  {
    icon: HeartHandshake,
    title: 'Smallholder Direct Trade',
    desc: 'We bypass multi-tier agricultural middlemen. Our partnering women harvesters in Wayanad and Coorg receive guaranteed fair-trade premiums exceeding market commodity rates by 35%.',
    stat: 'Fair-Trade Partnership',
  },
  {
    icon: Sun,
    title: 'Zero-Emission Solar Curing',
    desc: 'Our blossoms are cured in solar-assisted dehydration domes that operate on 100% renewable energy, preserving delicate anthocyanins without fossil fuel emissions.',
    stat: 'Solar Dehydration',
  },
  {
    icon: Recycle,
    title: 'Recyclable Cellar Packaging',
    desc: 'Zero single-use plastic sachets. Our teas are preserved in lightweight, recyclable canisters and non-bleached botanical cotton brewing pouches.',
    stat: 'Minimalist Footprint',
  },
  {
    icon: Droplets,
    title: 'Rainwater Irrigation',
    desc: 'High-altitude Western Ghats rainfall naturally hydrates our partnering organic plantations, keeping external groundwater extraction near zero.',
    stat: 'Rain-Fed Estates',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Synthetic Additives',
    desc: 'No artificial flavours, no synthetic colourings, no added sugars. What you infuse in your cup is pure, unadulterated botanical flower.',
    stat: 'Purity Assured',
  },
]

const Sustainability: React.FC = () => {
  return (
    <div className="min-h-screen bg-parchment-light">
      {/* Dark Cellar Terroir Hero */}
      <section className="bg-estate-950 text-parchment-light py-20 px-4 sm:px-6 lg:px-8 border-b border-gold/25 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-tag text-gold">The Estate &bull; Terroir &amp; Earth</span>
          <h1 className="font-serif text-4xl sm:text-6xl mt-2 mb-3 text-parchment-light">
            Rooted in Soil. Bottled With Respect.
          </h1>
          <div className="gold-divider" />
          <p className="text-stone-300 text-sm sm:text-base font-sans font-light max-w-xl mx-auto">
            Honouring the agricultural communities of Wayanad and the Western Ghats who nurture our sacred Aparajitha vines.
          </p>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sustainabilityPillars.map((p, i) => (
            <div key={i} className="card-vineyard-light p-8 border-stone-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center bg-estate-950 mb-6">
                  <p.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-2xl text-estate-950 mb-3">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-gold-dark">
                  {p.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="card-vineyard-dark p-10 md:p-14 border-gold/30 text-center text-parchment-light relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="section-tag text-gold">Our Sacred Pledge</span>
            <h2 className="font-serif text-3xl sm:text-4xl">
              A Sustainable Botanical Ecosystem
            </h2>
            <div className="gold-divider" />
            <p className="text-stone-300 text-sm leading-relaxed font-sans font-light">
              Every cup of Caffibloom directly empowers indigenous agro-ecological farming in South India. By championing native crops that naturally fix nitrogen and require zero synthetic intervention, we ensure that every pour leaves our soil richer than we found it.
            </p>
            <div className="pt-4">
              <Link to="/products" className="btn-luxury-gold text-xs">
                Support The Estate &bull; Shop The Blends
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sustainability
