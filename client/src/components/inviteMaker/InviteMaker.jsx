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
    locationName: "Südpol, Süderstraße, Hamburg, Germany",
    useLocationLink: true,
    locationLink:
      "https://www.google.com/maps/search/?api=1&query=52.5111757%2C13.4167644&query_place_id=ChIJhdBrMiVOqEcRx0BtYoomxt8",
    eventDescription:
      "Hello everyone:) I would like to invite you to my birthday party! Bring some beer and let's get wild!!",
  });

  function changeInputData(event) {
    const updatedData = {};
    event.forEach((event) => {
      updatedData[event.target.name] = event.target.value;
    });
    console.log(updatedData);
    setInputData({ ...inputData, ...updatedData });
    console.log(inputData);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-40" id="inviteMaker">
      <InputArea onInputChange={changeInputData} defaultInput={inputData} />
      <Result listOfTemplates={props.listOfTemplates} inputData={inputData} />
    </div>
  );
}

export default InviteMaker;
