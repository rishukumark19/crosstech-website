import { Link } from 'react-router-dom'

export default function IndustriesPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 md:px-12 py-32 lg:py-48 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full text-sm font-bold font-label mb-6 tracking-wide uppercase">Industries We Serve</span>
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight mb-8">
              Websites Built for Sectors Where <span className="text-secondary">Trust Matters</span>
            </h1>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-xl mb-12">
              CrossTech designs, develops, and maintains websites for organizations that need clarity, credibility, and long-term reliability online.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-primary-container transition-all">Get a Free Consultation</Link>
              <Link to="/work" className="bg-surface-container-highest text-secondary px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-surface-variant transition-all">View Our Work</Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="relative bg-surface-container rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl">
              <img alt="Modern architectural glass building" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYNLGEsMlo-yO_LxPOIAkgi76X-UBEva3CtRKKTFOPa35R-fVAhRpwL5YMMhg3smdQGuGUR6z9p3AS5W4b7rD8u9m5SNmxZlmmEjByjCXX4OMtZ6eJzUgwLvR280HpeZQhork4_Wjvs9FVY_BNZxHDurBpjfg4D8EliFWEeYc1JT9Od76NeHQKbJoYiVNJpWTt3TaGA8riLN_pPNFZU7qdWHRZ_kg3CMhQNoH-fVdQRhmi2fveusUQ7bo48q_2O18wQMI5MfFPOww" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Blocks */}
      <section className="bg-surface-container-low py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-3xl font-bold text-primary mb-4">Every Sector Needs Different Website Priorities</h2>
            <p className="text-on-surface-variant max-w-2xl">We shape the structure, content, and support approach around the specific needs of your field to ensure long-term stability.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'visibility', color: 'text-secondary', title: 'Clear Communication', desc: 'We organize complex information into simple, effective user journeys that make sense to your visitors.' },
              { icon: 'verified_user', color: 'text-on-tertiary-container', title: 'Reliable Structure', desc: 'Building websites with stable code, secure standards, and consistent design to build confidence in your brand.' },
              { icon: 'support_agent', color: 'text-primary', title: 'Practical Support', desc: "Our relationship doesn't end at launch. We provide the regular updates and technical help you need to stay online." },
            ].map((v) => (
              <div key={v.title} className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-shadow">
                <span className={`material-symbols-outlined ${v.color} text-4xl mb-6`}>{v.icon}</span>
                <h3 className="font-headline text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-on-surface-variant">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Bento */}
      <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <h2 className="font-headline text-4xl font-extrabold text-primary mb-16 text-center">Who We Work With</h2>
        <div className="grid md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-7 bg-primary rounded-xl p-12 text-white relative group overflow-hidden flex flex-col justify-end">
            <img alt="Clean modern hospital hallway" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMaesgrXdBE4NWkMJkQxOB2RGyqV6Re946s-KbHnC6bMNFJAOEeXdKdOmxfy39X0T3rz4jVvs7c6OppU7X-HdrcPtfPar0nkTCtJJK8h_-5w3pHBPLl0ZI9yTuNnXg1akNOy_Sgg0pimL7N2q2ENeWnuczGF9ZSo4qq1JH5hVXgs7tsW-zfOcfRIrkGZRNW7Hm6Sr8N6nkulnSUkG6RNLLlYrzTXAboaIGfdo_MwjJaq0KxUvCr8vKxa089eTHn4L3nRVM1mxmdn0" />
            <div className="relative z-10">
              <h3 className="font-headline text-3xl font-bold mb-4">Hospitals &amp; Healthcare</h3>
              <p className="text-on-primary-container max-w-md mb-6">Helping patients find information easily through clear navigation and secure portal access.</p>
              <a className="text-tertiary-fixed font-bold flex items-center gap-2 hover:gap-4 transition-all" href="#healthcare">Explore Sector <span className="material-symbols-outlined">arrow_forward</span></a>
            </div>
          </div>
          <div className="md:col-span-5 bg-surface-container rounded-xl p-10 flex flex-col border border-outline-variant/10">
            <span className="material-symbols-outlined text-secondary text-5xl mb-6">account_balance</span>
            <h3 className="font-headline text-2xl font-bold text-primary mb-4">Public Leadership &amp; Campaigns</h3>
            <p className="text-on-surface-variant mb-auto">Rapidly building secure, reliable sites for representatives and teams to connect with the public.</p>
            <a className="text-secondary font-bold mt-8" href="#political">View Details</a>
          </div>
          <div className="md:col-span-5 bg-surface-container-low rounded-xl p-10 flex flex-col border border-outline-variant/10">
            <span className="material-symbols-outlined text-on-tertiary-container text-5xl mb-6">school</span>
            <h3 className="font-headline text-2xl font-bold text-primary mb-4">Education &amp; Academic Centers</h3>
            <p className="text-on-surface-variant mb-auto">Organizing resource libraries and department information into a simple, searchable layout.</p>
            <a className="text-on-tertiary-container font-bold mt-8" href="#education">View Details</a>
          </div>
          <div className="md:col-span-7 bg-secondary rounded-xl p-12 text-white relative group overflow-hidden flex flex-col justify-end">
            <img alt="Modern professional office" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSZhfco6IOGbrYOhpZD66a1uvpUdL19SGRj8aO9Iyy3WwdWhQJBMhNU2eemDSITWd8asVKgkjeZ8tyhfduNECCMBPhw4XN4RSDVGu3W15Gsnl7LAipimuDo7n-Z_pYCPc15oQAr7ashuz78VVgKY8q0i0yMy252uOqeP1Lr4NAyfmPtcGdZ6pSTproqg1hXq1SUYb4yfDM58PmEu1zUNPCMcqjg1u2RZN4LyOvgGrmvyvN5scN2Cl-0qIfq2Ze3iaCPIJSaScFK6g" />
            <div className="relative z-10">
              <h3 className="font-headline text-3xl font-bold mb-4">Professional Services</h3>
              <p className="text-on-secondary-container max-w-md mb-6">Developing credible, lead-generating websites for law firms and consultancy teams.</p>
              <a className="text-white border-b-2 border-white/50 font-bold pb-1 inline-block" href="#professional">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Detail */}
      <section className="py-32 px-6 md:px-12 bg-white" id="healthcare">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 text-on-tertiary-container mb-6">
              <span className="material-symbols-outlined">medical_services</span>
              <span className="font-bold tracking-widest uppercase text-sm">Healthcare Sector</span>
            </div>
            <h2 className="font-headline text-4xl font-bold text-primary mb-8">Easy Access to Care and Information</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              In healthcare, your website is a primary tool for patients. We build systems that make finding doctors, booking appointments, and accessing portals easy and fast.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-error-container/20 p-4 rounded-xl h-fit"><span className="material-symbols-outlined text-error">warning</span></div>
                <div>
                  <h4 className="font-headline font-bold text-primary mb-2">Practical Challenges</h4>
                  <p className="text-on-surface-variant">Confusing menus, difficult portal links, and sites that don't work well on mobile phones for elderly users.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-tertiary-fixed/30 p-4 rounded-xl h-fit"><span className="material-symbols-outlined text-on-tertiary-fixed-variant">task_alt</span></div>
                <div>
                  <h4 className="font-headline font-bold text-primary mb-2">How We Help</h4>
                  <p className="text-on-surface-variant">We use clear navigation, accessible design standards, and service-driven layouts to prioritize the needs of your patients.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-4">
            <div className="bg-surface-container p-4 rounded-3xl shadow-sm">
              <img alt="Digital healthcare interface" className="rounded-2xl w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyJM8IZU4XSDyE5zb1s2G2OYgSKfY9JseruZME87_pmIHyyhd_hv_9f-IkF7fNLa-XrnkFG_Nf-LJ1-IhM1zTKIT8MPAH342-BN8raQsb33Krm2oaaUEQOxpT8iu5RXsAvNEoxzbDTb2SXHDTmZr1KC-93sUWmgx2RsGYYGpuhXNu92pAOHWRi7qzp3vQmQhsUVJdmQiBev7MwpMFdFLl-XlAzb9P1Uwm2HSjpRLW5pz8dyzQuFvz3fSdZcdgymDjnMr4M8C2-emI" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-6 rounded-2xl">
                <span className="block font-headline font-bold text-secondary text-2xl mb-1">Accessible</span>
                <span className="text-sm text-on-surface-variant font-medium">Built to meet clear digital accessibility standards for all users.</span>
              </div>
              <div className="bg-surface-container-low p-6 rounded-2xl">
                <span className="block font-headline font-bold text-secondary text-2xl mb-1">Mobile First</span>
                <span className="text-sm text-on-surface-variant font-medium">Optimized for quick searches on any handheld device.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Political */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-low" id="political">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img alt="Capitol building" className="w-full h-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuWZ2tTKuJIiSHX1u90_SvUC5mnFZe6bNKh6iWuOcHbszXi6QC8Kx_IzGPA7W4x0_yHv-8xxcTrtoi12dlDVTJKaMroeJLj6oK8qqH2hg25h6SfxsUdrWSZ75uPfSWJcC6N3hCHESNh8n7JNkucMU6DFbUJJLc_U4LF-RwOsEbj0HqFEH3e__Y5x55lc8DTlo13HaODbYSoRUQBWOhFt-E5tAmNptLfw2JO1gd9agGq22O5uCkxB2wUKHGEdZVmzGzlE_c6oKdHas" />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-outline-variant/10">
              <h4 className="font-headline font-bold text-primary mb-2 italic">"CrossTech built our platform quickly and kept it stable through high-traffic periods without any issues."</h4>
              <p className="text-sm text-on-surface-variant">— Campaign Director</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 text-secondary mb-6">
              <span className="material-symbols-outlined">campaign</span>
              <span className="font-bold tracking-widest uppercase text-sm">Public Leadership</span>
            </div>
            <h2 className="font-headline text-4xl font-bold text-primary mb-8">Connecting with the Public Reliably</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Your digital presence must be as active as your work. We build for speed, clarity, and the ability to handle large spikes in traffic.
            </p>
            <ul className="space-y-6">
              {[
                { icon: 'bolt', title: 'Fast Deployment', desc: 'Launch secure sites in days to respond to news cycles and project milestones.' },
                { icon: 'payments', title: 'Simple Donation Flows', desc: 'Clear pathways for supporters to contribute, sign up, or register for events.' },
                { icon: 'security', title: 'Reliable Security', desc: 'Built-in protections to keep your site safe from threats during peak periods of public interest.' },
              ].map((f) => (
                <li key={f.title} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-1">{f.icon}</span>
                  <div>
                    <h5 className="font-bold text-primary">{f.title}</h5>
                    <p className="text-on-surface-variant text-sm">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-32 px-6 md:px-12 bg-white" id="education">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 text-[#41a5a4] mb-6">
              <span className="material-symbols-outlined">auto_stories</span>
              <span className="font-bold tracking-widest uppercase text-sm">Education &amp; Academia</span>
            </div>
            <h2 className="font-headline text-4xl font-bold text-primary mb-8">Organizing Information for Success</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Schools and academic centers often have large amounts of data across different departments. We help unify this into one easy-to-use platform.
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 bg-surface-container-low rounded-xl">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-sm">schema</span> Content Hierarchy</h4>
                <p className="text-on-surface-variant text-sm">Structuring directories, program details, and student resources into a logical, searchable system.</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-xl">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-sm">accessibility_new</span> User Hubs</h4>
                <p className="text-on-surface-variant text-sm">Ensuring all campus resources are easy for students and faculty to find and use on any device.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img alt="University Library" className="rounded-[2.5rem] shadow-2xl w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Xby4W_7J9mvsSc8lzu6zfeNY-dlMd1zwoDH2JaSqh1y9huhCCawadk1BA6NeP137In_GG4z56D7ZeignAM_C80siyGT8L6g57ThLBGorrd_zV54e_RLRDmjWPd7xjD8t--RK_sT8KogXw4h-yFie5qqaKo6-JNrmvLLja0ga-DUO3Z1zXj37VuBO6ZECvou4pJ98edXwXaNL5IGwYra4TDwv8oCvNVSKtICPPX7zCfsmHYvMM7zzEm-kEQjwwCDk6CQW2AzCN5U" />
              <div className="absolute -bottom-10 -left-10 bg-primary text-white p-10 rounded-2xl hidden md:block">
                <span className="text-4xl font-bold block mb-2">Unify</span>
                <span className="text-on-primary-container">We migrate complex pages into simple, organized hubs.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="py-32 px-6 md:px-12 bg-primary text-white overflow-hidden relative" id="professional">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-secondary-fixed-dim mb-6">
              <span className="material-symbols-outlined">work</span>
              <span className="font-bold tracking-widest uppercase text-sm">Professional Services</span>
            </div>
            <h2 className="font-headline text-5xl font-bold mb-8">Credibility as a Core Asset</h2>
            <p className="text-on-primary-container text-xl leading-relaxed mb-12">
              For law firms and consultancies, your website is often the first point of contact. It should reflect the same professionalism you bring to your work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Service-Focused Design', desc: 'Helping potential clients find your areas of expertise quickly through clear, grouped content.' },
              { title: 'Reliable Lead Generation', desc: 'Simple contact forms and inquiry flows that make it easy for new business to reach you.' },
              { title: 'Stable Performance', desc: 'Fast loading times and 24/7 stability to match the high standards of your clients.' },
            ].map((s) => (
              <div key={s.title} className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                <h4 className="font-headline text-xl font-bold mb-4">{s.title}</h4>
                <p className="text-on-primary-container text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Strengths */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold text-primary mb-4">What Every Project Gets From CrossTech</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Foundational excellence that works for any industry. Built for durability and daily use.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: 'responsive_layout', title: 'Responsive Build', desc: 'Works perfectly on mobile, tablet, and desktop screens.' },
              { icon: 'settings_suggest', title: 'Ongoing Help', desc: 'Regular security updates and technical help whenever you need it.' },
              { icon: 'search_check', title: 'SEO Standards', desc: 'Best-practice structure to help your organization be found online.' },
              { icon: 'bolt', title: 'High Speed', desc: 'Optimized for fast interactions and near-instant loading.' },
            ].map((s) => (
              <div key={s.title} className="text-center">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">{s.icon}</span>
                <h5 className="font-bold text-primary mb-2">{s.title}</h5>
                <p className="text-sm text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-headline text-3xl font-bold text-primary mb-12 text-center">Industry-Specific Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How do you handle privacy for healthcare sites?', a: 'We build the website while integrating with trusted, secure patient portals, ensuring all sensitive data is handled through compliant third-party systems.' },
              { q: 'Can you launch a campaign site quickly?', a: 'Yes. We have established processes for political teams that allow us to deploy secure, stable sites in very short timeframes.' },
              { q: 'Do you help with moving content for large sites?', a: 'Absolutely. We help organize and move content for large organizations, making sure your information is better structured and easier to find on the new site.' },
              { q: 'How often do you provide security updates?', a: "Our support plans include regular security checks and weekly updates to keep your firm's digital presence stable and secure." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-outline-variant/10">
                <h4 className="font-bold text-primary mb-2">{faq.q}</h4>
                <p className="text-on-surface-variant text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary to-primary-container"></div>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-white mb-8">Need a Website Built for Your Sector?</h2>
          <p className="text-on-primary-container text-lg mb-12">Let's discuss the specific needs of your field and how CrossTech can build a reliable digital presence for you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-secondary text-white px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-secondary-container transition-all">Get a Free Consultation</Link>
            <Link to="/contact" className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-white/10 transition-all">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
