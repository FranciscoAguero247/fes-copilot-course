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
      <h2 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h2>
      <p className="text-xl text-blue-100 mb-8">
        Showcasing projects built with modern web technologies
      </p>
      <button
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
        aria-label="Contact me button"
      >
        <a href="#contact">Contact Me</a>
      </button>
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
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task manager with WebSocket integration',
      tags: ['Next.js', 'TypeScript', 'Firebase'],
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather application with real-time data and forecasts',
      tags: ['React', 'API', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 4,
      title: 'Portfolio Generator',
      description: 'Automated portfolio builder for developers using AI',
      tags: ['Next.js', 'AI API', 'Automation'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center">Recent Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
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
                {project.tags.map((tag) => (
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

      {/* ==========================================
       * 🎯 STEP 2: FILL IN THE HERO SECTION
       * ==========================================
       *
       * ✅ TODO: ADD CONTENT TO HERO SECTION
       *
       * Once you have the base layout, enhance the hero:
       *
       * Instructions:
       * 1. Highlight the hero section in your new layout
       * 2. Use Inline Chat (Ctrl/Cmd + I)
       * 3. Ask: "Hero with my name, tagline, and a 'Contact Me' button"
       * 4. Customize with your actual name and tagline
       * 5. Refine: "Make the button a mailto: link to [your-email]"
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 3: BUILD THE PROJECTS GRID
       * ==========================================
       *
       * ✅ TODO: ADD PROJECT CARDS
       *
       * Instructions:
       * 1. Highlight the projects section
       * 2. Use Agent Mode
       * 3. Ask: "Projects section with cards: title, description,
       *         image placeholder, and link"
       * 4. Add 3-4 sample projects
       * 5. Refine with Inline Chat: "Add a hover animation for each card"
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 4: CREATE THE FOOTER
       * ==========================================
       *
       * ✅ TODO: ADD FOOTER WITH SOCIAL LINKS
       *
       * Instructions:
       * 1. Highlight the footer section
       * 2. Use Inline Chat
       * 3. Ask: "Footer with copyright and links to GitHub,
       *         LinkedIn, Twitter"
       * 4. Refine: "Add aria-labels for social links"
       * 5. Update with your actual social media URLs
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 5: ADD AN ABOUT SECTION
       * ==========================================
       *
       * ✅ TODO: INSERT ABOUT SECTION
       *
       * Instructions:
       * 1. Place cursor between Projects and Footer
       * 2. Use Agent Mode
       * 3. Ask: "About section with my photo placeholder,
       *         short bio, and list of skills"
       * 4. Refine: "Use Tailwind spacing consistent with Hero section"
       * 5. Refine: "Keep the About text in a centered column"
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 6: ADD CONTACT FORM
       * ==========================================
       *
       * ✅ TODO: CREATE CONTACT FORM
       *
       * Instructions:
       * 1. Add a new section before the footer
       * 2. Use Agent Mode
       * 3. Ask: "Add a contact form with name, email,
       *         message and basic validation"
       * 4. Use Edit Mode: "Disable submit until all fields are valid"
       * 5. Add: "Show success message after submission"
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 7: ADD DARK MODE (OPTIONAL)
       * ==========================================
       *
       * ✅ TODO: IMPLEMENT DARK MODE TOGGLE
       *
       * Instructions:
       * 1. Highlight the header
       * 2. Use Agent Mode
       * 3. Ask: "Add dark mode toggle in the header"
       * 4. Test the toggle works across all sections
       * 5. Refine colors if needed
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 8: POLISH & ANIMATIONS
       * ==========================================
       *
       * ✅ TODO: ADD FINISHING TOUCHES
       *
       * Use Edit Mode for these refinements:
       * 1. "Fade in hero section on page load"
       * 2. "Add smooth scroll behavior for navigation links"
       * 3. "Improve spacing and typography hierarchy"
       * 4. "Ensure all sections are responsive on mobile"
       * 5. "Add loading states where appropriate"
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 FINAL REVIEW CHECKLIST
       * ==========================================
       *
       * Before you're done, verify:
       *
       * ✓ Responsive Design
       *   - Test on mobile, tablet, desktop viewports
       *   - Check text is readable at all sizes
       *
       * ✓ Accessibility
       *   - All interactive elements have aria-labels
       *   - Images have alt text
       *   - Keyboard navigation works
       *   - Color contrast is sufficient
       *
       * ✓ Consistency
       *   - Follows your .github/copilot-instructions.md rules
       *   - Uses Tailwind classes consistently
       *   - Arrow functions throughout
       *   - TypeScript types defined
       *
       * ✓ Functionality
       *   - All links work
       *   - Contact form validates input
       *   - Animations are smooth
       *   - No console errors
       *
       * ========================================== */}
    </div>
  )
}

/* ==========================================
 * 💡 TIPS FOR SUCCESS
 * ==========================================
 *
 * 1. START BIG, THEN REFINE
 *    - Use Agent Mode to scaffold entire sections quickly
 *    - Then use Edit Mode (Inline Chat) for small improvements
 *    - Don't try to get everything perfect in one prompt
 *
 * 2. ITERATE IN STEPS
 *    - Build one section at a time
 *    - Test each section before moving to the next
 *    - It's easier to debug small changes
 *
 * 3. USE ASK MODE FOR GUIDANCE
 *    - "What's the best way to structure this component?"
 *    - "How can I improve the performance here?"
 *    - "What accessibility features am I missing?"
 *
 * 4. CUSTOMIZE IT
 *    - Replace placeholder text with your real information
 *    - Add your own projects and achievements
 *    - Make it reflect your personality and style
 *
 * 5. LEARN BY REVIEWING
 *    - Don't just accept code blindly
 *    - Read what Copilot generates
 *    - Ask it to explain anything unclear
 *    - Understand the patterns so you can use them later
 *
 * 6. COMMON ISSUES & FIXES
 *    - Spacing looks off? → "Improve spacing using Tailwind"
 *    - Not responsive? → "Make this section responsive on mobile"
 *    - Missing types? → "Add TypeScript types for props"
 *    - Need animation? → "Add smooth transition animations"
 *
 * ========================================== */

/* ==========================================
 * 🎉 CONGRATULATIONS!
 * ==========================================
 *
 * When you complete this portfolio, you will have:
 *
 * ✓ Built a real, production-ready website with Copilot
 * ✓ Mastered Agent Mode for large scaffolding tasks
 * ✓ Used Edit Mode for precise refinements
 * ✓ Applied Ask Mode for strategic guidance
 * ✓ Leveraged rules for consistent code style
 * ✓ Created something you can actually deploy and share!
 *
 * NEXT STEPS:
 * - Deploy your portfolio to Vercel or Netlify
 * - Share it on LinkedIn and Twitter
 * - Keep practicing with Copilot on real projects
 * - Teach others what you've learned
 *
 * Remember: Copilot is a tool to amplify your skills,
 * not replace them. The more you understand code, the
 * better you'll be at directing Copilot to build
 * exactly what you envision.
 *
 * Happy coding! 🚀
 *
 * ========================================== */
