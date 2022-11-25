import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "./navbar/Navbar.jsx";
import WelcomeScreen from "./welcomeScreen/WelcomeScreen";
import InviteMaker from "./inviteMaker/InviteMaker.jsx";

function App() {
  const [listOfTemplates, setListOfTemplates] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getTemplates").then((response) => {
      setListOfTemplates(response.data);
    });
  }, []);

  ///////////////////mapping the fetched data script///////////////////////////////////
  // {listOfTemplates.map((template, index) => {
  //   return (
  //     <div key={index}>
  //       <h1>{template.heading}</h1>
  //       <h1>{template.location}</h1>
  //       <h1>{template.date}</h1>
  //     </div>
  //   );
  // })}

  return (
    <div className="max-w-screen-2xl mx-auto px-1 xs:px-8">
      <Navbar />
      <WelcomeScreen />
      <InviteMaker listOfTemplates={listOfTemplates} />
    </div>
  );
}

export default App;
