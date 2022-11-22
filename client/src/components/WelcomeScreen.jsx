import React from "react";
import MessagesIntro from "./MessagesIntro";

function WelcomeScreen() {
  return (
    <div className="grid grid-cols-1 h-screen75 place-content-stretch md:grid-cols-2 md:place-content-stretch">
      <div className="px-1 my-auto">
        <h1 className="font-normal text-5xl whitespace-nowrap lg:text-7xl">
          invite messages <br /> made{" "}
          <span className="text-easyPurple">easy</span>
        </h1>
      </div>
      <MessagesIntro />
    </div>
  );
}

export default WelcomeScreen;
