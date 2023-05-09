import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  src,
  description,
}) => {
  return (
    <div className="max-w-3xl flex flex-col gap-5">
      <div className="text-3xl font-semibold">{name}</div>
      <div className="relative object-contain border p-1 rounded-md border-gray-600">
        <img src={src} alt={name} className="blur-sm hover:blur-0 duration-300 ease-in-out" />
        <a className="absolute bg-tertiary top-1/2 left-1/2 rounded-md hover:scale-105 duration-300 ease-in-out font-sans shadow-lg shadow-black transform -translate-x-1/2 -translate-y-1/2 px-4 py-2" href={`/pdf/${name}.pdf`} target="_blank">Tap to view</a>
      </div>
      <div className="text-secondary md:text-justify">{description}</div>
    </div>
  );
};

const Works = () => {
  return (
    <div>
      <div className="text-center -mt-12">
        <div className={`${styles.sectionSubText} `}>Projecting our highest-rated</div>
        <div className={`${styles.sectionHeadText}`}>WORKS</div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className='mt-3 text-secondary max-w-3xl text-[17px] md:text-justify leading-[30px]'>
          Our highest rated works represent the best of what we have to offer. It has received consistently positive feedback from our students and has helped them achieve their academic goals.
          We believe that this work will continue to be in high demand because of its quality and effectiveness. To ensure that we can deliver this high level of work to our students,
          we are focusing our resources on training and developing our experts who are responsible for producing it. We are also investing in new technologies and tools that will
          help us optimize our processes and increase efficiency, while maintaining the same high standard of quality.
        </div>
      </div>

      <div className='mt-20 flex flex-col w-full items-center gap-14 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
