import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
const CASE_STUDIES = [
  {
    icon: 'medical_services',
    sector: 'Healthcare Case Study',
    title: 'City Hospital Website Redesign',
    challenge: 'The existing hospital site was outdated and poorly structured, making it difficult for patients to find critical services or book appointments on mobile devices.',
    solution: 'We reorganized the site structure based on how visitors were trying to find information and implemented a responsive, accessible layout optimised for speed and clarity.',
    result: '"Significant improvement in information access speed and a notable reduction in user support inquiries regarding navigation."',
    metrics: ['↑ 40% faster load time', '↓ 60% support tickets', '3 weeks delivery'],
    stack: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR8UtzwFesYfMgVk8FG7mmW5VShBNH0H_YO5w7h1OLDvB3Uso0ZrbxgmL3e4e2Xx3LSDJ4LfqGEN9oZ1649VYUzICmyS_sMo9MlKWLMB1jLxHohmTq7mILNnPRnB43AQVUGYDdXxlcemIhglKN8QXS1tfi1Sb2dwTCYUGJ9fY4iUVaZ0-9b0C4hi6UwoVFFf307P_a3-hRI4ZeBzWSpbYU7_KSOAvuxkSwfqGCqpCKBRZIo8vTW6JkaCRlLBM79mkrMYDkG32Y',
    liveUrl: '#',
    order: 'left',
  },
  {
    icon: 'campaign',
    sector: 'Political Case Study',
    title: 'Campaign Portal for State Representative',
    challenge: 'The campaign needed a way to push rapid updates and maintain public trust through a transparent, high-performance information hub during peak cycles.',
    solution: 'A mobile-first responsive structure designed for high traffic during major campaign updates, featuring a streamlined content management workflow for real-time announcements.',
    result: '"Better public communication and a platform that remained stable under intense visitor spikes during key events."',
    metrics: ['↑ 2.8× mobile traffic', '99.98% uptime during campaign', '11 days delivery'],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Cloudflare'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbKlrLfm0ac9QPBC8QWnw_GLqbTBZPF6nVQuXrX-zyWK2n8bvF-Btu2uLuTlcrSEotPNEGHpa7efSFQQrcgvP2a09ytCvjE79HUQP0bxDs30Knf3QKthAn64rYixm9B0y4DlJcoPw-COvMKQl7YnuL_4llZZjRK_Xy3ojumBYY5Jdq2u4gkxyzIFzHxARBPHlrEi4GXYey-0ZgeQNkj3iiDYWgNANLKMwJkvviIynW0n8efkvCk4fB7qWwLKhyiJh4jjxEEPEP_kI',
    liveUrl: '#',
    order: 'right',
  },
  {
    icon: 'school',
    sector: 'Education Case Study',
    title: 'Institutional Information Portal',
    challenge: 'Educational resources were scattered across multiple subdomains, leading to confusing navigation and a fragmented user experience for students and staff.',
    solution: 'We brought scattered content into one clearer, easier-to-use website with a simplified page hierarchy and a global search system that prioritised common user tasks.',
    result: '"Improved readability and enhanced institutional credibility through a cohesive and professional digital standard."',
    metrics: ['↓ 45% bounce rate', '↑ 3× pages/session', '6 weeks delivery'],
    stack: ['React', 'Strapi CMS', 'Algolia', 'AWS'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBovyTQoPdUvICVQfhNf9lzO_nsRvRiFZJCtNJj0ozJ-2TRcW_aSLsWvQ9jdFXvn6C8QKe4QLfSjTYVuhHh3vfawVr3nG_APv3GKkkrcx-NnKYXrJebxAO8jdloLBa1mqyfqF-uL4eF3uCpZctTZDWIGvHfYEeTBbQA_SAF2YYwpXhZyxm0Sw_0FBvOXll7dGUNNkCQwPbszECuLHx3831-jqxj7sZzvtZa3dCR69KfGE3KT7nQKl9BstL9ao5Et4YQXT5JBKBZfyA',
    liveUrl: '#',
    order: 'left',
  },
]

const BENTO_ITEMS = [
  { sector: 'Healthcare', title: 'Regional Health Systems', desc: 'Patient-centric portals built for accessibility and high-traffic reliability.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIHuYvWwGrWmuDA22d3R8EmUvgINZeKJw2PJoSSCpmJ19UGakhbq9HeIM8uLESYabaa5IwcrMgsBJvOVWn2bDuhu3sOMrREkAbKoSPB3SLRzsU7n0zVYUNznaHlKYg7MTfo7U4wDB0PbtkEKdJlaUR1coz71gxFvfDbYPQA1s4svEdM1FOk_Gc9EF6pv_gdpDZ9mGhIHQ-x5s3Ko_wiAKLaau-ZI7XPLUD2Imc2WfRP31G7BjsmXjDSUXSzJgDHIGS67LaXhq5K5o', span: 'md:col-span-8', tag: 'Healthcare', metrics: '40% faster · 500+ patients served daily' },
  { sector: 'Political', title: 'Public Communication', desc: 'High-traffic portals built for peak campaign moments.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoEeeWCc_HAVlBuQAU3_SeMAeusbtIsh87MOKDhlXSZNVhaI5MIhfTfHAydJDRCB2Orrh9fMrouyZaCkeS03CSf3DXsNbHxloL-DoJrJbek945RcuXSA5LqE8mDwj9mEGK-M9bcTcqvEje943JFsTNChqSYNyWeOLkAhInDb8m6MgUPuTbZP-UKccdQyOMQ3Us0GMB01OEoDJngiAg2bt9Zu9k-LMchQqiAcHnbcMixw7e0hGW_P86SRO7FDocCaTov_7Kg7t7foM', span: 'md:col-span-4', tag: 'Political', metrics: '99.98% uptime · 2.8× mobile traffic' },
  { sector: 'Education', title: 'Institutional Portals', desc: 'Unified information hubs for universities and schools.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYAe5f6lOBsXJZiFXa8nhBub1wvFNHM_qzapRRzHhoAwNOYHWTPxpgZWqwhbzhT7WLyY5L8TrsqhwdXJUjXanEvcA9dfQXd7JmIwqW6zGIZe5bA8u9VzqVMx22nXp-RYROy3rNk9zFCSIfZFlj478SpaRxJwfJDu5NoQNtT-KCYoykYUHAfgRE64LBdMnbRIoco9O7Z8xKJ9ut2NIbjMwIuPemjW3z4dSlvzlasAdKfPAE_fbuyaveUTpnD-UFbayuguk0hqic1YIZMRy7I9lzYLYENFIuJkWEI15AFJuz-QVFSh9RNRbd2mjw_MxYqQQ', span: 'md:col-span-4', tag: 'Education', metrics: '45% lower bounce · 3× engagement' },
  { sector: 'Professional Services', title: 'Consultancy & Legal', desc: 'Building trust and generating qualified leads for service firms.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbaWTk5lM_1FxFIAcrCSF-YhlGtOMm5OrASqYyOD_JSIav9XYAergcaNu7aWRNZoSWPdmalwRdty6U8edcVZGZyt1cLBe9En_x7aHvvwVBywsjdU9VJwFdLNieIAQtXpeS0h58eTGgzyQ2OrVRuNDigEXzjLLjoaZ_lL6stoqOPUbRVJPu62hZPC42igYKY8zI8Ul1wRm609UgENRH7P2EyOykaIxc3NrAIym1JhN-AH2UZyr5nRAOyzXtxxRHOV6Tz_NwBbUAtNM', span: 'md:col-span-8', tag: 'Professional Services', metrics: '3× inquiry rate · avg 18-day delivery' },
]

function MetricBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-secondary/10 text-secondary border border-secondary/20 mr-2 mb-2">
      {label}
    </span>
  )
}

function StackChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-surface-container text-on-surface-variant border border-outline-variant/20 mr-1.5 mb-1.5">
      {label}
    </span>
  )
}

export default function WorkPage() {
  return (
    <main className="pt-20">
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-sm font-bold tracking-wider uppercase mb-6 font-label">Our Work</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-background font-headline leading-[1.1] tracking-tight mb-8">
              Real Projects.<br />Real Results.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              Every case study includes the actual problem, our solution, measurable outcomes, and the tech stack we used. No fluff.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-container transition-all shadow-lg shadow-primary/10">Get a Free Consultation</Link>
              <Link to="/services" className="bg-surface-container-highest text-secondary px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-bright transition-all">View Services</Link>
            </div>
          </motion.div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-[2rem] bg-surface-container-low overflow-hidden shadow-2xl relative z-10">
              <img alt="CrossTech Work Showcase" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg5IsiMzk34u7amUEmrQ5LPGrtXF3FoDR0v_5eQ1hd19m0RQ15MqxXDlqej8VjEtwqRYMVJOvf1ncfIAd50Pcnftbq5nEUSPT1jGaGY8NHSJRgR9NoyRlw9mc7qBG340Y0YyumFo7uNb6G9DKWnZC-Fv5WVmST56U0zMmK53RewpP5IAJek9AoixGcZnKv7R0hkMBr2hRwyKc-UWQKL-2JTbB65283Qj0y0L1ypHkKOUimFr8bnMN89UyiDRacxXxwuuPQ3BinSdg" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-tertiary-fixed/20 rounded-full blur-2xl -z-0" />
          </div>
        </div>
      </section>

      {/* ── Intro Pillars ────────────────────────── */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Work That Solves Real Website Problems</h2>
            <p className="text-on-surface-variant text-lg">We focus on the things that make websites easier to trust, easier to use, and easier to maintain over time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'account_tree', title: 'Clearer Structure', desc: 'Organising complex information into intuitive paths so users find what they need without friction.' },
              { icon: 'touch_app', title: 'Better Experience', desc: 'Focusing on accessibility and performance to ensure every visitor has a smooth, professional interaction.' },
              { icon: 'verified', title: 'Long-Term Reliability', desc: 'Building on stable foundations that remain secure and manageable as your organisation grows.' },
            ].map((p) => (
              <div key={p.title} className="bg-surface-container-lowest p-10 rounded-xl transition-all hover:bg-surface-bright group">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 block group-hover:scale-110 transition-transform">{p.icon}</span>
                <h3 className="text-xl font-bold mb-3 font-headline">{p.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Bento (with hover overlays) ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold font-headline mb-12">Featured Sector Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {BENTO_ITEMS.map((item, i) => (
              <div key={i} className={`${item.span} group relative overflow-hidden rounded-xl bg-primary-container min-h-[280px]`}>
                <img
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  src={item.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                {/* Hover reveal metrics */}
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white px-6">
                    <p className="text-sm font-bold uppercase tracking-widest text-cyan-300 mb-2">{item.sector}</p>
                    <p className="text-lg font-bold mb-3">{item.desc}</p>
                    <p className="text-sm text-white/70 font-medium">{item.metrics}</p>
                  </div>
                </div>
                {/* Default state */}
                <div className="absolute bottom-0 left-0 p-6 group-hover:opacity-0 transition-opacity">
                  <span className="text-xs font-bold uppercase tracking-widest mb-2 block text-cyan-300">{item.tag}</span>
                  <h3 className="text-white text-xl md:text-2xl font-bold font-headline">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Detailed Case Studies ─────────────────── */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-28">
          {CASE_STUDIES.map((cs) => (
            <motion.div
              key={cs.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              {/* Text side */}
              <div className={cs.order === 'right' ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}>
                <div className="flex items-center gap-2 mb-5">
                  <span className="material-symbols-outlined text-secondary">{cs.icon}</span>
                  <span className="text-secondary font-bold tracking-tight uppercase text-sm">{cs.sector}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-headline mb-6">{cs.title}</h3>

                {/* Metric badges */}
                <div className="mb-6 flex flex-wrap">
                  {cs.metrics.map((m) => <MetricBadge key={m} label={m} />)}
                </div>

                <div className="space-y-6 mb-6">
                  <div>
                    <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-secondary rounded-full inline-block" />
                      Challenge
                    </h4>
                    <p className="text-on-surface-variant">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-on-tertiary-container rounded-full inline-block" />
                      Solution
                    </h4>
                    <p className="text-on-surface-variant">{cs.solution}</p>
                  </div>
                  <div className="p-5 bg-surface-container border-l-4 border-secondary rounded-r-xl">
                    <h4 className="font-bold text-secondary mb-1">Result</h4>
                    <p className="text-on-surface italic">{cs.result}</p>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Tech Stack</p>
                  <div className="flex flex-wrap">
                    {cs.stack.map((s) => <StackChip key={s} label={s} />)}
                  </div>
                </div>

                <a href={cs.liveUrl} className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all">
                  View Live Site <span className="material-symbols-outlined text-base">open_in_new</span>
                </a>
              </div>

              {/* Image side */}
              <div className={cs.order === 'right' ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}>
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white group">
                  <img alt={cs.title} className="w-full h-auto group-hover:scale-105 transition-transform duration-700" src={cs.img} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Process ──────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-headline mb-6">How We Approach Each Project</h2>
            <p className="text-on-surface-variant text-lg">A clear process that helps each project move from planning to launch with less confusion and better outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { n: 1, t: 'Understand', d: 'We start by identifying your specific organisational goals and user needs.' },
              { n: 2, t: 'Clarify', d: 'We strip away complexity to build a clear sitemap and navigation strategy.' },
              { n: 3, t: 'Design / Dev', d: 'Technical execution focused on mobile responsiveness and clean aesthetics.' },
              { n: 4, t: 'Support', d: 'Ongoing maintenance to ensure the platform stays secure and effective.' },
            ].map((s) => (
              <div key={s.n} className="relative z-10 text-center md:text-left">
                <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto md:mx-0">{s.n}</div>
                <h3 className="text-xl font-bold mb-3 font-headline">{s.t}</h3>
                <p className="text-on-surface-variant">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shared Strengths ─────────────────────── */}
      <section className="py-20 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold font-headline mb-8">What These Projects Have in Common</h2>
            <ul className="space-y-6">
              {[
                { title: 'Mobile Experience', desc: 'Every site is built to function perfectly on smartphones, where most modern traffic begins.' },
                { title: 'Easier Maintenance', desc: 'We use stable tools that are easy for your internal teams to manage after launch.' },
                { title: 'Professional Design', desc: 'A grounded, credible aesthetic that builds trust with your professional audience.' },
              ].map((i) => (
                <li key={i.title} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary-fixed mt-1">check_circle</span>
                  <div>
                    <h4 className="font-bold text-xl">{i.title}</h4>
                    <p className="text-white/70">{i.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Mobile-First Design', 'Easier Maintenance', 'Clear Content Structure', 'Ongoing Support'].map((label, idx) => (
              <div key={label} className={`bg-white/5 p-8 rounded-2xl backdrop-blur-lg ${idx === 1 ? 'mt-8' : idx === 2 ? '-mt-8' : ''}`}>
                <div className="text-2xl font-black text-tertiary-fixed font-headline uppercase leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold font-headline mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How do you handle complex information redesigns?', a: 'We use research and testing to understand how your audience looks for information. By stripping away redundant layers and focusing on core tasks, we make even the most complex sites intuitive.' },
              { q: 'What kind of ongoing support do you provide?', a: 'Our support includes security monitoring, performance optimisation, and content updates. We ensure that your platform evolves with your organisation without requiring a full rebuild every few years.' },
              { q: 'Are your websites accessible for information-heavy sites?', a: 'Yes. Accessibility is a priority from the wireframe stage. We build to WCAG standards to ensure that public sector, education, and healthcare information is available to everyone.' },
              { q: 'Do you share live links to completed projects?', a: 'We share live links under NDA for clients who prefer privacy. For others, we include live demos in our proposals. Ask us during the consultation call.' },
            ].map((faq, idx) => (
              <details key={faq.q} className="group bg-surface-container-low rounded-xl" open={idx === 0}>
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-lg">
                  {faq.q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
          <div className="bg-surface-container-highest p-16 rounded-[2rem] border border-outline-variant/10">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-6 tracking-tight">Need a Website That Solves the Right Problems?</h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-10">Let's discuss how we can bring clarity and stability to your next digital project.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-container transition-all">Get a Free Consultation</Link>
              <Link to="/services" className="bg-white border border-outline-variant text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-bright transition-all">View Services</Link>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full bg-surface-container-low -z-0" />
      </section>
    </main>
  )
}
