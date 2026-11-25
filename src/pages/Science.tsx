import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Info, CheckCircle2, ChevronRight, Droplet, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type PHPhase = 'neutral' | 'acidic'

const PHDemo: React.FC = () => {
  const [phase, setPhase] = useState<PHPhase>('neutral')
  const color = phase === 'neutral' ? '#1044A5' : '#7C3AED'
  const pH = phase === 'neutral' ? '7.2' : '4.1'

  return (
    <div className="card-vineyard-dark p-8 md:p-10 border-gold/30">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Beaker / Flask Visual */}
        <div className="flex flex-col items-center gap-3 flex-shrink-0">
          <svg viewBox="0 0 140 200" className="w-32 drop-shadow-2xl">
            <defs>
              <linearGradient id="beakerLiquid" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={color} />
                <stop offset="100%" stopColor={phase === 'neutral' ? '#072054' : '#430982'} />
              </linearGradient>
            </defs>
            <path
              d="M35 15 L20 175 Q20 185 30 185 L110 185 Q120 185 120 175 L105 15 Z"
              fill="none"
              stroke="#C5A880"
              strokeWidth="2.5"
              opacity="0.7"
            />
            <motion.path
              d="M37 45 L22 173 Q22 181 31 181 L109 181 Q118 181 118 173 L103 45 Z"
              fill="url(#beakerLiquid)"
              animate={{ fill: color }}
              transition={{ duration: 1 }}
            />
            {/* Measurement Graduations */}
            <line x1="32" y1="80" x2="48" y2="80" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            <line x1="28" y1="120" x2="52" y2="120" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            <line x1="24" y1="150" x2="48" y2="150" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            <text
              x="70"
              y="115"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="16"
              fontWeight="bold"
              fontFamily="monospace"
            >
              pH {pH}
            </text>
          </svg>
          <span
            className="text-xs font-serif font-bold uppercase tracking-wider"
            style={{ color: phase === 'neutral' ? '#60A5FA' : '#C084FC' }}
          >
            {phase === 'neutral' ? '🔵 Royal Midnight Sapphire' : '🟣 Imperial Electric Violet'}
          </span>
        </div>

        {/* Controls & Molecular Explanation */}
        <div className="flex-1 space-y-5 text-parchment-light">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
              Anthocyanin pH Gradient
            </span>
            <h3 className="font-serif text-2xl text-parchment-light">
              Molecular Structure Rearrangement
            </h3>
          </div>

          <div className="space-y-2">
            <div className="h-2.5 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 border border-gold/30 relative">
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gold border border-estate-950 shadow"
                animate={{ left: phase === 'neutral' ? '82%' : '28%' }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <div className="flex justify-between text-[10px] tracking-wider uppercase text-stone-400 font-mono">
              <span>pH 2.0 (High Acidity)</span>
              <span>pH 7.0 (Neutral Terroir)</span>
              <span>pH 10.0 (Alkaline)</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans font-light">
            Ternatins feature a unique delphinidin nucleus with protective polyacylation. At neutral pH (~7.0), the flavylium cation assumes a quinonoidal base that absorbs yellow-red light, leaving deep sapphire blue wavelengths. Introducing citric acid shifts equilibrium toward the flavylium form, reflecting striking violet-purple photons.
          </p>

          <div className="flex gap-4 pt-1">
            <button
              onClick={() => setPhase('neutral')}
              className={`px-5 py-2.5 text-xs uppercase tracking-wider font-semibold border transition-all ${
                phase === 'neutral'
                  ? 'bg-sapphire text-white border-sapphire-light'
                  : 'bg-transparent text-stone-400 border-gold/20 hover:border-gold'
              }`}
            >
              Neutral pH (Blue)
            </button>
            <button
              onClick={() => setPhase('acidic')}
              className={`px-5 py-2.5 text-xs uppercase tracking-wider font-semibold border transition-all ${
                phase === 'acidic'
                  ? 'bg-violet text-white border-violet-light'
                  : 'bg-transparent text-stone-400 border-gold/20 hover:border-gold'
              }`}
            >
              🍋 Add Citrus (Violet)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Science: React.FC = () => {
  return (
    <div className="min-h-screen bg-parchment-light">
      {/* Dark Cellar Science Hero */}
      <section className="bg-estate-950 text-parchment-light py-20 px-4 sm:px-6 lg:px-8 border-b border-gold/25 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-tag text-gold">Botanical Biochemistry</span>
          <h1 className="font-serif text-4xl sm:text-6xl mt-2 mb-3 text-parchment-light">
            The Science Behind The Magic
          </h1>
          <div className="gold-divider" />
          <p className="text-stone-300 text-sm sm:text-base font-sans font-light max-w-xl mx-auto">
            Demystifying the natural chemistry of Clitoria ternatea. Unlocking why nature shifts colour without a grain of synthetic dye.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {/* Interactive pH Laboratory Simulator */}
        <div>
          <div className="mb-6">
            <span className="section-tag">Interactive Proof</span>
            <h2 className="section-heading-light text-2xl sm:text-3xl">
              Real-Time pH Transformation Chamber
            </h2>
          </div>
          <PHDemo />
        </div>

        {/* Botanical Profile Monograph */}
        <div className="card-vineyard-light p-8 md:p-12 border-stone-300">
          <span className="section-tag">Flora Monograph</span>
          <h2 className="font-serif text-3xl text-estate-950 mt-1 mb-6">
            Botanical Taxonomy &amp; Molecular Markers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
            {[
              ['Botanical Binomial', 'Clitoria ternatea L.'],
              ['Vernacular Indian Names', 'Aparajitha, Gokarna, Shankhupushpi, Butterfly Pea'],
              ['Family & Terroir', 'Fabaceae (Legume) &bull; Native Tropical South Asia & Western Ghats'],
              ['Primary Pigments', 'Ternatins (Ternatin A1-D2, polyacylated delphinidin glucosides)'],
              ['Antioxidant Compounds', 'Kaempferol, Quercetin glycosides, Myricetin, Phenolic acids'],
              ['Caffeine Profile', '0.00% &bull; Endogenously Free of Purine Alkaloids'],
            ].map(([k, v], i) => (
              <div key={i} className="border-b border-stone-200 pb-3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-dark block">
                  {k}
                </span>
                <span className="font-serif text-base text-estate-950 font-medium mt-0.5 block">
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Scientific Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-vineyard-light p-6">
            <span className="font-mono text-xs text-gold-dark font-bold block mb-2">
              01 &bull; MOLECULAR PIGMENT
            </span>
            <h3 className="font-serif text-xl text-estate-950 mb-2">
              Polyacylated Ternatins
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Unlike unstable anthocyanins found in berries, butterfly pea ternatins contain natural acyl groups that shield the pigment ring from light and thermal oxidation during storage.
            </p>
          </div>

          <div className="card-vineyard-light p-6">
            <span className="font-mono text-xs text-gold-dark font-bold block mb-2">
              02 &bull; PROTONATION SHIFT
            </span>
            <h3 className="font-serif text-xl text-estate-950 mb-2">
              Equilibrium Kinetics
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Citric acid releases hydrogen ions (H+). As pH drops below 5.5, the blue quinonoidal base protonates into a vibrant violet flavylium structure with instant reversibility.
            </p>
          </div>

          <div className="card-vineyard-light p-6">
            <span className="font-mono text-xs text-gold-dark font-bold block mb-2">
              03 &bull; ZERO CAFFEINE REPUTATION
            </span>
            <h3 className="font-serif text-xl text-estate-950 mb-2">
              Stimulant-Free Chemistry
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Unlike Camellia sinensis (traditional tea) or Coffea arabica, Clitoria ternatea contains zero caffeine or theobromine, ensuring restorative calm without sleep disruption.
            </p>
          </div>
        </div>

        {/* Responsible Academic Disclaimer */}
        <div className="p-6 bg-white border-l-4 border-gold shadow-sm text-xs text-stone-700 leading-relaxed">
          <div className="flex items-center gap-2 text-estate-950 font-serif text-base font-semibold mb-1">
            <Info className="w-4 h-4 text-gold" />
            <span>Academic Rigour &amp; Evaluative Disclaimer</span>
          </div>
          <p>
            The natural pH-driven colour chemistry and antioxidant polyphenol presence in <em>Clitoria ternatea</em> are established through extensive peer-reviewed botanical literature. Caffibloom upholds the highest evaluative ethics: we celebrate these proven biochemical phenomena while distinguishing established botanical chemistry from unverified clinical therapeutic claims. Caffibloom is an artisanal wellness beverage, not a pharmaceutical drug.
          </p>
        </div>

        {/* Academic Pitch CTA */}
        <div className="text-center pt-8">
          <Link
            to="/behind-innovation"
            className="btn-luxury-dark text-xs inline-flex items-center gap-2"
          >
            <span>Read The Full Academic &amp; Investor Blueprint</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Science
