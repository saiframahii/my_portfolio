import { motion } from "framer-motion";
import { content } from "../Content";

const AboutMe = () => {
  const { aboutme } = content;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="aboutme" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="mb-4">{aboutme.title}</h2>
          <p className="text-lg text-gray-600">{aboutme.bio}</p>
        </motion.div>

        <div className="mt-16">
          <h3 className="text-center mb-8">{aboutme.skills_title}</h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {aboutme.skills_content.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="card p-6 group hover:border-primary-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-50/70 backdrop-blur-sm p-2 flex items-center justify-center group-hover:bg-primary-100/70 transition-colors">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{skill.para}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
