import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[65%] h-[65%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [toggle, setToggle] = useState(true);
  
  const handleClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <div className="-mt-14 flex flex-col items-center justify-center">
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
          We cover everything!
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Full Spectrum
        </h2>
      </div>
      <div className='mt-10 flex flex-col'>
        <VerticalTimeline>
          {experiences.filter((_, index) => !toggle || index < 4).map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      <motion.button onClick={handleClick} className={`px-8 hover:scale-105 duration-300 ease-out py-4 mt-7 ${!toggle ? 'hidden' : 'inline-block'} bg-tertiary rounded-lg shadow-sm`}>Show More</motion.button>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
