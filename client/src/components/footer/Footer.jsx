import React from "react";

function Footer() {
  return (
    <div className="flex justify-between border-t-2 h-20">
      <p className="text-sm md:text-base pt-7 opacity-60">
        created by Vojtěch Růžička
      </p>
      <h1 className="font-bold text-lg md:text-2xl pt-6 md:pt-5 opacity-60">
        <span className="text-easyPurple">easy</span>invite
      </h1>
    </div>
  );
}

export default Footer;
