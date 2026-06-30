import { Link } from 'react-router-dom'

export default function ServicesPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative px-6 md:px-8 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold uppercase tracking-widest mb-6">Our Services</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold font-headline text-primary leading-[1.1] mb-8 tracking-tight">
              Website Services Built for Reliability, Clarity, and Long-Term Support
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              CrossTech helps organizations design, develop, redesign, and maintain websites that stay professional, secure, and easy to manage over time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-primary-container shadow-lg shadow-secondary/20">Get a Free Consultation</Link>
              <Link to="/work" className="text-secondary border-b-2 border-secondary font-bold px-4 py-4 hover:bg-surface-container-low transition-all">View Our Work</Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white aspect-square lg:aspect-[4/5] relative group">
              <img className="w-full h-full object-cover" alt="SaaS dashboard interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOxDKum2yNGg__2cYj84Xd1G9ZsTHUiJrOpBvTIT3HaMrfhd_nfRzfenkTpnDEFE8dmR8cQXNP7tYpKc-1VZXFbRW1IwLM_leSNPSDSWmRoCjFi6gbDnKcWTtClQHmdnLK3oK9t8OmMXo7b_MjDFUzKqHgW_iSPIV2aYk_RkQyBrPGqG-dhBfcUnwSg-nL72uGqO_3yjm5BV1AJwIN3hqAPfCZ5Qw_Mh27kx9i_XTpsPj1edhDJJRT7PqYmJZ1ljbGK8ci6qU8BQk" />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="bg-surface-container-low py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold font-headline text-primary mb-6">Full-Lifecycle Website Support</h2>
          <p className="text-on-surface-variant max-w-3xl mx-auto">From first design to long-term maintenance, we help organizations build websites that are easier to manage, easier to trust, and easier to grow.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: 'architecture', color: 'text-secondary bg-secondary/10', title: 'Build', desc: 'Developing tailored websites with a focus on clean content structure and responsive performance from day one.' },
            { icon: 'auto_graph', color: 'text-on-tertiary-container bg-on-tertiary-container/10', title: 'Improve', desc: "Redesigning existing sites for better usability, ensuring your digital presence evolves with your audience's needs." },
            { icon: 'security', color: 'text-primary bg-primary/10', title: 'Maintain', desc: 'Providing ongoing security updates, content tweaks, and technical health checks to keep everything stable.' },
          ].map((s) => (
            <div key={s.title} className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 ${s.color} rounded-lg flex items-center justify-center mb-6`}>
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Expertise Grid */}
      <section className="py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold font-headline text-primary">Core Expertise</h2>
            <div className="w-20 h-1 bg-secondary mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'palette', title: 'Website Design', desc: 'Clear, modern design that helps visitors find information and trust your brand.' },
              { icon: 'terminal', title: 'React Development', desc: 'Building fast, reliable web applications using stable modern frameworks.' },
              { icon: 'restart_alt', title: 'Modern Redesign', desc: 'Updating older sites with contemporary layouts and improved mobile experiences.' },
              { icon: 'build', title: 'Maintenance', desc: 'Regular updates and checks to ensure your website remains useful and secure.' },
              { icon: 'bug_report', title: 'Bug Fixing', desc: 'Practical troubleshooting to resolve technical issues and display errors quickly.' },
              { icon: 'speed', title: 'Performance & Security', desc: 'Protecting your site from threats and ensuring pages load quickly for every user.' },
            ].map((c) => (
              <div key={c.title} className="p-8 border border-outline-variant/15 rounded-xl hover:bg-surface-container transition-all group">
                <span className="material-symbols-outlined text-secondary text-3xl mb-4">{c.icon}</span>
                <h3 className="font-bold text-xl text-primary mb-2">{c.title}</h3>
                <p className="text-sm text-on-surface-variant">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Breakdowns */}
      <section className="py-24 px-6 md:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-extrabold font-headline text-primary mb-6">Website Design Services</h3>
              <p className="text-on-surface-variant mb-8">We focus on designs that communicate clearly. A professional website should make it easy for your visitors to find what they need while building confidence in your organization.</p>
              <div className="space-y-4 mb-8">
                {[
                  { title: 'User-Focused Layouts', desc: 'Visual structures designed around how people actually read and navigate.' },
                  { title: 'Clear Visual Identity', desc: 'Professional typography and color choices that match your organization.' },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <div>
                      <p className="font-bold text-primary">{f.title}</p>
                      <p className="text-sm text-on-surface-variant">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-surface-container-high p-6 rounded-xl mb-8">
                <p className="text-xs uppercase font-bold tracking-widest text-secondary mb-2">Who it's for</p>
                <p className="text-primary font-medium">Businesses and organizations looking to update their look and improve information organization.</p>
              </div>
              <Link to="/contact" className="bg-primary text-white px-6 py-3 rounded-xl font-bold">Start Your Design Project</Link>
            </div>
            <div className="order-1 lg:order-2">
              <img className="rounded-2xl shadow-xl w-full" alt="Website wireframe design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBikI0AirIJ0jgLVwV2lb6WEWzp_IAEXQVPjeCq2ewII8mT2JORFmf2DeDoXoQWdDbN_rut4WuyPw3YQtyC3KsP4okCNj7hjRn8chmfTB_GuXb9Y83_KovpUGKm2riwzvKHHGaukH_YxA_LFxX6aZeGqxRzbtFWxyj19soibzjmosxqN5eaWt37dwI1yzczxP2-BGXeYdIdQxY96lT1L67cElt54CZdTEMz393r-cHqmdPAO5cUAqbaMIHLv-2ng9VWn8BaY-IFU9A" />
            </div>
          </div>
          {/* Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img className="rounded-2xl shadow-xl w-full" alt="React code editor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKXIASJrKoi79Eh0Du2SGGYK6TJ6J3ZBOp_LSp17FjhLkUPfiLlLcimviz_rixwdjXYVjUsIDhzuhH8XWZ0ItLF6nCvnPswCubS8l-5vWAgtG6f8Fl9FtolcXm86V4JKf6SeFbsONYCWkGB_b8xCX60nizpYsCXTfCQhhrriKHpx4qhCWNhq_zJXNHeLrFUY0YpZWV9hpTfNeGisBSOyNNenfzCJbkFfrxCvZQyrAj_CQHeijAzvtA5zB5y3-os5LWsogrEdDUf7k" />
            </div>
            <div>
              <h3 className="text-3xl font-extrabold font-headline text-primary mb-6">React Development &amp; Support</h3>
              <p className="text-on-surface-variant mb-8">We use reliable, modern code to build websites that load quickly and are easy to maintain. Our development process focuses on stability and clear implementation.</p>
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Reliable Content Management', desc: 'Simple systems that let you update your own text and images without breaking the site.' },
                  { title: 'Clean Technical Execution', desc: 'Code that follows best practices for security and long-term stability.' },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <div>
                      <p className="font-bold text-primary">{f.title}</p>
                      <p className="text-sm text-on-surface-variant">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-surface-container-high p-6 rounded-xl mb-8">
                <p className="text-xs uppercase font-bold tracking-widest text-secondary mb-2">Who it's for</p>
                <p className="text-primary font-medium">Teams needing custom features, fast load speeds, or a website that scales with their growth.</p>
              </div>
              <Link to="/contact" className="bg-primary text-white px-6 py-3 rounded-xl font-bold">Inquire About Development</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Solutions */}
      <section className="py-24 px-6 md:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-extrabold font-headline mb-16 text-center">Tailored Solutions for Every Sector</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'local_hospital', title: 'Hospitals', desc: 'Clear navigation and privacy-focused portals to help patients find information and services quickly.' },
              { icon: 'how_to_reg', title: 'Politics', desc: 'Fast-loading hubs for campaigns that need to share information and engage supporters reliably.' },
              { icon: 'school', title: 'Education', desc: 'Organized resource centers that make vast amounts of content accessible to students and faculty.' },
              { icon: 'business_center', title: 'Service Business', desc: 'Practical lead-generation engines that help potential clients understand your value and reach out.' },
            ].map((s) => (
              <div key={s.title} className="bg-primary-container p-8 rounded-xl border border-white/5 hover:border-white/20 transition-all">
                <span className="material-symbols-outlined text-tertiary-fixed text-4xl mb-6">{s.icon}</span>
                <h4 className="text-xl font-bold mb-4">{s.title}</h4>
                <p className="text-sm text-on-primary-container leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CrossTech */}
      <section className="py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold font-headline text-primary mb-4">Why Choose CrossTech</h2>
            <p className="text-on-surface-variant">We prioritize clarity and long-term reliability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[240px]">
            <div className="md:col-span-3 lg:col-span-4 bg-surface-container-low p-8 rounded-2xl flex flex-col justify-end">
              <h4 className="text-xl font-bold text-primary mb-2">Support-Focused</h4>
              <p className="text-sm text-on-surface-variant">We provide ongoing help after launch to ensure your site stays stable as your needs change.</p>
            </div>
            <div className="md:col-span-3 lg:col-span-8 bg-secondary p-8 rounded-2xl flex flex-col justify-end text-white">
              <h4 className="text-3xl font-bold mb-2">Designed to build trust and clarity</h4>
              <p className="opacity-80">Our design approach centers on clear communication and professional visual standards.</p>
            </div>
            <div className="md:col-span-3 lg:col-span-5 bg-surface-container-highest p-8 rounded-2xl flex flex-col justify-end">
              <h4 className="text-xl font-bold text-primary mb-2">Clean Development</h4>
              <p className="text-sm text-on-surface-variant">Organized, maintainable code and practical implementation choices that reduce technical issues.</p>
            </div>
            <div className="md:col-span-3 lg:col-span-3 bg-tertiary-fixed p-8 rounded-2xl flex flex-col justify-center items-center text-center">
              <span className="material-symbols-outlined text-4xl mb-4">update</span>
              <h4 className="font-bold text-on-tertiary-fixed">Regular Updates</h4>
            </div>
            <div className="md:col-span-6 lg:col-span-4 bg-surface-container p-8 rounded-2xl flex flex-col justify-end">
              <h4 className="text-xl font-bold text-primary mb-2">Direct Communication</h4>
              <p className="text-sm text-on-surface-variant">Work directly with the designers and developers who are building your project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 md:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold font-headline text-primary mb-16">The CrossTech Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { n: '01', t: 'Discovery', d: 'Identifying your goals, audience, and project needs.' },
              { n: '02', t: 'Planning', d: 'Drafting the site structure and choosing the right tools.' },
              { n: '03', t: 'Design', d: 'Creating prototypes that define the visual look and feel.' },
              { n: '04', t: 'Development', d: 'Building the site with clean code and content tools.' },
              { n: '05', t: 'Launch & Support', d: 'Final checks followed by ongoing help and maintenance.' },
            ].map((s) => (
              <div key={s.n} className="relative">
                <div className="text-5xl font-black text-outline-variant/30 mb-4">{s.n}</div>
                <h5 className="font-bold text-primary mb-2">{s.t}</h5>
                <p className="text-sm text-on-surface-variant">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Beyond Launch */}
      <section className="py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto border border-outline-variant/30 rounded-3xl p-12 lg:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold font-headline text-primary mb-6">Support Beyond Launch</h2>
            <p className="text-lg text-on-surface-variant mb-12 max-w-2xl">A website needs regular attention after launch. Our support plans help you keep it updated, stable, and useful over time.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Essential', desc: 'Routine updates, basic security monitoring, and regular backups.', tag: 'Stable and secure.' },
                { title: 'Growth', desc: 'Everything in Essential plus monthly content and design improvements.', tag: 'Improving over time.' },
                { title: 'Partnership', desc: 'Priority support, regular development time, and strategy reviews.', tag: 'Dedicated technical help.' },
              ].map((p) => (
                <div key={p.title}>
                  <h4 className="text-xl font-bold text-primary mb-4">{p.title}</h4>
                  <p className="text-sm text-on-surface-variant mb-4">{p.desc}</p>
                  <span className="text-secondary font-bold">{p.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 px-6 md:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold font-headline text-primary mb-16">Results We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ZxlLVRz9fSnhL0b8HGH71HRbTKHn7oscuhg77TDEOQ_mKor4O3dBjhNHax3_5SJaUNdIhFBDVYNhjKcLudtvFbri2W68cFmcr9ELYjSqhVJN1ksNhN5TbxGIEnNF0hqpVpOyRaG42ad2H-XXL9E6drUNIKLJptC0uO-QFUoXc_LJ1xMDDOnlm1LSDFtLL9y2FIZGJPz9slg6QcamMVPelfkS2Pg-VA8tzdZYBVOivi03RZlmkn6PCgnXAEZR0CLYnongEppGq1o', title: 'Hospital Redesign', tag: 'Faster Load Times', desc: 'Simplified the navigation menu and improved page speeds for a regional healthcare provider.' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7h-e_MA3y5xHrEZTcGo8c32neZLayf4syiUkw6AZahQpa7LJzI1RLKByG2bJ5enM72XUFtpNzFTEGalB6lnvJ4ry58knX5VOW2TO_8Q4YH5gL67W7AfCiDXYo7iDuK8Jh43C32h0v_0BumbTKYr3R_px7KEVWh2fIVKWxYtu9oW5PdsEiUJsdnnso9doaPLK3LM1Mxb-GjppzNiQt0PRF8-K6l2S5sfkKRzQzJqz9sDyUjun3HPKtbfotyx4NCskPE83Sy2cyxMs', title: 'Campaign Portal', tag: 'Better Mobile Experience', desc: 'Built a responsive platform that remained stable during high-traffic campaign updates.' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWfbhbnEu_hq8XdK5lHXts0Q4HrlHwnAHTFOChQ4Q7aISFqEGDhqM6Q4hDIXKAJa0CMWMHwh7SdyftxirF29zIe76AvJOFUJVahRkivCRKIbRSnDVVTqWL5-WUXz3vpyoHTl1QOt9ju-lISWPWuD9jXGBohWoMrZc_X6xf5-Rq3gom-58Md6InJBHvebduyaveUTpnD-UFbayuguk0hqic1YIZMRy7I9lzYLYENFIuJkWEI15AFJuz-QVFSh9RNRbd2mjw_MxYqQQ', title: 'Institutional Hub', tag: 'Cleaner Content Structure', desc: 'Reorganized academic resources so users could find documents in fewer clicks.' },
            ].map((r) => (
              <div key={r.title} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img className="w-full h-48 object-cover" alt={r.title} src={r.img} />
                <div className="p-6">
                  <h5 className="font-bold text-primary mb-2">{r.title}</h5>
                  <p className="text-xs text-on-tertiary-container font-bold mb-4">{r.tag}</p>
                  <p className="text-sm text-on-surface-variant">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto bg-primary text-white rounded-[2rem] p-12 lg:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-extrabold font-headline mb-8 tracking-tight">
              Need a Website That Looks Professional <br className="hidden lg:block" /> and Stays Reliable?
            </h2>
            <p className="text-lg text-secondary-fixed mb-12 max-w-2xl mx-auto">We can help you build it, improve it, and support it long after launch. Partner with a team that builds for stability.</p>
            <Link to="/contact" className="inline-block bg-secondary text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-xl shadow-black/20">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
