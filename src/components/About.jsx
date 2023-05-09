import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, selected, content }) => {
  return (
    <Tilt className='xs:w-[250px] w-full hover:cursor-pointer relative' options={{
      max: 45,
      scale: 1,
      speed: 500,
    }}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className={`absolute text-xs font-semibold ${selected ? 'inline-block' : 'hidden'} px-4 py-2 bg-[#dfd9ff] w-full text-center text-black rounded-t-[20px]`}>{title}</div>
        <div
          className="bg-tertiary rounded-[20px] py-3 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt='services'
            className={`w-20 h-20 object-contain ${selected ? "hidden" : "inline-block"} duration-300 ease-in-out`}
          />
          <h3 className={`text-white text-[18px] font-bold text-center ${selected ? "hidden" : "inline-block"} duration-300 ease-in-out`}>
            <p>{title}</p>
            <p className="text-xs font-extralight italic mt-1">Tap to see more.</p>
          </h3>
          <div className={`${selected ? "inline-block mt-2" : "hidden"} flex flex-col gap-2 ${styles.verySmallText}`}>
            <div>{content}</div>
            <div className="text-xs">&lt; Go Back</div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
};

const About = () => {

  const [itemStates, setItemStates] = useState(
    services.map((item) => ({ selected: false }))
  );

  const handleItemClick = (index) => {
    const newItems = [...itemStates];
    newItems[index] = { selected: !itemStates[index].selected };
    setItemStates(newItems);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <motion.div className="flex flex-col items-center" variants={textVariant()}>
        <p className={styles.sectionSubText}>About Us</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] p-2 md:text-justify'
      >
        Faveo is a trusted academic service provider based in India that helps students get desired grades in their academic careers.
        Are you seeking online assignment help? Then you are at the right place. Faveo is trusted by the students of famous and reputed Universities in the UK, USA, CANADA, AUSTRALIA, UAE, and so on.
        Faveo has been serving online assignment help to University students since 2016 and understands the students’ needs very well.
        Students keep their faith in us as we have helped them to achieve more than 75% of their marks in their specified subjects with the help of our expertise.
        The bond of trust continues as we are committed to providing student assignment help to the growing number of students in the universities.
      </motion.p>

      <motion.div variants={textVariant()} className={styles.sectionHeadText}>
        <span className="w-full flex mt-12 items-center justify-center">
          Our Services
        </span>
      </motion.div>

      <div className='mt-12 grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-10'>
        {services.map((service, index) => (
          <div key={service.title + index} onClick={() => handleItemClick(index)}>
            <ServiceCard index={index} {...service} selected={itemStates[index].selected} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");