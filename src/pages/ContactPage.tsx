import { useState } from 'react'
import { Link } from 'react-router-dom'

// ─────────────────────────────────────────────
// Wizard data
// ─────────────────────────────────────────────
const STEP1_OPTIONS = [
  { id: 'new', icon: '🚀', label: 'New Website', desc: 'Build from scratch' },
  { id: 'redesign', icon: '🎨', label: 'Redesign', desc: 'Refresh existing site' },
  { id: 'maintenance', icon: '🔧', label: 'Maintenance', desc: 'Ongoing support plan' },
  { id: 'consult', icon: '💬', label: 'Consultation', desc: 'Strategy & advice' },
]

const STEP2_OPTIONS = [
  { id: 'starter', label: '₹15k – ₹40k', tag: 'Starter' },
  { id: 'growth', label: '₹40k – ₹1L', tag: 'Growth' },
  { id: 'pro', label: '₹1L – ₹3L', tag: 'Professional' },
  { id: 'enterprise', label: '₹3L+', tag: 'Enterprise' },
]

const STEP3_OPTIONS = [
  { id: 'asap', label: 'ASAP', sub: 'Within 2 weeks' },
  { id: 'month', label: '1 Month', sub: 'Standard delivery' },
  { id: 'quarter', label: '2–3 Months', sub: 'Full build' },
  { id: 'flexible', label: 'Flexible', sub: 'No rush' },
]

const QUOTE_MAP: Record<string, string> = {
  'new-starter': '₹15,000 – ₹40,000',
  'new-growth': '₹40,000 – ₹1,00,000',
  'new-pro': '₹1,00,000 – ₹3,00,000',
  'new-enterprise': '₹3,00,000+',
  'redesign-starter': '₹10,000 – ₹30,000',
  'redesign-growth': '₹30,000 – ₹80,000',
  'redesign-pro': '₹80,000 – ₹2,50,000',
  'redesign-enterprise': '₹2,50,000+',
  'maintenance-starter': '₹3,000/mo',
  'maintenance-growth': '₹8,000/mo',
  'maintenance-pro': '₹15,000/mo',
  'maintenance-enterprise': 'Custom retainer',
  'consult-starter': '₹5,000',
  'consult-growth': '₹5,000',
  'consult-pro': '₹10,000',
  'consult-enterprise': '₹15,000',
}

function getEstimate(type: string, budget: string) {
  return QUOTE_MAP[`${type}-${budget}`] ?? 'Custom quote'
}

