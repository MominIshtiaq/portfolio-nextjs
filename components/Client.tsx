import React from "react";
import { InfiniteMovingCards } from "./ui/InfinityCard";
import { companies, testimonials } from "@/data";

const Client = () => {
  return (
    <div
      className="pb-20 flex flex-col items-center justify-center"
      id="testimonials"
    >
      <h1 className="font-bold sm:text-5xl/[48px] text-3xl tracking-tighter text-center">
        Kind Words from <span className="text-purple">satisfied clients</span>
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
        pauseOnHover={false}
        className="py-10"
      />
      <div className="flex max-w-7xl items-center justify-center lg:justify-between gap-x-4 sm:gap-x-8 gap-y-2 flex-wrap">
        {companies.map(({ id, name, img, nameImg }) => (
          <div key={id} className="flex gap-1 items-center">
            <div className="sm:h-[30px] sm:w-[30px] h-[20px] w-[20px]">
              <img src={img} alt={name} className="h-full w-full" />
            </div>
            {nameImg ? (
              <div className="sm:h-[26px] sm:w-[106px] h-[18px] w-[71px]">
                <img
                  src={nameImg}
                  alt={name}
                  className="h-full w-full object-fill"
                />
              </div>
            ) : (
              <h3>{name}</h3>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
