import { motion } from "framer-motion";
import { content } from "../Content";

const StatBox = ({ title, subtitle }) => (
  <div className="glass-panel rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 w-full min-w-[280px] max-w-sm">
    <div className="flex items-center gap-4">
      <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
        {title}
      </span>
      <p className="text-sm text-gray-600 font-medium">{subtitle}</p>
    </div>
  </div>
);

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="section relative overflow-hidden">
      <div className="container min-h-[90vh] flex items-center justify-center px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 flex flex-col items-center"
          >
            <div className="space-y-4 text-center">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
              >
                {hero.firstName} {hero.LastName}
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl text-primary-600 font-heading"
              >
                {hero.title}
              </motion.h2>
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col gap-4 w-full items-center"
            >
              <StatBox title={hero.hero_content[0].count} subtitle={hero.hero_content[0].text} />
              <StatBox title="MSc" subtitle="in Renewable & Sustainable Energy Technologies" />
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a 
                href="#contact" 
                className="glass-panel group relative px-6 py-3 rounded-lg overflow-hidden bg-gradient-to-r from-primary-600/80 to-primary-500/80 text-white font-semibold shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {hero.btnText}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 transform transition-transform duration-300 translate-y-full group-hover:translate-y-0"/>
              </a>
              <a 
                href={hero.resumeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-panel group relative px-6 py-3 rounded-lg overflow-hidden border-2 border-primary-600/50 text-primary-600 font-semibold transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download CV
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-primary-600/80 backdrop-blur-sm transform transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left"/>
              </a>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative order-first md:order-last"
          >
            <div className="absolute inset-0 bg-gradient-primary from-primary-100/30 to-transparent rounded-3xl transform rotate-6" />
            <img
              src={hero.image}
              alt="Profile"
              className="relative rounded-3xl shadow-lg w-full max-w-lg mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
