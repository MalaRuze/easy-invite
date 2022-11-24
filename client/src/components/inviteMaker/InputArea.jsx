import React, { useState } from "react";
import { ConfigProvider, Input } from "antd";
import DateTimeInput from "./DateTimeInput";
import LocationInput from "./LocationInput";

const { TextArea } = Input;

function InputArea() {
  const [showEndDateTime, setShowEndDateTime] = useState(false);

  function handleEndClick() {
    setShowEndDateTime(!showEndDateTime);
    console.log(showEndDateTime);
  }

  return (
    <div className="pr-0 md:pr-20">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#7743DB",
          },
        }}
      >
        <h2 className="text-2xl pb-5 font-medium">Event Details</h2>

        <div>
          <p className="pb-2">Event name</p>
          <Input placeholder="Birthday Party" />
        </div>

        <DateTimeInput inputName="Start" />
        {showEndDateTime && <DateTimeInput inputName="End" />}

        <button
          className="text-sm text-easyPurple pt-2"
          onClick={handleEndClick}
        >
          <span className="text-xl">{showEndDateTime ? "-" : "+"}</span> End
          Date and Time
        </button>

        <LocationInput />
        <div>
          <p className="pb-2 pt-5">Event description:</p>
          <TextArea
            className="top-0"
            showCount
            maxLength={150}
            style={{ height: 100, resize: "none" }}
            placeholder="Type description"
          />
        </div>
      </ConfigProvider>
    </div>
  );
}

export default InputArea;
