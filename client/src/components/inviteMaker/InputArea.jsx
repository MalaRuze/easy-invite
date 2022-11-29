import React, { useState } from "react";
import { ConfigProvider, Input } from "antd";
import DateTimeInput from "./DateTimeInput";
import LocationInput from "./LocationInput";

const { TextArea } = Input;

function InputArea(props) {
  const [showEndDateTime, setShowEndDateTime] = useState(false);

  function handleEndClick() {
    setShowEndDateTime(!showEndDateTime);
    const endClickBoolean = [
      {
        target: {
          name: "useEndDateTime",
          value: !showEndDateTime,
        },
      },
    ];
    handleChange(endClickBoolean);
  }

  function handleNameChange(event) {
    const eventName = [
      {
        target: {
          name: event.target.name,
          value: event.target.value,
        },
      },
    ];
    handleChange(eventName);
  }

  function handleChange(event) {
    props.onInputChange(event);
    console.log(event);
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
          <Input
            value={props.defaultInput.eventName}
            name="eventName"
            onChange={handleNameChange}
          />
        </div>

        <DateTimeInput
          inputName="Start"
          handleChange={handleChange}
          defaultInput={props.defaultInput}
          name="start"
        />
        {showEndDateTime && (
          <DateTimeInput
            inputName="End"
            handleChange={handleChange}
            defaultInput={props.defaultInput}
            name="end"
          />
        )}

        <button
          className="text-sm text-easyPurple pt-2 hover:opacity-80 duration-200"
          onClick={handleEndClick}
        >
          <span className="text-xl">{showEndDateTime ? "-" : "+"}</span> End
          Date and Time
        </button>

        <LocationInput
          handleChange={handleChange}
          defaultInput={props.defaultInput}
        />
        <div>
          <p className="pb-2 pt-5">Event description:</p>
          <TextArea
            className="top-0"
            showCount
            maxLength={150}
            style={{ height: 100, resize: "none" }}
            placeholder="Type description"
            value={props.defaultInput.eventDescription}
            name="eventDescription"
            onChange={handleNameChange}
          />
        </div>
        {/* <button className="flex text-easyPurple mt-6 text-sm hover:opacity-80 duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Clear Details
        </button> */}
      </ConfigProvider>
    </div>
  );
}

export default InputArea;
