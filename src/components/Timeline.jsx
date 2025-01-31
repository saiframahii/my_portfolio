import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUniversity, FaBriefcase } from 'react-icons/fa';

const timelineEvents = [
  {
    title: "PhD in Building Automation and Control Systems",
    organization: "Birmingham City University",
    date: "Feb 2024 - Present",
    icon: FaUniversity,
    iconBgColor: 'rgb(233, 30, 99)',
    details: [
      "Researching adaptive occupant-centric lighting control systems to optimise energy efficiency and visual comfort.",
      "Investigating the integration of IoT devices, AI, and Human Machine Interfaces for enhanced building control.",
    ],
  },
  {
    title: "Digital Innovation Practitioner",
    organization: "University College Birmingham · Part-time",
    date: "May 2024 - Jan 2025",
    icon: FaBriefcase,
    iconBgColor: 'rgb(33, 150, 243)',
    details: [
      "Collaborated with SMEs to identify and address digital skills gaps.",
      "Developed tailored innovation projects for digital transformation.",
      "Conducted organizational needs analysis for skill development.",
      "Aligned UCB’s digital curriculum with real-world business needs.",
      "Facilitated partnerships between businesses and university resources.",
    ],
  },
  {
    title: "Azure Data Engineer",
    organization: "Kagool Ltd",
    date: "Sep 2021 - Feb 2024",
    icon: FaBriefcase,
    iconBgColor: 'rgb(33, 150, 243)',
    details: [
      "Developed, managed, and deployed Kagool’s Azure-based data migration PaaS (Velocity).",
      "Engineered robust ETL pipelines using Azure Data Factory and Databricks.",
      "Led the creation of a metadata-driven PaaS product hosted on Azure, empowering end-users with streamlined management of workflows, integrations, and data governance.",
      "Applied advanced knowledge of Azure AI services, including Azure OpenAI, Azure Search, and Document Intelligence to embed intelligent features into cloud-based applications.",
      "Worked within Agile teams to deliver projects across Development, QA, SIT, and Production environments, ensuring on-time and high-quality delivery of solutions.",
    ],
  },
  {
    title: "MSc in Renewable & Sustainable Energy Technologies",
    organization: "Northumbria University",
    date: "Sep 2020 - Sep 2021",
    icon: FaUniversity,
    iconBgColor: 'rgb(233, 30, 99)',
    details: ["Graduated with First Class Honors."],
  },
];

const Timeline = () => (
  <section id="timeline" className="py-14 bg-bg_light_primary relative">
    <div className="md:container px-5">
      <h2 className="title font-Roboto mb-20">
        My Journey
      </h2>
      <VerticalTimeline>
        {timelineEvents.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: '#fff', color: '#000'}}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date={event.date}
            iconStyle={{ background: event.iconBgColor, color: '#fff' }}
            icon={<event.icon />}
          >
            <h3 className="vertical-timeline-element-title font-Retro text-2xl font-bold">{event.title}</h3>
            <h4 className="vertical-timeline-element-subtitle font-Retro text-xl italic">{event.organization}</h4>
            <ul className="mt-2 text-sm list-disc list-inside text-gray-700 font-Mono">
              {event.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  </section>
);

export default Timeline;
