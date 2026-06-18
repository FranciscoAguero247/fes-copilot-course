'use client'

import { useState } from 'react'

/**
 * MODULE 5: Final Project - Portfolio Website
 *
 * This is your capstone project! You'll build a complete personal portfolio
 * website using everything you've learned:
 * - Agent Mode for scaffolding large sections
 * - Edit Mode for surgical refinements
 * - Ask Mode for guidance and improvements
 * - Your rules for consistent styling
 *
 * Follow the step-by-step instructions marked below.
 */

const Header = () => (
  <header className="sticky top-0 z-50 bg-white shadow-sm">
    <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
      <ul className="flex gap-6">
        <li>
          <a href="#projects" className="text-gray-600 hover:text-gray-900 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

const HeroSection = () => (
  <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-4">Hi, I'm Francisco Aguero</h2>
      <p className="text-xl text-blue-100 mb-8">
        Full Stack Developer crafting performant and accessible web experiences with modern
        technologies.
      </p>
      <a
        href="mailto:blast255@live.com"
        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
        aria-label="Contact me"
      >
        Contact Me
      </a>
    </div>
  </section>
)

interface ProjectCard {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
}

const ProjectsGrid = () => {
  const projects: ProjectCard[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task manager with WebSocket integration',
      tags: ['Next.js', 'TypeScript', 'Firebase'],
      link: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather application with real-time data and forecasts',
      tags: ['React', 'API', 'Tailwind CSS'],
      link: '#',
    },
    {
      id: 4,
      title: 'Portfolio Generator',
      description: 'Automated portfolio builder for developers using AI',
      tags: ['Next.js', 'AI API', 'Automation'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="bg-gray-200 h-48 flex items-center justify-center border-b border-gray-100">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-blue-50 text-blue-600 text-xs font-semibold px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                  aria-label={`View details for ${project.title}`}
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const AboutSection = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'Git',
    'REST APIs',
    'GraphQL',
  ]

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <div className="relative group mb-12">
            <div className="w-48 h-48 bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden border-4 border-gray-100 shadow-xl">
              <svg className="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-8 text-gray-900">About Me</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            I'm a passionate Full Stack Developer with a focus on building high-quality, accessible,
            and performant web applications. With experience across the modern web stack, I enjoy
            solving complex problems and turning ideas into reality through clean code.
          </p>

          <h3 className="text-xl font-bold mb-6 text-gray-900">Technical Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map(skill => (
              <span
                key={skill}
                className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

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
      // Simulate form submission
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
    } else {
      setErrors(validationErrors)
    }
  }

  const isFormValid = 
    formData.name.trim() !== '' && 
    /\S+@\S+\.\S+/.test(formData.email) && 
    formData.message.trim() !== '';

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Get In Touch</h2>
        {isSubmitted ? (
          <div className="bg-blue-50 border border-blue-200 text-blue-700 p-8 rounded-2xl text-center shadow-sm">
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p>Thanks for reaching out. I'll get back to you as soon as I can.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-6 text-blue-600 font-semibold hover:underline transition"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
                placeholder="What's on your mind?"
              />
              {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-white font-bold mb-4">Portfolio</h3>
          <p className="text-sm">Building amazing web experiences with modern technologies.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Follow</h4>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-sm">
        <p>&copy; 2024 Portfolio. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default function Module5Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProjectsGrid />
      <AboutSection />
      <ContactSection />

      <Footer />
    </div>
  )
}
