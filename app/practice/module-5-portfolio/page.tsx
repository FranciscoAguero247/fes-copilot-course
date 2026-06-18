'use client'

import React, { useState, useEffect } from 'react'

/**
 * MODULE 5: Final Project - Portfolio Website (Completed)
 * * Features implemented:
 * ✓ Header with dynamic dark mode toggle & smooth-scroll navigation
 * ✓ Hero section with a custom tagline and responsive CTA button
 * ✓ Projects grid with responsive flex/grid layouts and hover scale transitions
 * ✓ Centered About Me section featuring a structured skills matrix
 * ✓ Fully interactive Contact Form with state management, email validation, and success message
 * ✓ Responsive Footer equipped with accessible, aria-labeled social links
 * ✓ Smooth scrolling & global theme context matching Tailwind standard variants
 */

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  liveUrl: string
  githubUrl: string
}

export default function Module5Portfolio() {
  // --- STATE ---
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  // --- DARK MODE HANDLER ---
  useEffect(() => {
    // Sync theme class with local component state wrapper
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  // --- FORM VALIDATION ---
  const isEmailValid = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const isFormValid = 
    formState.name.trim() !== '' && 
    isEmailValid(formState.email) && 
    formState.message.trim() !== ''

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isFormValid) {
      // Simulate API submission
      setIsSubmitted(true)
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000) // Reset success flag after 5s
    }
  }

  // --- SAMPLE DATA ---
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Microservices Architecture",
      description: "A highly scalable distributed system handling thousands of concurrent requests utilizing Next.js, Node.js, and Redis cache architectures.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "AI-Powered Task Analytics Engine",
      description: "Integrated Large Language Models to contextualize workflow efficiency metrics. Features fluid interactive vector graphs.",
      tags: ["React", "Python", "FastAPI", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Decentralized Asset Dashboard",
      description: "Real-time ledger tracking application interacting via Web3 APIs. Formatted optimized chart engines for mobile and desktop screens.",
      tags: ["TypeScript", "Next.js", "GraphQL", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const skills: string[] = [
    "React / Next.js", "Node.js & Express", "TypeScript", "RESTful & GraphQL APIs",
    "Tailwind CSS", "Databases & Data Handling", "System Orchestration", "Git / CI-CD"
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* ==========================================
       * 🎯 STEP 1 & 7: HEADER & NAVIGATION & DARK MODE
       * ========================================== */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
            Francisco<span className="text-blue-600 dark:text-blue-400">.Dev</span>
          </a>
          
          <nav className="flex items-center gap-6">
            <ul className="hidden md:flex space-x-6 text-sm font-medium">
              <li><a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>

            {/* Dark Mode Button Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg border transition-all duration-200 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'}`}
              aria-label="Toggle structural dark mode layout"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.56 1.56m12.44 12.44l1.56 1.56M21 12h-2.25M5.25 12H3m3.22 5.78l1.56-1.56M17.66 4.22l-1.56 1.56M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 md:space-y-32">
        
        {/* ==========================================
         * 🎯 STEP 2 & 8: HERO SECTION WITH ANIMATION
         * ========================================== */}
        <section id="hero" className="flex flex-col items-center justify-center text-center pt-8 md:pt-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            Systems Engineering Graduate
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-3xl mb-6">
            Designing Full-Stack Software Systems with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Precision Architecture</span>
          </h1>
          <p className={`text-base sm:text-lg md:text-xl max-w-2xl mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Hi, I'm Francisco Agüero. I translate analytical systems engineering principles into responsive user interfaces and robust backend logic. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:blast255@live.com" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all shadow-md shadow-blue-500/10 hover:shadow-lg"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border transition-all ${isDarkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-300' : 'border-slate-300 hover:bg-slate-100 text-slate-700'}`}
            >
              View Work
            </a>
          </div>
        </section>

        <hr className={isDarkMode ? 'border-slate-800' : 'border-slate-200'} />

        {/* ==========================================
         * 🎯 STEP 5: ABOUT SECTION
         * ========================================== */}
        <section id="about" className="scroll-mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">About Me</h2>
            <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>My background, core competencies, and operational philosophy.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 items-start">
            <div className="flex flex-col items-center text-center md:col-span-1">
              <div className={`w-36 h-36 rounded-full border-2 p-1 border-blue-500 mb-4 bg-gradient-to-tr ${isDarkMode ? 'from-slate-800 to-slate-900' : 'from-slate-200 to-slate-100'}`}>
                <div className={`w-full h-full rounded-full flex items-center justify-center ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-slate-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg">Francisco Agüero</h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Systems Engineering Graduate</p>
            </div>

            <div className="space-y-6 md:col-span-2 text-center md:text-left">
              <p className={`leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                I am a detail-oriented and analytical Systems Engineering graduate with practical experience building full-stack applications. I possess a strong foundational understanding of data handling, databases, and system orchestration, coupled with a proven capability for designing responsive user interfaces and developing server-side logic using Node.js, Express, and REST APIs. Driven by an exceptional work ethic and an ironclad 100% attendance record, I thrive when collaborating seamlessly in cross-functional, fast-paced environments.
              </p>
              
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">Core Expertise Matrix</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 justify-center md:justify-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-emerald-500 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className={isDarkMode ? 'border-slate-800' : 'border-slate-200'} />

        {/* ==========================================
         * 🎯 STEP 3: PROJECTS GRID SECTION
         * ========================================== */}
        <section id="projects" className="scroll-mt-20">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Projects</h2>
            <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>A selection of engineered web applications demonstrating end-to-end full-stack capability.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article 
                key={project.id} 
                className={`group flex flex-col justify-between border rounded-xl p-5 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isDarkMode ? 'bg-slate-900 border-slate-800 hover:border-slate-700 shadow-slate-950/30' : 'bg-white border-slate-200 hover:border-slate-300 shadow-slate-100'}`}
              >
                <div>
                  <div className={`w-full aspect-video rounded-lg mb-4 flex items-center justify-center border border-dashed ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-100 border-slate-300'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-400 group-hover:scale-110 transition-transform duration-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className={`text-sm mb-4 line-clamp-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className={`text-xs px-2.5 py-0.5 rounded-md font-medium ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-100 dark:border-slate-800">
                    <a href={project.liveUrl} className="font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1">Live Demo ↗</a>
                    <a href={project.githubUrl} className={`hover:underline ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-800'}`}>Repository</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <hr className={isDarkMode ? 'border-slate-800' : 'border-slate-200'} />

        {/* ==========================================
         * 🎯 STEP 6: CONTACT FORM SECTION WITH VALIDATION
         * ========================================== */}
        <section id="contact" className="scroll-mt-20 max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Get In Touch</h2>
            <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Drop a line below to connect, discuss system requirements, or initiate projects.</p>
          </div>

          <form onSubmit={handleSubmit} className={`border p-6 rounded-2xl shadow-sm space-y-4 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                className={`w-full px-3.5 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'}`}
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                className={`w-full px-3.5 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'}`}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
              <textarea 
                id="message"
                name="message"
                rows={4}
                value={formState.message}
                onChange={handleInputChange}
                className={`w-full px-3.5 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'}`}
                placeholder="Let's discuss full-stack integrations, architecture setups, or engineering agendas..."
                required
              />
            </div>

            <button 
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all duration-150 text-white ${isFormValid ? 'bg-blue-600 hover:bg-blue-700 active:scale-95 cursor-pointer shadow-sm' : 'bg-slate-400 dark:bg-slate-700 cursor-not-allowed opacity-60'}`}
            >
              Send Message
            </button>

            {isSubmitted && (
              <div className="mt-4 p-3 rounded-lg text-sm bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900 flex items-center gap-2 animate-fade-in">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Success! Message received. I will respond to your inquiry shortly.</span>
              </div>
            )}
          </form>
        </section>
      </main>

      {/* ==========================================
       * 🎯 STEP 4: FOOTER WITH ACCESSIBLE SOCIALS
       * ========================================== */}
      <footer className={`mt-24 border-t text-sm transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Francisco Agüero. All rights reserved.</p>
          
          <div className="flex space-x-6">
            <a href="https://github.com/FranciscoAguero247" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Visit external developer GitHub profile">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/francisco-aguero-39665a236/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Visit external corporate LinkedIn platform profile">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/francisco.aguero.1253/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Visit external social communications Facebook profile">
              Facebook
            </a>
          </div>
        </div>
      </footer>

      {/* Global CSS Injecting Keyframe Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}