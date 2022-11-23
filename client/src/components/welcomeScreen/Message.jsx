import React from "react";

function Message(props) {
  return (
    <div className="text-base xs:text-xl md:text-2xl lg:text-3xl bg-easyGrey w-max max-w-custom px-6 py-4 rounded-3xl mb-5">
      {props.messageText}
    </div>
  );
}

export default Message;
