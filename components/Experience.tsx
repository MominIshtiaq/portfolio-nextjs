import React from "react";
import ExperienceCard from "./ExperienceCard";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div>
      <h1 className="font-bold sm:text-5xl/[48px] text-3xl tracking-tighter text-center">
        My <span className="text-purple">work experience</span>
      </h1>
      <div className="py-10 flex flex-wrap items-center justify-center gap-5">
        {workExperience.map(({ id, title, desc, thumbnail }) => (
          <ExperienceCard
            key={id}
            title={title}
            des={desc}
            thumbnail={thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
