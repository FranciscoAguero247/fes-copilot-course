'use client'

import React, { useState, useEffect } from 'react'

/**
 * MODULE 5: Final Project - Portfolio Website (Unified Release - Fixed Theme Toggle)
 */

interface ProjectCard {
  id: number
  title: string
  description: string
  tags: string[]
  liveUrl: string
  githubUrl: string
}

// ==========================================
// 🎯 COMPONENTS: HEADER & NAVIGATION
// ==========================================
const Header = ({ isDark, toggleDark }: { isDark: boolean; toggleDark: () => void }) => (
  <header className="sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800">
    <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#" className="font-bold text-xl tracking-tight hover:opacity-80 transition-opacity text-slate-900 dark:text-white">
        Dev<span className="text-blue-600 dark:text-blue-400">Portfolio.</span>
      </a>
      
      <div className="flex items-center gap-6">
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
          <li><a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
          <li><a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDark}
          className="p-2 rounded-lg border transition-all duration-200 bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-yellow-400 dark:hover:bg-slate-700"
          aria-label="Toggle layout theme color"
        >
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.56 1.56m12.44 12.44l1.56 1.56M21 12h-2.25M5.25 12H3m3.22 5.78l1.56-1.56M17.66 4.22l-1.56 1.56M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  </header>
)

// ==========================================
// 🎯 COMPONENTS: HERO SECTION
// ==========================================
const HeroSection = () => (
  <section className="flex flex-col items-center justify-center text-center pt-8 md:pt-16 animate-fade-in">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
      Available For New Opportunities
    </div>
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl mb-6 text-slate-900 dark:text-white leading-tight">
      Hi, I'm Francisco Aguero. Building Web Applications With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Precision Code</span>
    </h1>
    <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-8 text-slate-600 dark:text-slate-400">
      Full Stack Developer crafting performant, scalable, and accessible web experiences using modern technologic architectures.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <a 
        href="mailto:blast255@live.com" 
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all shadow-md shadow-blue-500/10 hover:shadow-lg"
        aria-label="Send email to Francisco Aguero"
      >
        Contact Me
      </a>
      <a 
        href="#projects" 
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border transition-all text-slate-700 border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 dark:text-slate-300"
      >
        View Work
      </a>
    </div>
  </section>
)

