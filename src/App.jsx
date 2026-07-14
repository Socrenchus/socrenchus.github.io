import React from 'react';
import {
  ArrowRight,
  BrainCircuit,
  ExternalLink,
  ShoppingCart,
  Radio,
  Lightbulb,
  Globe,
  Mail,
  Sparkles,
  Cpu,
} from 'lucide-react';

const PORTFOLIO = [
  {
    name: 'Socrenchus',
    tagline: 'Managed AI Employees for Growing Businesses',
    description: 'Socrenchus designs, deploys, and operates managed AI employees for organizations that need practical automation, workflow support, data intake, document handling, and back-office execution without building an internal AI team.',
    url: '/consulting.html',
    category: 'AI Consulting / Operations',
    status: 'Active',
    icon: <BrainCircuit size={24} />,
    color: 'blue',
  },
  {
    name: 'Code & Cosmos',
    tagline: 'AI-Generated Science & Tech Podcast',
    description: 'A fully AI-produced podcast exploring the intersection of software engineering, science, and the cosmos. Co-hosted by ALEX and NOVA — two AI personalities — with new episodes published weekly to YouTube and major podcast platforms.',
    url: 'https://www.youtube.com/playlist?list=PL8fxj2X9RsFG-JpENPQ0Ggt-LrUhDXzOx',
    category: 'Media / Podcast',
    status: 'Active',
    icon: <Radio size={24} />,
    color: 'indigo',
  },
  {
    name: 'brysgo.com',
    tagline: 'Software Engineering & AI Blog',
    description: "Bryan Goldstein's personal engineering blog covering software architecture, AI development, open-source projects, and lessons learned building products across the Socrenchus portfolio.",
    url: 'https://brysgo.com',
    category: 'Blog / Media',
    status: 'Active',
    icon: <Globe size={24} />,
    color: 'slate',
  },
  {
    name: 'Stealth Hardware Startup',
    tagline: 'Optical Computing Research',
    description: 'An early-stage hardware effort exploring new approaches to optical information processing, physical computation, and AI acceleration. Details remain private while the technical thesis and prototype path mature.',
    category: 'Hardware / Deep Tech',
    status: 'Stealth',
    icon: <Cpu size={24} />,
    color: 'violet',
  },
  {
    name: 'BingoDirect',
    tagline: 'Glatt Kosher Meat Delivery',
    description: 'A kosher meat delivery experiment built around online ordering, local fulfillment, and operational automation. The service is currently paused while Socrenchus focuses on managed AI employee consulting.',
    url: 'https://bingodirect.net',
    category: 'E-commerce / Delivery',
    status: 'On Hold',
    icon: <ShoppingCart size={24} />,
    color: 'green',
  },
  {
    name: 'XeroToAI',
    tagline: 'AI Education & Implementation Guides',
    description: 'A content platform for business owners and developers adopting AI tools. The project is currently paused while Socrenchus focuses on managed AI employee consulting and selected operating clients.',
    url: 'https://xerotoai.com',
    category: 'Content / Education',
    status: 'On Hold',
    icon: <Lightbulb size={24} />,
    color: 'yellow',
  },
];

const COLOR_MAP = {
  blue:   { bg: 'bg-blue-500/10',    border: 'border-blue-500/20',    text: 'text-blue-400',    badge: 'bg-blue-500/20 text-blue-300' },
  green:  { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300' },
  indigo: { bg: 'bg-indigo-500/10',  border: 'border-indigo-500/20',  text: 'text-indigo-400',  badge: 'bg-indigo-500/20 text-indigo-300' },
  yellow: { bg: 'bg-amber-500/10',   border: 'border-amber-500/20',   text: 'text-amber-400',   badge: 'bg-amber-500/20 text-amber-300' },
  slate:  { bg: 'bg-slate-500/10',   border: 'border-slate-500/20',   text: 'text-slate-400',   badge: 'bg-slate-500/20 text-slate-300' },
  violet: { bg: 'bg-violet-500/10',  border: 'border-violet-500/20',  text: 'text-violet-400',  badge: 'bg-violet-500/20 text-violet-300' },
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 py-3">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="/" className="text-xl md:text-2xl font-bold tracking-wide text-white">
            Socrenchus
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#portfolio" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 z-10">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            <Sparkles size={14} />
            <span className="text-xs font-bold uppercase tracking-wider">Managed AI Employee Consulting</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
            Deploying practical<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              AI employees.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Socrenchus LLC helps organizations turn AI from a collection of tools into managed digital workers: scoped, monitored, and integrated into real business workflows.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#portfolio" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all">
              <span>Explore Portfolio</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all border border-slate-700">
              <Mail size={18} />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-6 relative z-10 border-t border-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Our Portfolio</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Consulting, operating experiments, media, and early technical research from Socrenchus LLC.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {PORTFOLIO.map((biz) => {
              const c = COLOR_MAP[biz.color];
              return (
                <div key={biz.name} className={`p-8 rounded-2xl bg-slate-900/50 border ${c.border} backdrop-blur-sm hover:border-opacity-60 transition-all`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.text} flex items-center justify-center`}>
                      {biz.icon}
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${c.badge}`}>{biz.status}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{biz.name}</h3>
                  <p className={`text-sm font-medium ${c.text} mb-3`}>{biz.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{biz.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600 bg-slate-800 px-2 py-1 rounded-full">{biz.category}</span>
                    {biz.url ? (
                      <a href={biz.url} target="_blank" rel="noopener noreferrer"
                        className={`flex items-center gap-1 text-sm font-medium ${c.text} hover:opacity-80 transition-opacity`}>
                        Visit <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-slate-500">Private</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-slate-900/30 border-y border-slate-900">
        <div className="container mx-auto max-w-2xl text-center">
          <Mail className="mx-auto text-blue-400 mb-6" size={36} />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Get in Touch</h2>
          <p className="text-slate-400 text-lg mb-8">
            For business inquiries, partnership opportunities, or questions about any of our portfolio companies:
          </p>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <p className="text-slate-400 text-sm mb-1">General Inquiries</p>
              <a href="mailto:hello@socrenchus.com" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors text-lg">
                hello@socrenchus.com
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-6">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white text-lg tracking-widest uppercase">Socrenchus</span>
            <span className="text-slate-700">|</span>
            <span>Est. 2025</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/consulting.html" className="hover:text-white transition-colors">Socrenchus Consulting</a>
            <a href="https://bingodirect.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">BingoDirect</a>
            <a href="https://www.youtube.com/playlist?list=PL8fxj2X9RsFG-JpENPQ0Ggt-LrUhDXzOx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Code &amp; Cosmos</a>
            <a href="https://xerotoai.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">XeroToAI</a>
            <a href="https://brysgo.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">brysgo.com</a>
            <a href="mailto:hello@socrenchus.com" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div>© 2025 Socrenchus LLC. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
