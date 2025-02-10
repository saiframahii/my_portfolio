import React from 'react';
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUniversity, FaBriefcase } from 'react-icons/fa';
import { content } from "../Content";

const Timeline = () => {
  const { timeline } = content;
  const timelineEvents = timeline.events;

  return (
    <section id="timeline" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="mb-4">Timeline</h2>
          <p className="text-lg text-gray-600">My professional and academic journey</p>
        </motion.div>

        <VerticalTimeline>
          {timelineEvents.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{ background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
              contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.7)' }}
              date={event.date}
              iconStyle={{ background: event.type === 'education' ? 'rgb(233, 30, 99)' : 'rgb(33, 150, 243)', color: '#fff' }}
              icon={event.type === 'education' ? <FaUniversity /> : <FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title font-heading text-2xl font-bold">{event.title}</h3>
              <h4 className="vertical-timeline-element-subtitle font-heading text-xl italic text-primary-600 mt-1">{event.organization}</h4>
              <ul className="mt-4 text-sm list-disc list-inside text-gray-700">
                {event.details.map((detail, i) => (
                  <li key={i} className="mb-2">{detail}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Timeline;
