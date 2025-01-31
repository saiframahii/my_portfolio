import { motion } from "framer-motion";
import { content } from "../Content";

const AboutMe = () => {
  const { aboutme } = content;

  return (
    <section id="aboutme" className="min-h-fit bg-bg_light_primary py-14">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="md:container px-5"
      >
        <motion.h2 className="title mb-6 font-roboto">
          {aboutme.title}
        </motion.h2>
        <motion.p className="subtitle mb-10">{aboutme.bio}</motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {aboutme.skills_content.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-10 group-hover:scale-125 duration-200"
              />
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
