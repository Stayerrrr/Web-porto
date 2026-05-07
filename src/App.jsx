import { motion } from 'framer-motion'
import { Globe, MessageCircle, Mail, Code2, ExternalLink, Sparkles, Terminal } from 'lucide-react'
import profileImg from './assets/profile.jpeg'
import './App.css'

const App = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <div className="app-container">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="main-content"
      >
        {/* Hero Section */}
        <motion.section className="hero-section" variants={itemVariants}>
          <div className="profile-wrapper">
            <motion.div
              className="profile-glow"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <img src={profileImg} className="profile-img" alt="San" />
          </div>

          <motion.div className="hero-text" variants={itemVariants}>
            <div className="badge">
              <Sparkles size={14} className="icon-purple" />
              <span>Available for Hire</span>
            </div>
            <h1>Hi, I'm <span className="gradient-text">San</span></h1>
            <p className="subtitle">Self-Taught Fullstack Developer</p>
            <p className="description">
              Building scalable end-to-end applications with a focus on <strong>robust backends</strong> and <strong>dynamic interfaces</strong>.
              Bridging the gap between complex system logic and seamless user experiences.
            </p>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section className="skills-section" variants={itemVariants}>
          <div className="section-header">
            <Code2 size={20} className="icon-purple" />
            <h2>Tech Stack</h2>
          </div>
          <div className="skills-grid">
            {['React', 'JavaScript', 'Python', 'Java', 'Tailwind', 'Node.js'].map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-card"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Connect Section */}
        <motion.section className="connect-section" variants={itemVariants}>
          <div className="section-header">
            <Terminal size={20} className="icon-purple" />
            <h2>Connect</h2>
          </div>
          <div className="social-links">
            <SocialLink href="https://github.com/Stayerrrr" icon={<Code2 size={20} />} label="GitHub" />
            <SocialLink href="https://www.youtube.com/@Sanzameee" icon={<Globe size={20} />} label="Youtube" />
            <SocialLink href="https://twitter.com/san" icon={<MessageCircle size={20} />} label="Twitter" />
            <SocialLink href="mailto:san@example.com" icon={<Mail size={20} />} label="Email" />
          </div>
        </motion.section>
      </motion.main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p>© {new Date().getFullYear()} • Built with Passion</p>
      </motion.footer>
    </div>
  )
}

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="social-link"
    whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.1)' }}
  >
    {icon}
    <span>{label}</span>
    <ExternalLink size={12} className="external-icon" />
  </motion.a>
)

export default App
