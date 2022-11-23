import React from "react";
import GetStarted from "./GetStarted.jsx";
import MessagesIntro from "./MessagesIntro.jsx";

function WelcomeScreen() {
  return (
    <div>
      <div className="grid grid-cols-1 md:h-screen75 place-content-start md:grid-cols-2 md:place-content-stretch">
        <div className="px-1 my-auto">
          <h1 className="font-normal text-2xl xs:text-4xl whitespace-nowrap mt-28 md:mt-0 md:text-5xl lg:text-7xl">
            no more questions, <br />
            invite messages <br /> made{" "}
            <span className="text-easyPurple">easy</span>
          </h1>
        </div>
        <MessagesIntro />
      </div>
      <GetStarted />
    </div>
  );
}

export default WelcomeScreen;
