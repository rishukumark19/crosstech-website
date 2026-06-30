import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold uppercase tracking-widest mb-6">
              About CrossTech
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary font-headline leading-[1.1] tracking-tight mb-8">
              A Website Partner Focused on Clarity, Reliability, and Long-Term Support
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              CrossTech helps organizations build better websites and keep them professional, secure, and easier to manage over time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary-container transition-all shadow-lg shadow-secondary/20"
              >
                Get a Free Consultation
              </Link>
              <Link
                to="/work"
                className="bg-surface-container-highest text-secondary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-surface-bright transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl rotate-3 bg-surface-container-high">
              <img
                alt="Modern professional office"
                className="w-full h-full object-cover grayscale-[20%] contrast-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWx_fxIEMi_DEX73lsL6VP6Edz6zmaC9693J_nA63f-f7eqYzncBZtLMubCRmFoz4qCy-A1V-e3mbarJZl8ztBHh_vxWYhkI0QKb-jHZRZXyVpxDvSS86O3nNILK8I3LO0X3xcQAOnHXx3JpYpy06DqjXL7c0QGrsLB2MF9eVGr1f_7bzg9Q7zgf2CfnQGQlRbUVh1xJUtLQbpwImnvSx3m1TZ9V9xxnpip8ho_LZJsLno4M4PBcz09N5EkLnUWRpfYwgEXyrGTLs"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs border-l-4 border-on-tertiary-container">
              <p className="text-on-surface italic font-medium">
                "We don't just launch sites; we stay to ensure they continue to work for you."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-surface-container-low px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img
              alt="Team collaboration"
              className="rounded-3xl shadow-lg w-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfHwjWOtm5hl5QwPDK1s4XG2DjjBDEDOogW6A5MIefSsLsTHY-FewXWxEXOSVaFTgK9yiVvJ_DpXHKPJrI5MQ6DvyrEc0NJglARz3v4K1Birb76_N8-ZFDQtm8_TFV4agSCww0MOiy6r0F2qQdrJ4peSFFM6AYybNlkxj7EP0V_CVeZqHtTo4XOPbk18NlmDDKn11kG-OzX7x6gYYPGE2y7HqUIKPZfxOLRXKDuIcSsvA4jH1eO8HMh4che71UuFqEWJRBGIeoBoc"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-extrabold text-primary font-headline mb-6">Why CrossTech Exists</h2>
            <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
              Many organizations end up with websites that are outdated, difficult to update, or unsupported after launch. CrossTech exists to help them build websites that are easier to trust, easier to use, and easier to maintain over time.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs / Values */}
      <section className="py-32 px-6 md:px-8 bg-surface">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-extrabold text-primary font-headline mb-4">
            What We Believe Good Website Work Looks Like
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: 'visibility', title: 'Clarity over clutter', desc: 'We prioritize clear messaging and intuitive navigation so your visitors find exactly what they need without friction.' },
            { icon: 'shield', title: 'Professional trust-building', desc: "Design isn't just about looks; it's about establishing credibility through professional standards and security." },
            { icon: 'smartphone', title: 'Mobile-first approach', desc: 'Most interactions happen on small screens. We build from the palm of the hand outward, never as an afterthought.' },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-surface-container-lowest p-10 rounded-[2rem] transition-all hover:-translate-y-2 hover:shadow-xl group"
            >
              <div className="w-14 h-14 bg-surface-container-highest rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary group-hover:text-white">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 font-headline">{item.title}</h3>
              <p className="text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-primary text-on-primary px-6 md:px-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold font-headline mb-6">How We Work With Clients</h2>
              <p className="text-primary-fixed-dim text-lg">
                Our process is clear, practical, and built to make website projects feel easier to manage from start to finish.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { num: '01', title: 'Understand', desc: 'Focus on identifying specific organizational goals and user needs.' },
              { num: '02', title: 'Plan', desc: 'Creating a clear roadmap for site structure, content, and functionality.' },
              { num: '03', title: 'Develop', desc: 'Building with modern, maintainable code focused on speed and reliability.' },
              { num: '04', title: 'Launch', desc: 'Seamless transition to the live site with thorough testing.' },
              { num: '05', title: 'Support', desc: 'Ongoing maintenance, security updates, and performance monitoring.' },
            ].map((step) => (
              <div key={step.num} className="relative">
                <div className="text-6xl font-black text-white/10 absolute -top-10 -left-2">{step.num}</div>
                <h4 className="text-xl font-bold mb-3 mt-4">{step.title}</h4>
                <p className="text-primary-fixed-dim text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-extrabold text-primary font-headline mb-8">Who We Work Best With</h2>
              <div className="space-y-6">
                {[
                  { icon: 'local_hospital', title: 'Hospitals & Clinics', desc: 'Teams that need clear information architecture and patient-centric design.' },
                  { icon: 'account_balance', title: 'Public-Facing Teams', desc: 'Schools and colleges requiring organized resource hubs and easy navigation.' },
                  { icon: 'school', title: 'Institutions & Education', desc: 'Schools and colleges requiring organized resource hubs and easy navigation.' },
                  { icon: 'work', title: 'Service Businesses', desc: 'Professional firms looking to build trust and generate lead inquiries through clear service presentation.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-low p-12 rounded-[2rem]">
              <h2 className="text-3xl font-extrabold text-primary font-headline mb-6">Trusted for Serious Website Work</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                We work with organizations that need their websites to stay clear, dependable, and easy to manage over time.
              </p>
              <div className="grid grid-cols-2 gap-8 opacity-60 grayscale">
                {['HOSPITAL GROUP', 'STATE COUNCIL', 'LEGAL PARTNERS', 'GOV ARCHIVE'].map((name) => (
                  <div key={name} className="h-12 flex items-center justify-center bg-white/50 rounded-lg">
                    <span className="font-bold text-primary tracking-widest text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 md:px-8 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary font-headline mb-4">Practical Questions</h2>
            <p className="text-on-surface-variant">Everything you need to know about partnering with us.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is CrossTech right for a small business?', a: 'We work best with organizations that view their website as a critical utility rather than a one-off project. If you value long-term support and professional reliability, we are a great fit.' },
              { q: 'What does "maintenance" actually include?', a: 'It covers weekly security patching, performance monitoring, regular backups, and a dedicated number of hours each month for content updates or minor improvements.' },
              { q: 'Do you work with existing websites or only new builds?', a: 'We do both. We often inherit websites that have been abandoned by previous developers and bring them up to modern security and performance standards.' },
              { q: 'How long does a typical redesign take?', a: 'Most professional redesigns take between 8 to 12 weeks, depending on the complexity of your content and the functional requirements.' },
              { q: 'What happens if something breaks at 2 AM?', a: 'For our maintenance clients, we have automated monitoring that alerts our team immediately. Critical issues are addressed based on your specific service-level agreement.' },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-2xl p-6 shadow-sm cursor-pointer open:shadow-md transition-all"
              >
                <summary className="flex justify-between items-center font-bold text-primary font-headline list-none">
                  {faq.q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-on-surface-variant leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary-container p-16 md:p-24 rounded-[3rem] text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-8 leading-tight">
                Looking for a Website Partner <br className="hidden md:block" /> You Can Rely On?
              </h2>
              <Link
                to="/contact"
                className="inline-block bg-secondary text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-secondary-container transition-all shadow-2xl scale-100 hover:scale-105 active:scale-95"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
