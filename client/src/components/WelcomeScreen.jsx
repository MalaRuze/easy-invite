import React from "react";

function WelcomeScreen() {
  return (
    <div className="grid grid-cols-1 h-screen75 place-content-stretch md:grid-cols-2 md:place-content-stretch">
      <div className="px-1 my-auto">
        <h1 className="font-normal text-5xl whitespace-nowrap lg:text-7xl">
          invite messages <br /> made{" "}
          <span className="text-easyPurple">easy</span>
        </h1>
      </div>
      <div className="pr-1  bg-gray-500 md:my-auto  md:pl-6 lg:pl-20">High</div>
    </div>
  );
}

export default WelcomeScreen;
