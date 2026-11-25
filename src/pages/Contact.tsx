import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Sparkles } from 'lucide-react'

const tastingFaqs = [
  {
    q: 'Does Caffibloom contain any caffeine or stimulant derivatives?',
    a: 'Absolutely none (0.00%). Unlike black, green, or white tea which originate from Camellia sinensis, Caffibloom is an endogenously caffeine-free flower infusion from Clitoria ternatea. It can be savoured immediately prior to sleep with zero nervous agitation.',
  },
  {
    q: 'How does the blue-to-violet colour shift occur without synthetic additives?',
    a: 'The colour shift is a natural pH optical indicator reaction. Butterfly Pea petals contain polyacylated ternatins (anthocyanin flavonoids). At neutral pH (~7.0), the molecule absorbs yellow-red light, presenting sapphire blue. When exposed to citric acid in lemon or lime juice (lowering pH to ~4.0), the molecule protonates into a violet flavylium structure. Zero artificial dyes are present.',
  },
  {
    q: 'Can Caffibloom be enjoyed chilled or as a cold-brew infusion?',
    a: 'Exceptionally so. While hot brewing yields rich, grounding floral notes, cold-steeping in refrigerated water for 4–6 hours yields an ultra-crisp, refreshing azure water. Add sparkling water and a citrus squeeze for an exquisite non-alcoholic botanical spritz.',
  },
  {
    q: 'How should the botanical canisters be cellared after arrival?',
    a: 'Store your Caffibloom canister in a cool, dry cupboard away from direct ultraviolet sunlight. Keep the lid sealed tightly between infusions to preserve the fragile aromatic terpenes. Best enjoyed within 18 months of harvest.',
  },
  {
    q: 'Do you offer private tasting flights for cafes, offices, or events?',
    a: 'Yes. We curate B2B tasting sets and wholesale botanical shipments for specialty cafés, wellness retreats, and corporate offices across India. Use the contact form below or reach our Sommelier Concierge via WhatsApp.',
  },
]

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: 'Tasting Inquiries',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-parchment-light">
      {/* Dark Cellar Header */}
      <section className="bg-estate-950 text-parchment-light py-20 px-4 sm:px-6 lg:px-8 border-b border-gold/25 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-tag text-gold">Tasting Room &bull; Concierge Desk</span>
          <h1 className="font-serif text-4xl sm:text-6xl mt-2 mb-3 text-parchment-light">
            Connect With The Estate
          </h1>
          <div className="gold-divider" />
          <p className="text-stone-300 text-sm sm:text-base font-sans font-light max-w-xl mx-auto">
            Whether inquiring about private allocations, café partnerships, or academic evaluation, our team welcomes your correspondence.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Form */}
          <div className="lg:col-span-7">
            <div className="card-vineyard-light p-8 md:p-10 border-stone-300">
              <span className="section-tag">Direct Cellar Dispatch</span>
              <h2 className="font-serif text-3xl text-estate-950 mt-1 mb-6">
                Transmit a Message
              </h2>

              {sent ? (
                <div className="p-8 bg-parchment border border-gold/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center bg-estate-950 text-gold mx-auto">
                    🌸
                  </div>
                  <h3 className="font-serif text-2xl text-estate-950">
                    Message Received
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                    Thank you for connecting with the Caffibloom Cellar. A member of our concierge or founding team will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-luxury-dark text-[10px] py-2 px-4 mt-2"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase tracking-wider text-stone-500 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Maya Iyer"
                        className="w-full px-4 py-3 bg-white border border-stone-300 text-estate-950 focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block uppercase tracking-wider text-stone-500 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="patron@domain.com"
                        className="w-full px-4 py-3 bg-white border border-stone-300 text-estate-950 focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-stone-500 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={form.topic}
                      onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-stone-300 text-estate-950 focus:outline-none focus:border-gold"
                    >
                      <option value="Tasting Inquiries">Personal Tasting &amp; Orders</option>
                      <option value="Café Wholesale">Café &amp; Restaurant Wholesale</option>
                      <option value="Corporate Wellness">Corporate Wellness &amp; Gifting</option>
                      <option value="Academic Evaluation">Academic Project Evaluation / Faculty</option>
                      <option value="Press & Media">Press, Sommelier, &amp; Media</option>
                    </select>
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-stone-500 mb-1">
                      Your Correspondence *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Detail your inquiry, wholesale requirements, or evaluative queries..."
                      className="w-full px-4 py-3 bg-white border border-stone-300 text-estate-950 focus:outline-none focus:border-gold resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-luxury-dark py-3.5 text-xs w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-gold" />
                    <span>Transmit Inquiry to Estate</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Info & Concierge */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-vineyard-dark p-8 border-gold/30 text-parchment-light space-y-6">
              <span className="section-tag text-gold">Direct Concierge</span>
              <h3 className="font-serif text-2xl text-parchment-light">
                Cellar Head &bull; Bangalore
              </h3>

              <div className="space-y-4 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-parchment-light block">Tasting Cellar &amp; HQ:</strong>
                    <span>Caffibloom Botanical Estate, 100ft Road, Indiranagar, Bangalore, Karnataka 560038</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <div>
                    <strong className="text-parchment-light block">Direct Phone:</strong>
                    <span>+91 98765 43210</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  <div>
                    <strong className="text-parchment-light block">Electronic Dispatch:</strong>
                    <span>curator@caffibloom.in</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                  <div>
                    <strong className="text-parchment-light block">Cellar Hours:</strong>
                    <span>Monday &ndash; Saturday: 10:00 &ndash; 19:00 IST</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-gold/20">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-luxury-gold text-xs py-3.5 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-950" />
                  <span>Instant WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tasting FAQs */}
        <div className="mt-20 pt-16 border-t border-stone-200">
          <div className="text-center mb-12">
            <span className="section-tag">Cellar Lore &amp; Protocol</span>
            <h2 className="section-heading-light text-3xl sm:text-4xl mt-1">
              Frequently Clarified Queries
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {tastingFaqs.map((faq, i) => (
              <div
                key={i}
                className="card-vineyard-light border-stone-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 font-serif text-lg text-estate-950 flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  <span className="text-gold-dark text-xl font-mono">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans border-t border-stone-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
