import { motion } from "framer-motion";
import { content } from "../Content";

const AboutMe = () => {
  const { aboutme } = content;

  return (
    <section id="aboutme" className="section">
      <div className="container">
        <div 
          data-aos="fade-up"
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="mb-4">{aboutme.title}</h2>
          <p className="text-lg text-gray-600">{aboutme.bio}</p>
        </div>

        <div className="mt-16">
          <h3 className="text-center mb-8" data-aos="fade-up">{aboutme.skills_title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutme.skills_content.map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
