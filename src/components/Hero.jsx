import { useEffect } from "react";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-5/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2 className="font-roboto">{hero.title}</h2>
          <br />
          <div className="flex justify-end gap-4">
            <a href="#contact" className="btn">
              {hero.btnText}
            </a>
            <a href={hero.resumeLink} className="btn" target="_blank" rel="noopener noreferrer">
              My CV
            </a>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5 ${
                  i === 1 && " flex-row-reverse text-right"
                }`}
              >
                <h3 className="font-roboto">{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-93">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover transform translate-x-[50px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
