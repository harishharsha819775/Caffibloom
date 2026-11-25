import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, RotateCcw, Check, Clock, Thermometer, Droplet, Sparkles } from 'lucide-react'

const ritualSteps = [
  {
    stepNum: '01',
    title: 'The Thermal Draw',
    desc: 'Heat pure, filtered spring water to 80°C–85°C (175°F–185°F). Avoid rolling boiling water to preserve the delicate floral aromatics and heat-sensitive ternatins.',
    temp: '85°C / 185°F',
    duration: 180, // 3 mins for water prep
    tag: 'Temperature Precision',
  },
  {
    stepNum: '02',
    title: 'The Blossom Steep',
    desc: 'Measure 2–3 grams (approx. 5–7 whole dried butterfly pea blossoms) into a warmed porcelain or glass brewing vessel. Pour the water gently over the petals.',
    temp: 'Single Measure',
    duration: 360, // 6 mins recommended steep
    tag: 'Extraction',
  },
  {
    stepNum: '03',
    title: 'The Sapphire Infusion',
    desc: 'Allow the blossoms to rest undisturbed for 5 to 7 minutes. Watch the vibrant blue essence unfurl through the crystalline water, creating an enchanting midnight sapphire pool.',
    temp: 'Full Bloom',
    duration: 300,
    tag: 'Anthocyanin Saturation',
  },
  {
    stepNum: '04',
    title: 'The Alchemical Finish',
    desc: 'Serve as a contemplative sapphire tea, or squeeze in fresh organic lemon juice. In seconds, watch the liquid shift into imperial electric violet with a bright citrus nose.',
    temp: 'Serve & Savor',
    duration: 0,
    tag: 'Citrus Activation',
  },
]

const BrewingGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1) // Step 2 (infusion) by default
  const [timerRunning, setTimerRunning] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const current = ritualSteps[activeStep]
  const totalTime = current.duration
  const pct = totalTime > 0 ? Math.min((elapsed / totalTime) * 100, 100) : 100

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const startTimer = () => {
    if (timerRunning || totalTime === 0) return
    setTimerRunning(true)
    intervalRef.current = setInterval(() => {
      setElapsed((e) => {
        if (e >= totalTime) {
          clearInterval(intervalRef.current!)
          setTimerRunning(false)
          return totalTime
        }
        return e + 1
      })
    }, 1000)
  }

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setTimerRunning(false)
    setElapsed(0)
  }

  const handleSelectStep = (index: number) => {
    resetTimer()
    setActiveStep(index)
  }

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, '0')
    const s = (secs % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }

  return (
    <div className="card-vineyard-dark p-8 md:p-12 border border-gold/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Step Selector Column */}
        <div className="lg:col-span-5 space-y-3">
          <span className="section-tag">Cellar Infusion Ritual</span>
          <h3 className="section-heading-dark text-2xl sm:text-3xl mb-4">
            The Sommelier's 4-Step Brew
          </h3>
          <div className="gold-divider-left mb-6" />

          <div className="space-y-3">
            {ritualSteps.map((s, i) => (
              <button
                key={s.stepNum}
                onClick={() => handleSelectStep(i)}
                className={`w-full text-left p-4 border transition-all duration-300 flex items-center justify-between ${
                  activeStep === i
                    ? 'bg-estate-850 border-gold shadow-gold text-parchment-light'
                    : 'bg-estate-950/60 border-gold/15 text-stone-400 hover:border-gold/40 hover:text-parchment-light'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-sm tracking-widest font-bold ${
                      activeStep === i ? 'text-gold' : 'text-stone-600'
                    }`}
                  >
                    {s.stepNum}
                  </span>
                  <div>
                    <h4 className="font-serif text-lg tracking-wide">
                      {s.title}
                    </h4>
                    <span className="text-[10px] tracking-wider uppercase text-gold-dark/80 block">
                      {s.tag}
                    </span>
                  </div>
                </div>

                {activeStep === i && (
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active Step & Precision Timer */}
        <div className="lg:col-span-7 bg-estate-950/80 p-8 border border-gold/20 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between text-xs text-gold-shimmer pb-4 border-b border-gold/15 mb-6">
              <span className="tracking-[0.2em] uppercase font-semibold text-gold">
                Step {current.stepNum} of 04 &bull; {current.tag}
              </span>
              <span className="flex items-center gap-1.5 text-stone-400">
                <Thermometer className="w-3.5 h-3.5 text-gold" />
                {current.temp}
              </span>
            </div>

            <h3 className="font-serif text-3xl text-parchment-light mb-3">
              {current.title}
            </h3>
            <p className="text-parchment-light/75 text-sm sm:text-base leading-relaxed font-sans mb-8">
              {current.desc}
            </p>
          </div>

          {/* Interactive Precision Steeping Clock */}
          {totalTime > 0 ? (
            <div className="pt-6 border-t border-gold/15">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#172033"
                        strokeWidth="5"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#C5A880"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 42}`}
                        strokeDashoffset={`${
                          2 * Math.PI * 42 * (1 - pct / 100)
                        }`}
                        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <Clock className="w-4 h-4 text-gold mb-0.5" />
                      <span className="font-mono text-xs font-bold text-parchment-light">
                        {formatTime(totalTime - elapsed)}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 block">
                      Recommended Extraction Time
                    </span>
                    <span className="font-serif text-xl text-gold-shimmer">
                      {Math.floor(totalTime / 60)} Minutes Precision
                    </span>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      {elapsed >= totalTime
                        ? 'Extraction complete! Ready to pour.'
                        : 'Slow infusion preserves aromatics and polyphenols.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={startTimer}
                    disabled={timerRunning || elapsed >= totalTime}
                    className="btn-luxury-gold py-2.5 px-5 text-[10px] flex items-center gap-2 disabled:opacity-50"
                  >
                    <Play className="w-3.5 h-3.5" />
                    {timerRunning ? 'Infusing…' : 'Start Timer'}
                  </button>
                  <button
                    onClick={resetTimer}
                    className="btn-luxury-outline py-2.5 px-4 text-[10px] flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-estate-900 border border-gold/30 flex items-center justify-between text-xs text-parchment-light">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-gold" />
                <span>
                  <strong>Sommelier Note:</strong> Pour over crushed crystal ice for an invigorating botanical spritz.
                </span>
              </div>
              <span className="text-gold font-serif text-sm italic">
                A Votre Santé
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BrewingGuide
