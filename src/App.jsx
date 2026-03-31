import React, { useState, useEffect } from 'react';
import {
  Shield,
  Zap,
  MessageSquare,
  Users,
  ArrowRight,
  BrainCircuit,
  Network,
  ChevronRight,
  Sparkles,
  BookOpen,
  Mail,
  ExternalLink,
  ShoppingCart,
  Radio,
  Lightbulb,
  Globe
} from 'lucide-react';

// Configuration constants
const WAITLIST_LIMIT = 50;
const LAUNCH_QUARTER = 'Q2 2026';

const PORTFOLIO = [
  {
    name: 'Socrenchus',
    tagline: 'Your Intellectual Envoy',
    description: 'An AI sparring partner that uses proactive cross-examination to turn your internal monologue into Intellectual Equity. Socrenchus pings you with Socratic questions, builds a persistent memory of your thinking, and pairs you with collaborators whose knowledge completes your thesis.',
    url: 'https://socrenchus.github.io',
    category: 'AI / SaaS',
    status: 'Early Access',
    icon: <BrainCircuit size={24} />,
    color: 'blue',
  },
  {
    name: 'BingoDirect',
    tagline: 'Glatt Kosher Meat Delivery',
    description: 'On-demand kosher meat delivery sourcing directly from Bingo Wholesale. Customers place orders online and a local driver shops and delivers the same day. Serving the greater Spring Valley, NY area.',
    url: 'https://bingodirect.net',
    category: 'E-commerce / Delivery',
    status: 'Active',
    icon: <ShoppingCart size={24} />,
    color: 'green',
  },
  {
    name: 'Code & Cosmos',
    tagline: 'AI-Generated Science & Tech Podcast',
    description: 'A fully AI-produced podcast exploring the intersection of software engineering, science, and the cosmos. Co-hosted by ALEX and NOVA — two AI personalities — with new episodes published weekly to YouTube and major podcast platforms.',
    url: 'https://www.youtube.com/@BryanGoldstein',
    category: 'Media / Podcast',
    status: 'Active',
    icon: <Radio size={24} />,
    color: 'indigo',
  },
  {
    name: 'XeroToAI',
    tagline: 'AI Education & Implementation Guides',
    description: 'A content platform publishing in-depth guides and tutorials for business owners and developers adopting AI tools. Covers practical AI integration, automation workflows, and emerging technology.',
    url: 'https://xerotoai.com',
    category: 'Content / Education',
    status: 'Active',
    icon: <Lightbulb size={24} />,
    color: 'yellow',
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
];

const COLOR_MAP = {
  blue:   { bg: 'bg-blue-500/10',   border: 'border-blue-500/20',   text: 'text-blue-400',   badge: 'bg-blue-500/20 text-blue-300' },
  green:  { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300' },
  indigo: { bg: 'bg-indigo-500/10',  border: 'border-indigo-500/20',  text: 'text-indigo-400',  badge: 'bg-indigo-500/20 text-indigo-300' },
  yellow: { bg: 'bg-amber-500/10',   border: 'border-amber-500/20',   text: 'text-amber-400',   badge: 'bg-amber-500/20 text-amber-300' },
  slate:  { bg: 'bg-slate-500/10',   border: 'border-slate-500/20',   text: 'text-slate-400',   badge: 'bg-slate-500/20 text-slate-300' },
};

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 20); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signed up:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center bg-slate-900/30 backdrop-blur-sm rounded-lg">
          <div className="flex items-start overflow-hidden h-20">
            <img src="/logo.png" alt="Socrenchus Logo" loading="eager" className="w-[1124px] -mt-8" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#portfolio" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Portfolio</a>
            <a href="#envoy" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">The Envoy</a>
            <a href="#contact" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Contact</a>
            <button className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-200 transition-all">
              Request Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 z-10">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            <Sparkles size={14} />
            <span className="text-xs font-bold uppercase tracking-wider">AI-Driven Portfolio Company</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
            Building the future of<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              human-AI collaboration.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Socrenchus LLC is a portfolio of AI-powered businesses spanning intellectual tools, e-commerce, media, and education — all built on the premise that AI should amplify human potential, not replace it.
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 relative z-10 border-t border-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Our Portfolio</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Each business in the Socrenchus portfolio is independently operated and AI-augmented.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {PORTFOLIO.map((biz) => {
              const c = COLOR_MAP[biz.color];
              return (
                <div key={biz.name} className={`p-8 rounded-2xl bg-slate-900/50 border ${c.border} backdrop-blur-sm group hover:border-opacity-60 transition-all`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.text} flex items-center justify-center`}>
                      {biz.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${c.badge}`}>{biz.status}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{biz.name}</h3>
                  <p className={`text-sm font-medium ${c.text} mb-3`}>{biz.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{biz.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600 bg-slate-800 px-2 py-1 rounded-full">{biz.category}</span>
                    <a href={biz.url} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center gap-1 text-sm font-medium ${c.text} hover:opacity-80 transition-opacity`}>
                      Visit <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Socrenchus Product Detail */}
      <section id="envoy" className="py-24 px-6 relative z-10 border-t border-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4">
              <Sparkles size={14} />
              <span className="text-xs font-bold uppercase tracking-wider">Flagship Product</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">The Socrenchus Envoy</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Stop talking to AI that agrees with you. Start training your Envoy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={<BrainCircuit className="text-blue-400" />}
              title="The Socratic Spark"
              description="Socrenchus pings you daily via SMS with provocative questions based on your specific research gaps — no waiting required."
            />
            <FeatureCard
              icon={<Shield className="text-indigo-400" />}
              title="Intellectual Ghost"
              description="Every debate builds your siloed Memory Bank. We extract your unique claims and contradictions into a persistent digital twin."
            />
            <FeatureCard
              icon={<Zap className="text-blue-400" />}
              title="The Midwife Engine"
              description="Once a thesis is defended, the AI orchestrates the collaborative draft, citing your grounded data and past publications automatically."
            />
          </div>
          <div className="mt-16 max-w-md mx-auto text-center">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-3">
              <input
                type="email"
                placeholder="Enter your professional email"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all">
                <span>Join Waitlist</span>
                <ArrowRight size={18} />
              </button>
            </form>
            <p className="mt-4 text-xs text-slate-500">Limited to {WAITLIST_LIMIT} active thinkers for the initial Sparring Cycle. Launching {LAUNCH_QUARTER}.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <p className="text-slate-400 text-sm mb-1">Business Address</p>
              <p className="text-white font-medium">Socrenchus LLC</p>
              <p className="text-slate-400 text-sm">Spring Valley, NY 10977</p>
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
            <a href="https://bingodirect.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">BingoDirect</a>
            <a href="https://www.youtube.com/@BryanGoldstein" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Code &amp; Cosmos</a>
            <a href="https://xerotoai.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">XeroToAI</a>
            <a href="https://brysgo.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">brysgo.com</a>
            <a href="mailto:hello@socrenchus.com" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div>
            © 2025 Socrenchus LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm group hover:border-slate-700 transition-all">
    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </div>
);

export default LandingPage;
