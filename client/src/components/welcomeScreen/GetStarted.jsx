import React from "react";
import { Link } from "react-scroll";
import { isMobile } from "react-device-detect";

function GetStarted() {
  const downArrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-10 h-10 mx-auto text-easyPurple"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  return (
    <div className="mx-auto w-40 h-32 pt-10 text-center transition ease-in-out duration-300 hover:scale-110 hover:opacity-70">
      <Link
        className="font-semibold text-lg text-easyPurple cursor-pointer"
        to="inviteMaker"
        spy={true}
        duration={500}
        smooth={true}
        offset={isMobile ? 100 : -200}
      >
        Get Started
        {downArrowIcon}
      </Link>
    </div>
  );
}

export default GetStarted;
