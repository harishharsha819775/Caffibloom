import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, RotateCcw, Droplets, CheckCircle, Info } from 'lucide-react'

type Phase = 'blue' | 'squeezing' | 'violet'

const LuxuryWineGlassSVG = ({ phase }: { phase: Phase }) => {
  // Rich fluid colors: royal sapphire to royal imperial violet
  const fluidColor1 =
    phase === 'blue'
      ? '#0F44A0'
      : phase === 'squeezing'
      ? '#4F2E9F'
      : '#7A1FD8'

  const fluidColor2 =
    phase === 'blue'
      ? '#072054'
      : phase === 'squeezing'
      ? '#2A1061'
      : '#430982'

  return (
    <div className="relative flex items-center justify-center py-6">
      <svg
        viewBox="0 0 220 360"
        className="w-48 sm:w-56 drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wineFluid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fluidColor1} />
            <stop offset="100%" stopColor={fluidColor2} />
          </linearGradient>

          <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="25%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="80%" stopColor="rgba(255,255,255,0.02)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
          </linearGradient>

          <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5A880" />
            <stop offset="50%" stopColor="#F5E6D3" />
            <stop offset="100%" stopColor="#9E7E56" />
          </linearGradient>

          <clipPath id="glassBowlClip">
            <path d="M40 50 C40 180, 70 230, 110 230 C150 230, 180 180, 180 50 Z" />
          </clipPath>
        </defs>

        {/* Stemware Base */}
        <ellipse cx="110" cy="335" rx="55" ry="10" fill="none" stroke="#C5A880" strokeWidth="2" opacity="0.6" />
        <ellipse cx="110" cy="335" rx="50" ry="8" fill="rgba(255,255,255,0.08)" />

        {/* Stem */}
        <line x1="110" y1="230" x2="110" y2="335" stroke="rgba(255,255,255,0.5)" strokeWidth="4" strokeLinecap="round" />
        <line x1="109" y1="230" x2="109" y2="335" stroke="#C5A880" strokeWidth="1" opacity="0.8" />

        {/* Liquid Inside Glass */}
        <motion.path
          d="M45 100 C45 180, 72 228, 110 228 C148 228, 175 180, 175 100 Q142 110, 110 100 Q78 90, 45 100 Z"
          clipPath="url(#glassBowlClip)"
          fill="url(#wineFluid)"
          animate={{
            fill: fluidColor1,
          }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />

        {/* Bubbles / Effervescence during reaction */}
        {phase === 'squeezing' &&
          [75, 110, 145, 95, 130].map((cx, i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={210}
              r="3"
              fill="rgba(255, 255, 255, 0.7)"
              initial={{ y: 0, opacity: 0.8 }}
              animate={{ y: -90, opacity: 0 }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeOut',
              }}
            />
          ))}

        {/* Glass Outer Contour */}
        <path
          d="M40 50 C40 180, 70 230, 110 230 C150 230, 180 180, 180 50"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2.5"
        />

        {/* Luxury Gold Rim */}
        <ellipse cx="110" cy="50" rx="70" ry="12" fill="none" stroke="url(#goldRim)" strokeWidth="2.5" />

        {/* Glass Shading Reflection */}
        <path
          d="M48 65 C48 160, 68 210, 95 220"
          fill="none"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Suspended Organic Lemon Slice */}
        {phase !== 'blue' && (
          <motion.g
            initial={{ y: -50, opacity: 0, rotate: -25 }}
            animate={{ y: 0, opacity: 1, rotate: 12 }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            <circle cx="155" cy="58" r="26" fill="#FACC15" stroke="#EAB308" strokeWidth="2" />
            <circle cx="155" cy="58" r="20" fill="#FEF08A" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => {
              const rad = (ang * Math.PI) / 180
              return (
                <line
                  key={i}
                  x1="155"
                  y1="58"
                  x2={155 + 18 * Math.cos(rad)}
                  y2={58 + 18 * Math.sin(rad)}
                  stroke="#CA8A04"
                  strokeWidth="1.2"
                  opacity="0.6"
                />
              )
            })}
          </motion.g>
        )}

        {/* Falling citrus drops during squeeze */}
        {phase === 'squeezing' && (
          <motion.g
            initial={{ y: 40, opacity: 1 }}
            animate={{ y: 90, opacity: 0 }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            <circle cx="140" cy="70" r="3" fill="#FACC15" />
            <circle cx="132" cy="85" r="2.5" fill="#FEF08A" />
          </motion.g>
        )}
      </svg>

      {/* Atmospheric Backlight Glow */}
      <div
        className="absolute w-52 h-52 rounded-full blur-3xl opacity-35 -z-10 transition-colors duration-1000"
        style={{
          background:
            phase === 'violet'
              ? 'radial-gradient(circle, #7A1FD8 0%, transparent 70%)'
              : 'radial-gradient(circle, #0F44A0 0%, transparent 70%)',
        }}
      />
    </div>
  )
}

