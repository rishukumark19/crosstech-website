import { Link } from 'react-router-dom'

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-container pt-24 pb-32 px-6 md:px-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-on-tertiary-container blur-[100px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label font-semibold text-xs tracking-wider mb-6 uppercase">Let's Connect</span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
            Let's Discuss <br /><span className="text-on-tertiary-container">Your Project</span>
          </h1>
          <p className="max-w-2xl mx-auto text-on-primary-container text-lg md:text-xl leading-relaxed mb-10">
            Whether you're planning a new build, a redesign, or need ongoing support, we're here to provide practical advice and expert execution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a className="bg-secondary text-white px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-secondary-container transition-all shadow-lg" href="#inquiry">Start an Inquiry</a>
            <a className="bg-surface-container-highest/20 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-white/10 transition-all" href="mailto:hello@crosstech.com">Send an Email</a>
          </div>
          <p className="text-on-primary-container/60 font-label text-sm uppercase tracking-[0.2em]">TRUSTED BY HEALTHCARE, INSTITUTIONAL, AND SERVICE-BASED ORGANIZATIONS.</p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 px-6 md:px-8 -mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'lightbulb', title: 'Project Inquiry', desc: 'The best path for new builds, major redesigns, or exploring a long-term partnership.', action: 'Fill out the form', href: '#inquiry' },
              { icon: 'mail', title: 'General Email', desc: 'For general questions, media requests, or quick follow-ups on existing discussions.', action: 'hello@crosstech.com', href: 'mailto:hello@crosstech.com' },
              { icon: 'support', title: 'Client Support', desc: 'Direct support for existing clients with active maintenance or hosting agreements.', action: 'Access Portal', href: '#' },
            ].map((opt) => (
              <div key={opt.title} className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_24px_48px_rgba(19,27,46,0.06)] hover:translate-y-[-4px] transition-all duration-500 flex flex-col justify-between border border-outline-variant/10">
                <div>
                  <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-secondary">{opt.icon}</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-4">{opt.title}</h3>
                  <p className="text-on-surface-variant mb-8 leading-relaxed">{opt.desc}</p>
                </div>
                <a className="inline-flex items-center text-secondary font-bold hover:gap-2 transition-all" href={opt.href}>
                  {opt.action} <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 px-6 md:px-8 bg-surface-container-low" id="inquiry">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-6">Tell us about your project</h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed mb-8">
                <p>To provide the most helpful response, we ask a few basic questions about your organization and goals.</p>
                <p>One of our leads will review your details and get back to you with clear next steps within one business day.</p>
              </div>
              <div className="flex items-center p-6 bg-white rounded-xl shadow-sm border border-outline-variant/20">
                <span className="material-symbols-outlined text-on-tertiary-container mr-4" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <div>
                  <span className="block font-bold text-on-surface">Our Response Promise</span>
                  <span className="text-on-surface-variant text-sm">We usually reply within 1 business day.</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0px_32px_64px_rgba(19,27,46,0.04)] border border-outline-variant/10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-sm font-semibold text-on-surface-variant">Your Name</label>
                    <input className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/40 focus:bg-white transition-all" placeholder="e.g. Michael Chen" required type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-sm font-semibold text-on-surface-variant">Work Email</label>
                    <input className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/40 focus:bg-white transition-all" placeholder="michael@firm.com" required type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-sm font-semibold text-on-surface-variant">Organization / Company Name</label>
                  <input className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/40 focus:bg-white transition-all" placeholder="Enter your firm or organization name" required type="text" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-sm font-semibold text-on-surface-variant">What do you need help with?</label>
                    <select className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/40 focus:bg-white transition-all">
                      <option>New Website Development</option>
                      <option>Website Redesign</option>
                      <option>Ongoing Maintenance &amp; Support</option>
                      <option>General Consultation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-sm font-semibold text-on-surface-variant">Current Website (if applicable)</label>
                    <input className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/40 focus:bg-white transition-all" placeholder="https://yoursite.com" type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-sm font-semibold text-on-surface-variant">Project Details</label>
                  <textarea className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/40 focus:bg-white transition-all" placeholder="Briefly describe your goals, any specific challenges you're facing, and your target timeline." required rows={5}></textarea>
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-xl font-headline font-bold text-lg hover:bg-primary-container transition-all shadow-xl" type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-24 px-6 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">What You Can Expect</h2>
          <p className="text-on-surface-variant text-lg">We focus on clear results and straightforward collaboration.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: 'chat', title: 'Clear Communication', desc: 'No jargon. We speak in plain terms about project milestones, timelines, and business outcomes.' },
            { icon: 'fact_check', title: 'Practical Advice', desc: 'We only recommend technology and features that serve your specific goals and budget.' },
            { icon: 'alt_route', title: 'Realistic Steps', desc: "You'll receive a transparent roadmap from discovery to launch, with no hidden costs or surprises." },
          ].map((e) => (
            <div key={e.title} className="text-center p-8 bg-white rounded-2xl shadow-sm border border-outline-variant/5">
              <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">{e.icon}</span>
              </div>
              <h4 className="font-bold text-xl mb-4">{e.title}</h4>
              <p className="text-on-surface-variant">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-8 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl font-extrabold text-on-surface text-center mb-16">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How long does a typical website project take?', a: 'Most of our custom builds take between 8 and 14 weeks. This includes full design, development, and testing before we go live.' },
              { q: 'Do you provide maintenance after launch?', a: "Yes. We offer structured maintenance plans that cover security, hosting, and regular content updates so you don't have to worry about the technical side." },
              { q: 'Can you redesign an existing site while keeping our content?', a: 'Absolutely. We often work with firms to refresh their visual identity while migrating and optimizing their existing valuable content.' },
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

      {/* Direct Details & Map */}
      <section className="py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-primary p-12 rounded-xl text-white flex flex-col justify-center">
            <h3 className="font-headline text-3xl font-bold mb-8">Direct Details</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-tertiary-container">mail</span>
                </div>
                <div>
                  <span className="block text-white/60 text-sm font-label">General Email</span>
                  <a className="text-xl font-bold hover:text-on-tertiary-container transition-colors" href="mailto:hello@crosstech.com">hello@crosstech.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-tertiary-container">location_on</span>
                </div>
                <div>
                  <span className="block text-white/60 text-sm font-label">Office Location</span>
                  <span className="text-xl font-bold">New York City, NY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden min-h-[400px] bg-surface-container-high relative">
            <img className="w-full h-full object-cover grayscale opacity-50" alt="Map of Manhattan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHdMUUm9knm9s08wqjyoU_umS1_yuZksczy8RByTwMebt0buiYjp6RQSnbL8Ynf3omG2DwTJsiuAGcjgRDy1iqrYrlJpIN_QVSQd1_wtGw8Utl3quq2OsJBFm7BARFtRpomv7dje2MrfZ3iI8rutGT6Pwwz3leIchm1fuDYj5tMouCL-fDrHOd8OQPZ5Y7iP1xO0N7DhOckRs7IPUsi3IfIAgZFb6f-oY_3Y4CkTRhhskA_fbg1EiGZiQegTw9sL8hKn5IjmgbXJA" />
            <div className="absolute inset-0 bg-secondary/10"></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-8 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto text-center bg-surface-container-low rounded-[2rem] p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary-fixed opacity-20 blur-[80px]"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-6">Need a Website Partner You Can Rely On?</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">If your current website feels outdated, unclear, or difficult to manage, we can help.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a className="bg-primary text-white px-10 py-4 rounded-xl font-headline font-bold text-lg hover:shadow-2xl transition-all" href="#inquiry">Send an Inquiry</a>
              <Link className="bg-white text-primary border border-outline-variant px-10 py-4 rounded-xl font-headline font-bold text-lg hover:bg-surface-container-high transition-all" to="/services">View Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
