import { motion } from "framer-motion";
import { content } from "../Content";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;

  return (
    <section id="contact" className="section">
      <Toaster />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="mb-8" data-aos="fade-down">{Contact.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Contact.social_media.map((content, i) => (
              <motion.a
                key={i}
                href={content.link}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
                data-aos-delay={i * 200}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="card group flex items-center gap-4 p-6 hover:border-primary-200"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-50/70 backdrop-blur-sm p-2 flex items-center justify-center group-hover:bg-primary-100/70 transition-colors">
                  <content.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Connect via</p>
                  <p className="font-medium text-gray-900">{content.text}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
