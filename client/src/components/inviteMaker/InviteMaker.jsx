import React, { useState } from "react";
import InputArea from "./InputArea";
import Result from "./Result";

function InviteMaker(props) {
  const [inputData, setInputData] = useState({
    eventName: "Birthday Party",
    startDate: "10/03/2023",
    startTime: "15:00",
    useEndDateTime: true,
    endDate: "11/03/2023",
    endTime: "10:00",
    locationName:
      "Berghain | Panorama Bar | Säule, Am Wriezener Bahnhof, Berlín, Německo",
    useLocationLink: true,
    locationLink:
      "https://www.google.com/maps/search/?api=1&query=52.51106910000001%2C13.4429945&query_place_id=ChIJn17Gi0NOqEcRfHX8oRvU9ms",
    eventDescription: "",
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
    <div className="grid grid-cols-1 md:grid-cols-2 py-40">
      <InputArea onInputChange={changeInputData} defaultInput={inputData} />
      <Result listOfTemplates={props.listOfTemplates} inputData={inputData} />
    </div>
  );
}

export default InviteMaker;
