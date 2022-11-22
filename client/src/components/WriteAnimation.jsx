import React from "react";

function WriteAnimation() {
  return (
    <div className="flex justify-center text-3xl  bg-easyGrey w-max max-w-custom px-6 py-6 rounded-3xl mb-5">
      <div className="rounded-full bg-gray-500 h-3 w-3 mx-1 my-auto animate-bounce"></div>
      <div className="rounded-full bg-gray-500 h-3 w-3 mx-1 my-auto animate-bounce"></div>
      <div className="rounded-full bg-gray-500 h-3 w-3 mx-1 my-auto animate-bounce"></div>
    </div>
  );
}

export default WriteAnimation;