const ColorTransform: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('blue')

  const handleAddLemon = () => {
    setPhase('squeezing')
    setTimeout(() => {
      setPhase('violet')
    }, 1400)
  }

  const handleReset = () => {
    setPhase('blue')
  }

  return (
    <div className="card-vineyard-dark p-8 md:p-12 border border-gold/30 shadow-2xl relative overflow-hidden">
      {/* Subtle gold grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Sommelier's Tasting Glass Display */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-none bg-estate-950/70 border border-gold/20">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-gold" />
            Sensory Sommelier Glass
          </span>

          <LuxuryWineGlassSVG phase={phase} />

          {/* Liquid Status Indicator */}
          <div className="w-full mt-4 pt-4 border-t border-gold/15 flex items-center justify-between text-xs">
            <div>
              <span className="text-[10px] uppercase tracking-[0.18em] text-stone-400 block">
                pH Chemistry Readout
              </span>
              <span className="font-mono text-sm font-semibold text-gold-light">
                {phase === 'blue'
                  ? 'pH 7.2 (Neutral Terroir)'
                  : phase === 'squeezing'
                  ? 'pH 5.4 (Alchemical Transition)'
                  : 'pH 4.1 (Active Citrus Violet)'}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-[0.18em] text-stone-400 block">
                Ternatin Pigment
              </span>
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{
                  color: phase === 'violet' ? '#A78BFA' : '#60A5FA',
                }}
              >
                {phase === 'violet' ? 'Violet Form' : 'Sapphire Form'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Story, Sensory Details & Interactive Controls */}
        <div className="lg:col-span-7 space-y-6 text-parchment-light">
          <div>
            <span className="section-tag">Nature's Alchemical Phenotype</span>
            <h3 className="section-heading-dark text-3xl sm:text-4xl mt-1 mb-3">
              Witness The Colour Shift
            </h3>
            <div className="gold-divider-left" />
            <p className="text-parchment-light/75 text-sm sm:text-base leading-relaxed font-sans">
              Unlike commercial beverages packed with synthetic FD&amp;C Blue No. 1 or artificial dyes, Caffibloom's mesmerising azure infusion comes from <strong>polyacylated ternatins</strong> — rare botanical anthocyanin pigments that physically alter their light absorbance when exposed to natural citrus acids.
            </p>
          </div>

          {/* Sensory Tasting Comparison Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className={`p-4 border transition-all duration-300 ${
                phase === 'blue'
                  ? 'bg-sapphire/20 border-sapphire-light'
                  : 'bg-estate-950/50 border-gold/10 opacity-70'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sapphire-light shadow-sm" />
                <h4 className="font-serif text-lg text-parchment-light">
                  Midnight Sapphire
                </h4>
              </div>
              <p className="text-xs text-parchment-light/70 leading-relaxed">
                <strong>Profile:</strong> Pure botanical infusion. Velvet-smooth, soothing woodruff with subtle nutty undertones and clean mineral finish.
              </p>
            </div>

            <div
              className={`p-4 border transition-all duration-300 ${
                phase === 'violet'
                  ? 'bg-violet/20 border-violet-light'
                  : 'bg-estate-950/50 border-gold/10 opacity-70'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-violet-light shadow-sm" />
                <h4 className="font-serif text-lg text-parchment-light">
                  Imperial Violet
                </h4>
              </div>
              <p className="text-xs text-parchment-light/70 leading-relaxed">
                <strong>Profile:</strong> Activated with citrus. Sparkling crisp floral lift, light fruit acidity, bright restorative palate.
              </p>
            </div>
          </div>

          {/* Verification Callout */}
          <div className="p-4 bg-estate-950/80 border border-gold/20 flex items-start gap-3">
            <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="text-xs text-parchment-light/80 leading-relaxed">
              <strong className="text-gold-light">Botanical Integrity Guarantee:</strong> 100% Clitoria ternatea flowers. Zero artificial colourants, no synthetic stabilizers, no sugar. Reversible, natural pH reaction.
            </p>
          </div>

          {/* Interactive Trigger Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {phase === 'blue' && (
              <motion.button
                onClick={handleAddLemon}
                className="btn-luxury-gold flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Droplets className="w-4 h-4" />
                Infuse Citrus Slice
              </motion.button>
            )}

            {phase === 'squeezing' && (
              <button
                disabled
                className="btn-luxury-outline opacity-80 cursor-wait flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 animate-spin text-gold" />
                Transforming Pigments…
              </button>
            )}

            {phase === 'violet' && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-gold-shimmer">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Nature's Magic Revealed</span>
                </div>
                <button
                  onClick={handleReset}
                  className="btn-luxury-outline flex items-center gap-2 text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Tasting Glass
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorTransform
