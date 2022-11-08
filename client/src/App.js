import React, { useEffect, useState } from "react";
import ReactDOM from "react";
import Axios from "axios";

function App() {
  const [listOfTemplates, setListOfTemplates] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getTemplates").then((response) => {
      setListOfTemplates(response.data);
    });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3001/getTemplates")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setListOfTemplates(data);
  //     });
  // }, []);

  return (
    <div>
      {listOfTemplates.map((template, index) => {
        return (
          <div key={index}>
            <h1>{template.heading}</h1>
            <h1>{template.location}</h1>
            <h1>{template.date}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
