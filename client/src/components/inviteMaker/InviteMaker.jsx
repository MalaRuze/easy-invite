import React from "react";
import InputArea from "./InputArea";
import Result from "./Result";

function InviteMaker() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-40">
      <InputArea />
      <Result />
    </div>
  );
}

export default InviteMaker;
