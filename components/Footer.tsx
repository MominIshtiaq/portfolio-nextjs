import React from "react";
import MagicButton from "./ui/MagicButton";
import { GoArrowUpRight } from "react-icons/go";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <div
      className="bg-[url('/footer-grid.svg')] h-[570px] w-full bg-cover bg-center flex flex-col mb-5"
      id="contact"
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl flex flex-col gap-5">
          <h1 className="font-bold sm:text-5xl/[48px] text-3xl tracking-tighter text-center">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-center font-normal text-base">
            Reach out to me today and let&#39;s discuss how I can help you take
            achieve your goals.
          </p>
          <a className="mx-auto" href="mailto:momin989ishtiaq@gmail.com">
            <MagicButton
              title="Contact Me Now"
              icon={<GoArrowUpRight />}
              position="right"
              buttonClasses="!mt-0"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="font-normal text-base">
          &copy; {new Date().getFullYear()} Momin Ishtiaq
        </p>
        <div className="flex gap-4">
          {socialMedia.map(({ id, img, link }) => (
            <span key={id}>
              <a href={link} target="_blank">
                <img src={img} alt="Social Icons" className="w-6 h-6" />
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
