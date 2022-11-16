import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [listOfTemplates, setListOfTemplates] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getTemplates").then((response) => {
      setListOfTemplates(response.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl">Hello World</h1>
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
