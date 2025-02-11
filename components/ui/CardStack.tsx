"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  heading: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-full w-full xl:w-4/5">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute h-full w-full bg-black-100 rounded-lg p-4 sm:p-8 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col gap-5 sm:gap-10"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="font-bold p-4 border border-white/[0.2] text-center rounded-lg">
              Approach Phases
            </div>
            <h1 className="font-bold sm:text-5xl/[48px] text-3xl tracking-tighter text-center">
              {card.heading}
            </h1>
            <div className="font-normal text-sm sm:text-base text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
