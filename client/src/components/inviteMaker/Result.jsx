import React, { useRef } from "react";
import { Carousel } from "antd";

function Result(props) {
  const tepmplatesData = props.listOfTemplates;
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

  const inputData = props.inputData;

  return (
    <div className="pl-0 md:pl-20">
      <h2 className="text-2xl pb-12 font-medium">Your Invite Message</h2>
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
          <Carousel className="h-96" ref={ref}>
            {tepmplatesData.map((template, index) => {
              return (
                <div key={index} className="px-2">
                  <h1>
                    {template.heading}
                    {inputData.eventName}
                  </h1>
                  <h1>{template.location}</h1>
                  <h1>
                    {template.date}
                    {inputData.startDate}
                    {inputData.startTime}
                  </h1>
                  {!inputData.useEndDateTime ? (
                    <h1>
                      {inputData.endTime} {inputData.endDate}
                    </h1>
                  ) : (
                    ""
                  )}
                  <h1>{inputData.locationName}</h1>
                  {inputData.useLocationLink ? (
                    <p className="break-words">{inputData.locationLink}</p>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className="m-auto hover:text-easyPurple transition duration-200"
          onClick={() => {
            ref.current.next();
            console.log(ref.current);
          }}
        >
          {arrowRight}
        </div>
      </div>
    </div>
  );
}

export default Result;
