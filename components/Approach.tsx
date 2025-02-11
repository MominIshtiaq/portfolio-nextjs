import React from "react";
import { ApproachCard } from "./ApproachCard";

const Approach = () => {
  return (
    <div>
      <h1 className="font-bold sm:text-5xl/[48px] text-3xl tracking-tighter text-center">
        My <span className="text-purple">Approach</span>
      </h1>
      <ApproachCard />
    </div>
  );
};

export default Approach;
