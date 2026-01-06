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
  BookOpen
} from 'lucide-react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for waitlist goes here
    console.log('Signed up:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-lg">S</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white uppercase">Socrenchus</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#philosophy" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Philosophy</a>
            <a href="#envoy" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">The Envoy</a>
            <a href="#collab" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Marriage</a>
            <button className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-200 transition-all">
              Request Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 z-10">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6 animate-fade-in">
            <Sparkles size={14} />
            <span className="text-xs font-bold uppercase tracking-wider">Phase One: The Socratic Seed</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
            Stop talking to AI that agrees with you. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Start training your Envoy.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Socrenchus is the first AI sparring partner that uses proactive cross-examination to turn your internal monologue into Intellectual Equity. 
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-3 max-w-md mx-auto">
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
          <p className="mt-4 text-xs text-slate-500">Limited to 50 active thinkers for the initial Sparring Cycle.</p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="envoy" className="py-24 px-6 relative z-10 border-t border-slate-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BrainCircuit className="text-blue-400" />}
              title="The Socratic Spark"
              description="Instead of waiting for you, Socrenchus pings you daily via SMS with provocative questions based on your specific research gaps."
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
        </div>
      </section>

      {/* Stable Marriage Section */}
      <section id="collab" className="py-24 px-6 bg-slate-900/30 border-y border-slate-900">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6">
              <span className="text-xs font-bold tracking-widest uppercase">The Math of Meaning</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              The Gale-Shapley of Ideas.
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We don't do "networking." We solve a variant of the **Stable Marriage Problem** using your intellectual capital. 
              Socrenchus identifies the one partner whose knowledge completes your thesis, ensuring that every collaboration is a stable, high-output collision of minds.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <ChevronRight size={14} className="text-blue-500" />
                </div>
                <span className="text-slate-300 font-medium">Mathematical Synergetic Pairing</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <ChevronRight size={14} className="text-blue-500" />
                </div>
                <span className="text-slate-300 font-medium">Headless Collaborative Environments</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <ChevronRight size={14} className="text-blue-500" />
                </div>
                <span className="text-slate-300 font-medium">Automated Citation & Attribution</span>
              </li>
            </ul>
          </div>
          <div className="md:w-5/12 relative">
            <div className="absolute inset-0 bg-blue-600/20 blur-[80px] rounded-full" />
            <div className="relative border border-slate-800 rounded-3xl p-8 bg-slate-950/50 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">Match Analysis: 98.4%</span>
              </div>
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-white uppercase tracking-tighter">Your Envoy</span>
                    <span className="text-[10px] text-blue-400 font-mono">Expertise: AI Architecture</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-blue-500" />
                  </div>
                </div>
                <div className="flex justify-center py-2 animate-pulse">
                  <Users className="text-slate-600" size={24} />
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-white uppercase tracking-tighter">Matched Partner</span>
                    <span className="text-[10px] text-indigo-400 font-mono">Expertise: Synthetic Bio</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-indigo-500" />
                  </div>
                </div>
                <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg text-sm font-bold transition-all">
                  Initiate Collaborative Sprint
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto / CTA */}
      <section id="philosophy" className="py-32 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <BookOpen className="mx-auto text-blue-500 mb-8" size={40} />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            The end of the resume. <br />
            The birth of the intellectual ghost.
          </h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed italic">
            "Your thoughts shouldn't die in your notes. They should be the capital that buys you a seat at the table of the future."
          </p>
          <div className="flex flex-col items-center">
            <button className="bg-white text-slate-950 px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-200 transition-all flex items-center space-x-3 group">
              <span>Secure Your Seed Access</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-6 text-sm text-slate-600">Phase One launching Q1 2026. Join the Elite Fifty.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <span className="font-bold text-white text-lg tracking-widest uppercase">Socrenchus</span>
            <span className="text-slate-700">|</span>
            <span>Est. 2025</span>
          </div>
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Manifesto</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
          <div>
            © 2025 Socrenchus LLC. All intellectual property remains the ghost of the user.
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
    <p className="text-slate-400 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

export default LandingPage;
