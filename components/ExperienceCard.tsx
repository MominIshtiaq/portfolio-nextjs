import React from "react";

type ExperienceCardProps = {
  title: string;
  des: string;
  className?: string;
  thumbnail: string;
};

const ExperienceCard = ({
  title,
  des,
  className,
  thumbnail,
}: ExperienceCardProps) => {
  return (
    <div
      className={`flex sm:flex-row flex-col  items-center gap-7 p-8 xl:max-w-[600px] w-full rounded-lg shadow-lg shadow-indigo-500/50 ${className}`}
      style={{
        background: "linear-gradient(180deg, #04071D, #0C0E23",
      }}
    >
      <div className="min-w-[100px] h-[87px]">
        <img src={thumbnail} alt={title} className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="font-medium text-base text-[#BEC1DD]">{des}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
