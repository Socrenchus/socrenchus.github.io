import { useState } from 'react'
import { Mail, Sparkles, Users, FileText, Twitter, Linkedin, Github } from 'lucide-react'

function App() {
  const [email, setEmail] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle email submission - integrate with backend in production
    setShowSuccess(true)
    setEmail('')
    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
          <div className="bg-gradient-to-r from-cyber-blue to-deep-violet px-6 py-3 rounded-lg shadow-lg">
            <p className="font-semibold">Thanks for your interest! We'll be in touch soon.</p>
          </div>
        </div>
      )}
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-deep-violet bg-clip-text text-transparent">
              Socrenchus
            </div>
            <button 
              type="button"
              aria-label="Join Beta Program"
              className="px-6 py-2 bg-gradient-to-r from-cyber-blue to-deep-violet rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
            >
              Join Beta
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Stop talking to AI that{' '}
            <span className="bg-gradient-to-r from-cyber-blue to-deep-violet bg-clip-text text-transparent">
              agrees with you
            </span>
            .
            <br />
            Start training your Envoy.
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Socrenchus is the first Socratic AI that uses SPAR (Socratic Sparring) to turn your internal monologue into Intellectual Equity.
          </p>
          
          {/* Email Capture */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue text-white placeholder-slate-500"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-deep-violet rounded-lg font-bold hover:scale-105 transition-transform duration-200 whitespace-nowrap"
              >
                Request Access
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Stable Marriage Feature */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              The Gale-Shapley of Ideas
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We don't just match you with people. We use the Stable Marriage algorithm to pair your 'Intellectual Envoy' with the one partner who completes your thesis. Optimal collisions, zero noise.
            </p>
          </div>
          
          {/* Feature Card with Glassmorphism */}
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-cyber-blue to-deep-violet rounded-2xl flex items-center justify-center">
                  <Users className="w-10 h-10" />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-3">Stable Matching Algorithm</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Your ideas deserve the perfect intellectual counterpart. Our algorithm ensures every partnership is mutually optimal—no wasted connections, only profound synthesis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Midwife Workflow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              The Midwife Workflow
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Three steps to transform your thoughts into published work
            </p>
          </div>
          
          {/* Three-Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Spar */}
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyber-blue to-deep-violet rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div className="text-cyber-blue font-bold text-sm mb-2">STEP 1</div>
                <h3 className="text-2xl font-bold mb-4">Spar</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                AI pings you via SMS to challenge your latest research. No echo chamber, just sharp questions that expose gaps in your thinking.
              </p>
            </div>

            {/* Step 2: Synthesize */}
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyber-blue to-deep-violet rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-cyber-blue font-bold text-sm mb-2">STEP 2</div>
                <h3 className="text-2xl font-bold mb-4">Synthesize</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                The AI finds your stable partner. Someone whose intellectual framework complements yours, creating a sum greater than its parts.
              </p>
            </div>

            {/* Step 3: Publish */}
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyber-blue to-deep-violet rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <FileText className="w-8 h-8" />
                </div>
                <div className="text-cyber-blue font-bold text-sm mb-2">STEP 3</div>
                <h3 className="text-2xl font-bold mb-4">Publish</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Collaboratively draft and ship whitepapers via a headless interface. Your ideas, refined and ready for the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-slate-400">
              © 2024 Socrenchus LLC. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors duration-200">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
