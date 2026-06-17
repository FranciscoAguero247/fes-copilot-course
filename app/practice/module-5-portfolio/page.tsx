'use client'

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
        href="#contact"
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
    <section id="projects" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center">Recent Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-6"
            >
              <div className="bg-gray-200 h-32 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">Image</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h4>
              <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                aria-label={`View ${project.title} project`}
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12 px-6">
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

      <Footer />
    </div>
  )
}
