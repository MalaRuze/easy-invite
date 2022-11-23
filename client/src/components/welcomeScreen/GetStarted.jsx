import React from "react";

function GetStarted() {
  return (
    <div className="mx-auto w-40 h-32 pt-10 text-center transition ease-in-out duration-300 hover:scale-110 hover:opacity-70">
      <p className="font-semibold text-lg text-easyPurple">get started</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-10 h-10 mx-auto text-easyPurple"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
}

export default GetStarted;