// ==========================================
// 🎯 COMPONENTS: PROJECTS GRID
// ==========================================
const ProjectsGrid = () => {
  const projects: ProjectCard[] = [
    {
      id: 1,
      title: 'E-Commerce Platform Architecture',
      description: 'A full-stack e-commerce architecture utilizing scalable React components, server environments, and database caches.',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Real-Time Task Analytics Engine',
      description: 'Collaborative pipeline platform tracking production workflow metrics integrated with real-time websocket updates.',
      tags: ['Next.js', 'TypeScript', 'Firebase', 'WebSockets'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Interactive Weather Dashboard',
      description: 'Dynamic geographic parsing layout connecting modern location APIs with historical forecasting datasets.',
      tags: ['React', 'REST APIs', 'Tailwind CSS', 'ChartJS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Automated Portfolio Generator',
      description: 'System utility interpreting dynamic data definitions into optimized, responsive UI structures automatically.',
      tags: ['Next.js', 'AI API', 'Automation', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="text-center md:text-left mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white">Featured Projects</h2>
        <p className="text-slate-600 dark:text-slate-400">A handpicked selection of responsive applications built with maintainable structure in mind.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article 
            key={project.id} 
            className="group flex flex-col justify-between border rounded-xl p-5 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white border-slate-200 hover:border-slate-300 shadow-slate-100 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-700 dark:shadow-slate-950/30"
          >
            <div>
              <div className="w-full aspect-video rounded-lg mb-4 flex items-center justify-center border border-dashed bg-slate-100 border-slate-300 dark:bg-slate-800/50 dark:border-slate-700">
                <svg
                  className="w-10 h-10 text-slate-400 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm mb-4 line-clamp-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-0.5 rounded-md font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-100 dark:border-slate-800">
                <a href={project.liveUrl} className="font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1" aria-label={`View deployment live for ${project.title}`}>
                  Live Demo ↗
                </a>
                <a href={project.githubUrl} className="hover:underline text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200">
                  Repository
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

// ==========================================
// 🎯 COMPONENTS: ABOUT ME SECTION
// ==========================================
const AboutSection = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js',
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
    'Tailwind CSS', 'Git', 'REST APIs', 'GraphQL',
  ]

  return (
    <section id="about" className="scroll-mt-20 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white">About Me</h2>
        <p className="text-slate-600 dark:text-slate-400">A look into my background workflow strategies, frameworks, and technical configurations.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 items-start">
        <div className="flex flex-col items-center text-center md:col-span-1">
          <div className="w-36 h-36 rounded-2xl border-2 p-1 border-blue-500 mb-4 bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 shadow-xl flex items-center justify-center overflow-hidden">
            <div className="w-full h-full rounded-xl flex items-center justify-center bg-slate-200 dark:bg-slate-800">
              <svg className="w-16 h-16 text-slate-400 dark:text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">Francisco Aguero</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Full Stack Developer</p>
        </div>

        <div className="space-y-6 md:col-span-2 text-center md:text-left">
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            I'm a passionate Full Stack Developer focused on creating high-quality, accessible, and performant web applications. With seasoned experience mapping the modern web stack ecosystem, I enjoy breaking down complex algorithmic problems into intuitive, production-grade applications.
          </p>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">Core Expertise Matrix</h4>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.map(skill => (
                <span key={skill} className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 px-3 py-1.5 rounded-lg text-sm font-medium border border-blue-100 dark:border-blue-900 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 🎯 COMPONENTS: VALIDATED CONTACT SECTION
// ==========================================
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
      setTimeout(() => setIsSubmitted(false), 6000)
    } else {
      setErrors(validationErrors)
    }
  }

  const isFormValid =
    formData.name.trim() !== '' &&
    /\S+@\S+\.\S+/.test(formData.email) &&
    formData.message.trim() !== ''

  return (
    <section id="contact" className="scroll-mt-20 max-w-xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white">Get In Touch</h2>
        <p className="text-slate-600 dark:text-slate-400">Drop a line down below to initiate projects or career connection opportunities.</p>
      </div>

      {isSubmitted ? (
        <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300 p-8 rounded-2xl text-center shadow-sm animate-fade-in">
          <h3 className="text-2xl font-bold mb-2">Message Dispatched!</h3>
          <p className="text-sm mb-4">Thanks for reaching out. Your placeholder submission verified perfectly.</p>
          <button onClick={() => setIsSubmitted(false)} className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline transition">
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4 transition-colors">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-3.5 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:bg-slate-800 dark:text-white ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700'}`}
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-3.5 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:bg-slate-800 dark:text-white ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700'}`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Message</label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className={`w-full px-3.5 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:bg-slate-800 dark:text-white ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700'}`}
              placeholder="What's on your mind?"
            />
            {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-lg text-sm transition-all shadow-md hover:bg-blue-700 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  )
}

// ==========================================
// 🎯 COMPONENTS: FOOTER
// ==========================================
const Footer = () => (
  <footer className="mt-24 border-t text-sm bg-slate-50 border-slate-200 text-slate-600 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-400 transition-colors duration-300">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-slate-900 dark:text-blue-400 font-bold mb-3">Francisco Aguero</h3>
          <p className="text-xs leading-relaxed max-w-xs">Building responsive, clean web experiences mapping optimization across the full developer lifecycle stack.</p>
        </div>
        <div>
          <h4 className="text-slate-900 dark:text-blue-400 font-semibold mb-3">Quick Navigation Links</h4>
          <ul className="space-y-1.5 text-xs">
            <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects Grid</a></li>
            <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Matrix</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Form</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 dark:text-blue-400 font-semibold mb-3">Follow Platforms</h4>
          <div className="flex gap-4 text-xs">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Developer Profile" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Corporate Profile" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter Social Profile" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Twitter</a>
          </div>
        </div>
      </div>
      <div className="border-t pt-6 text-center text-xs border-slate-200 dark:border-slate-800">
        <p>&copy; {new Date().getFullYear()} Francisco Aguero. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

// ==========================================
// 🎯 MAIN CONTAINER EXPORT
// ==========================================
export default function Module5Portfolio() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Explicitly toggle the global class on document element root
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    // Explicitly binding the 'dark' variant style directly to the parent wrapper class definition ensures background values re-render instantly inside Next.js layout sheets.
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Header isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 md:space-y-32">
        <HeroSection />
        <hr className="border-slate-200 dark:border-slate-800" />
        <ProjectsGrid />
        <hr className="border-slate-200 dark:border-slate-800" />
        <AboutSection />
        <hr className="border-slate-200 dark:border-slate-800" />
        <ContactSection />
      </main>

      <Footer />

      {/* Global CSS Injection Layer */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
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