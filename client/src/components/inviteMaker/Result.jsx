import React, { useRef, useState } from "react";
import { Carousel, Tooltip } from "antd";

function Result(props) {
  const templatesData = props.listOfTemplates;
  const ref = useRef();
  const arrowLeft = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
  const arrowRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
  const copyIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
      />
    </svg>
  );

  const inputData = props.inputData;
  const [currentTemplate, setCurrentTemplate] = useState(0);

  const combinedTemplate = templatesData.map((template, index) => {
    return (
      <textarea
        key={index}
        readOnly
        rows="17"
        className="px-2 resize-none bg-easyGrey"
        value={
          template.headingStart +
          inputData.eventName +
          template.headingEnd +
          template.date +
          inputData.startDate +
          " " +
          inputData.startTime +
          (inputData.useEndDateTime
            ? " - " +
              (inputData.startDate === inputData.endDate
                ? ""
                : inputData.endDate + " ") +
              inputData.endTime
            : "") +
          template.location +
          " " +
          inputData.locationName +
          (inputData.useLocationLink
            ? template.locationLink + inputData.locationLink
            : "") +
          template.description +
          inputData.eventDescription
        }
      />
    );
  });

  const templateNames = templatesData.map((template) => [template.name]);

  function handleCarouselChange(currentSlide) {
    setCurrentTemplate(currentSlide);
  }

  return (
    <div className="pl-0 md:pl-20">
      <h2 className="text-2xl pb-6 font-medium pt-10 md:pt-0">
        Your Invite Message
      </h2>
      <h3 className="text-center pb-1">{templateNames[currentTemplate]}</h3>
      <div className="grid grid-cols-10 h-96">
        <div
          className="m-auto hover:text-easyPurple transition duration-200"
          onClick={() => {
            ref.current.prev();
          }}
        >
          {arrowLeft}
        </div>
        <div className="col-span-8 p-2 bg-easyGrey rounded-lg">
          <Carousel
            className="h-96"
            ref={ref}
            afterChange={(current) => handleCarouselChange(current)}
          >
            {combinedTemplate}
          </Carousel>
        </div>
        <div
          className="m-auto hover:text-easyPurple transition duration-200"
          onClick={() => {
            ref.current.next();
          }}
        >
          {arrowRight}
        </div>
        <Tooltip
          title="copied to your clipboard"
          placement="right"
          trigger="click"
        >
          <button
            className="flex items-center place-content-evenly col-span-2 text-center col-start-2 bg-easyPurple p-2 rounded-lg text-white mt-6 text-sm hover:opacity-80 duration-200"
            onClick={() =>
              navigator.clipboard.writeText(
                combinedTemplate[currentTemplate].props.value
              )
            }
          >
            {copyIcon} Copy
          </button>
        </Tooltip>
      </div>
    </div>
  );
}

export default Result;
