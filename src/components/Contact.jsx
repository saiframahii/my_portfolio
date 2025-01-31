import { createElement } from "react";
import { content } from "../Content";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white font-Roboto" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle font-Roboto" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 justify-center">
          {Contact.social_media.map((content, i) => (
            <div
              // key={i}
              data-aos="fade-down"
              // data-aos-delay={i * 43}
              className="flex flex-col items-center gap-2"
            >
              <h4 className="text-white">{createElement(content.icon)}</h4>
              <a href={content.link} target="_blank" rel="noopener noreferrer">
                {content.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
