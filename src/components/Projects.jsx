import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title font-Roboto" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle font-Roboto" data-aos="fade-down" data-aos-delay="200">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            data-aos-duration="1000"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            data-aos-duration="1000"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img 
                  src={content.image} 
                  alt="..." 
                  data-aos="zoom-in"
                  data-aos-delay={i * 300}
                />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold" data-aos="fade-up" data-aos-delay={i * 300 + 100}>
                    {content.title}
                  </h5>
                  <button className="font-bold text-gray self-end" data-aos="fade-up" data-aos-delay={i * 300 + 200}>
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