// ─────────────────────────────────────────────
// Step indicator
// ─────────────────────────────────────────────
function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="wizard-steps">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`wizard-step-dot ${i < current ? 'done' : i === current ? 'active' : ''}`} />
      ))}
      <span className="wizard-step-label">Step {current + 1} of {total}</span>
    </div>
  )
}

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
export default function ContactPage() {
  const [step, setStep] = useState(0)
  const [projectType, setProjectType] = useState('')
  const [budget, setBudget] = useState('')
  const [timeline, setTimeline] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', org: '', url: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const estimate = projectType && budget ? getEstimate(projectType, budget) : null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="pt-20">
      {/* ── Hero ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-container pt-24 pb-32 px-6 md:px-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-on-tertiary-container blur-[100px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-semibold text-xs tracking-wider mb-6 uppercase">
            Let's Connect
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
            Let's Discuss <br /><span className="text-on-tertiary-container">Your Project</span>
          </h1>
          <p className="max-w-2xl mx-auto text-on-primary-container text-lg md:text-xl leading-relaxed mb-10">
            Answer 4 quick questions and we'll give you an instant estimate — no calls required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-container transition-all shadow-lg" href="#wizard">
              Start the Wizard ↓
            </a>
            <a className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all" href="mailto:hello@crosstech.com">
              Email Us Directly
            </a>
          </div>
          {/* Quick trust row */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-on-primary-container/70">
            <span>✅ Reply within 2 hours</span>
            <span>🔒 Your info stays private</span>
            <span>🆓 Free initial consultation</span>
          </div>
        </div>
      </section>

      {/* ── Contact Option Cards ─────────────────── */}
      <section className="py-16 px-6 md:px-8 -mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'lightbulb', title: 'Project Inquiry', desc: 'Best for new builds, redesigns, and partnerships.', action: 'Use the wizard ↓', href: '#wizard' },
              { icon: 'chat', title: 'WhatsApp', desc: "One tap and you're chatting with our team directly.", action: 'Chat now', href: 'https://wa.me/919876543210?text=Hi%20CrossTech!' },
              { icon: 'mail', title: 'Email', desc: 'For detailed briefs or media requests.', action: 'hello@crosstech.com', href: 'mailto:hello@crosstech.com' },
            ].map((opt) => (
              <div key={opt.title} className="bg-surface-container-lowest p-8 rounded-xl shadow-md hover:translate-y-[-4px] transition-all duration-300 border border-outline-variant/10 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-secondary">{opt.icon}</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-3">{opt.title}</h3>
                  <p className="text-on-surface-variant mb-6 leading-relaxed text-sm">{opt.desc}</p>
                </div>
                <a className="inline-flex items-center text-secondary font-bold text-sm hover:gap-3 transition-all gap-1" href={opt.href} target={opt.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {opt.action} <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wizard Section ───────────────────────── */}
      <section className="py-20 px-6 md:px-8 bg-surface-container-low" id="wizard">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-extrabold mb-3">Get Your Instant Estimate</h2>
            <p className="text-on-surface-variant text-lg">4 quick questions. No fluff. Real numbers.</p>
          </div>

          {submitted ? (
            /* ── Success State ── */
            <div className="bg-surface-container-lowest rounded-2xl p-12 text-center shadow-lg border border-outline-variant/10">
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="text-3xl font-bold font-headline mb-4">We've got your message!</h3>
              <p className="text-on-surface-variant text-lg mb-8">
                Expect a reply from our team within <strong>2 business hours</strong>.<br />
                In the meantime, feel free to browse our work.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/work" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-container transition-all">
                  See Our Work
                </Link>
                <button onClick={() => { setSubmitted(false); setStep(0); setProjectType(''); setBudget(''); setTimeline('') }} className="border border-outline-variant px-8 py-4 rounded-xl font-bold hover:bg-surface-container transition-all">
                  Start Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-surface-container-lowest rounded-2xl p-8 md:p-12 shadow-lg border border-outline-variant/10">
              {/* Estimated quote banner (shows from step 2+) */}
              {estimate && (
                <div className="mb-8 p-5 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center gap-4">
                  <span className="text-3xl">💡</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-0.5">Estimated Investment</p>
                    <p className="text-2xl font-black text-primary">{estimate}</p>
                    <p className="text-xs text-on-surface-variant">Based on your selections — final quote after our call.</p>
                  </div>
                </div>
              )}

              <StepIndicator current={step} total={4} />

              {/* ── Step 1: Project Type ── */}
              {step === 0 && (
                <div className="wizard-step-content">
                  <h3 className="text-2xl font-bold font-headline mb-2">What do you need?</h3>
                  <p className="text-on-surface-variant mb-8">Choose the option that best describes your project.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {STEP1_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => { setProjectType(opt.id); setStep(1) }}
                        className={`wizard-option-card ${projectType === opt.id ? 'wizard-option-card--selected' : ''}`}
                      >
                        <span className="text-4xl mb-3 block">{opt.icon}</span>
                        <span className="font-bold text-sm block mb-1">{opt.label}</span>
                        <span className="text-xs text-on-surface-variant">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Step 2: Budget ── */}
              {step === 1 && (
                <div className="wizard-step-content">
                  <h3 className="text-2xl font-bold font-headline mb-2">What's your budget range?</h3>
                  <p className="text-on-surface-variant mb-8">We'll suggest the right approach for your investment.</p>
                  <div className="grid grid-cols-2 gap-4">
                    {STEP2_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => { setBudget(opt.id); setStep(2) }}
                        className={`wizard-option-card wizard-option-card--budget ${budget === opt.id ? 'wizard-option-card--selected' : ''}`}
                      >
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">{opt.tag}</span>
                        <span className="block text-xl font-black">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep(0)} className="mt-6 text-sm text-on-surface-variant hover:text-primary transition-colors">← Back</button>
                </div>
              )}

              {/* ── Step 3: Timeline ── */}
              {step === 2 && (
                <div className="wizard-step-content">
                  <h3 className="text-2xl font-bold font-headline mb-2">When do you need it?</h3>
                  <p className="text-on-surface-variant mb-8">We'll plan our capacity around your timeline.</p>
                  <div className="grid grid-cols-2 gap-4">
                    {STEP3_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => { setTimeline(opt.id); setStep(3) }}
                        className={`wizard-option-card ${timeline === opt.id ? 'wizard-option-card--selected' : ''}`}
                      >
                        <span className="block font-bold text-lg mb-1">{opt.label}</span>
                        <span className="block text-sm text-on-surface-variant">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep(1)} className="mt-6 text-sm text-on-surface-variant hover:text-primary transition-colors">← Back</button>
                </div>
              )}

              {/* ── Step 4: Contact Details ── */}
              {step === 3 && (
                <div className="wizard-step-content">
                  <h3 className="text-2xl font-bold font-headline mb-2">Almost there — your details</h3>
                  <p className="text-on-surface-variant mb-8">We'll reach out with your custom plan within 2 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-on-surface-variant mb-1.5">Your Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Ravi Sharma"
                          className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/40 focus:bg-white transition-all outline-none"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-on-surface-variant mb-1.5">Email *</label>
                        <input
                          required
                          type="email"
                          placeholder="you@company.com"
                          className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/40 focus:bg-white transition-all outline-none"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-on-surface-variant mb-1.5">Phone (WhatsApp preferred)</label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/40 focus:bg-white transition-all outline-none"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-on-surface-variant mb-1.5">Organisation / Company</label>
                        <input
                          type="text"
                          placeholder="Your firm name"
                          className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/40 focus:bg-white transition-all outline-none"
                          value={form.org}
                          onChange={(e) => setForm({ ...form, org: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-on-surface-variant mb-1.5">Current website (if any)</label>
                      <input
                        type="url"
                        placeholder="https://yoursite.com"
                        className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/40 focus:bg-white transition-all outline-none"
                        value={form.url}
                        onChange={(e) => setForm({ ...form, url: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-on-surface-variant mb-1.5">Anything else we should know?</label>
                      <textarea
                        rows={3}
                        placeholder="Goals, challenges, specific features you need..."
                        className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/40 focus:bg-white transition-all outline-none resize-none"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>

                    {/* Summary */}
                    <div className="bg-surface-container p-5 rounded-xl text-sm space-y-1">
                      <p className="font-bold text-on-surface mb-2">📋 Your Project Summary</p>
                      <p><span className="text-on-surface-variant">Type:</span> <strong>{STEP1_OPTIONS.find(o => o.id === projectType)?.label}</strong></p>
                      <p><span className="text-on-surface-variant">Budget:</span> <strong>{STEP2_OPTIONS.find(o => o.id === budget)?.label}</strong></p>
                      <p><span className="text-on-surface-variant">Timeline:</span> <strong>{STEP3_OPTIONS.find(o => o.id === timeline)?.label}</strong></p>
                      {estimate && <p className="mt-2"><span className="text-on-surface-variant">Estimate:</span> <strong className="text-secondary">{estimate}</strong></p>}
                    </div>

                    <button type="submit" className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-primary-container transition-all shadow-xl">
                      Send My Inquiry →
                    </button>
                    <p className="text-center text-xs text-on-surface-variant">We reply within 2 hours · No spam · 100% free</p>
                  </form>
                  <button onClick={() => setStep(2)} className="mt-4 text-sm text-on-surface-variant hover:text-primary transition-colors">← Back</button>
                </div>
              )}
            </div>
          )}

          {/* Skip to plain form link */}
          <p className="text-center mt-6 text-sm text-on-surface-variant">
            Prefer a plain form?{' '}
            <a href="mailto:hello@crosstech.com" className="text-secondary font-bold underline">Email us directly</a>
          </p>
        </div>
      </section>

      {/* ── What to Expect ───────────────────────── */}
      <section className="py-20 px-6 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">What Happens Next</h2>
          <p className="text-on-surface-variant text-lg">A predictable, pressure-free process.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { n: '01', icon: '📬', title: 'We Review', desc: 'Our team reads your inquiry and prepares a specific response — no generic replies.' },
            { n: '02', icon: '📞', title: 'Quick Call', desc: 'A 20-minute call to align on scope, timeline, and approach.' },
            { n: '03', icon: '📄', title: 'Proposal', desc: 'You receive a clear proposal with pricing, milestones, and what to expect.' },
            { n: '04', icon: '🚀', title: 'We Build', desc: 'Project kicks off with a dedicated team and weekly progress updates.' },
          ].map((s) => (
            <div key={s.n} className="text-center p-8 bg-white rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{s.icon}</div>
              <div className="text-xs font-bold tracking-widest text-secondary uppercase mb-2">{s.n}</div>
              <h4 className="font-bold text-xl mb-3">{s.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section className="py-20 px-6 md:px-8 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl font-extrabold text-on-surface text-center mb-14">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How long does a typical website project take?', a: 'Most builds take 8–14 weeks end-to-end. We can fast-track in 2–3 weeks for simpler scopes.' },
              { q: 'Do you provide maintenance after launch?', a: 'Yes. We offer structured plans (Essential, Growth, Partnership) covering security, backups, and content updates.' },
              { q: 'Can you redesign an existing site while keeping our content?', a: 'Absolutely. We migrate and optimise your existing content as part of the redesign process.' },
              { q: "What if I don't know my exact budget?", a: "That's fine — the wizard ranges are just starting points. Tell us your goals and we'll find the right fit." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white p-6 rounded-xl border border-outline-variant/10">
                <details className="group">
                  <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none">
                    {faq.q}
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="pt-4 text-on-surface-variant leading-relaxed">{faq.a}</div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Direct Details ───────────────────────── */}
      <section className="py-20 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-primary p-12 rounded-2xl text-white flex flex-col justify-center">
            <h3 className="font-headline text-3xl font-bold mb-8">Direct Details</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-tertiary-container">mail</span>
                </div>
                <div>
                  <span className="block text-white/60 text-sm">General Email</span>
                  <a className="text-xl font-bold hover:text-on-tertiary-container transition-colors" href="mailto:hello@crosstech.com">hello@crosstech.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-tertiary-container">chat</span>
                </div>
                <div>
                  <span className="block text-white/60 text-sm">WhatsApp</span>
                  <a className="text-xl font-bold hover:text-on-tertiary-container transition-colors" href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">+91 98765 43210</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-tertiary-container">location_on</span>
                </div>
                <div>
                  <span className="block text-white/60 text-sm">Based in</span>
                  <span className="text-xl font-bold">India · Serving Globally</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-12 rounded-2xl flex flex-col justify-center">
            <div className="text-5xl mb-6">⚡</div>
            <h3 className="font-headline text-2xl font-bold mb-4">Response Promise</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              We guarantee a response within <strong>2 business hours</strong> during working hours (Mon–Sat, 9 AM – 8 PM IST). For urgent requests, WhatsApp is fastest.
            </p>
            <div className="flex flex-col gap-3">
              {[
                '✅ Free initial consultation',
                '🔒 Your brief stays confidential',
                '📊 Transparent pricing — no hidden fees',
                '🤝 No lock-in contracts for first project',
              ].map((item) => (
                <span key={item} className="text-sm font-medium text-on-surface">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
