import React, { useState } from "react";
import InputArea from "./InputArea";
import Result from "./Result";

function InviteMaker(props) {
  const [inputData, setInputData] = useState({
    eventName: "Birthday Party",
    startDate: "10/03/2023",
    startTime: "15:00",
    useEndDateTime: false,
    endDate: "11/03/2023",
    endTime: "10:00",
    locationName: "",
    useLocationLink: true,
    locationLink: "",
    eventDescription: "",
  });

  function changeInputData(event) {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
    console.log(inputData);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-40">
      <InputArea onInputChange={changeInputData} defaultInput={inputData} />
      <Result listOfTemplates={props.listOfTemplates} inputData={inputData} />
    </div>
  );
}

export default InviteMaker;
