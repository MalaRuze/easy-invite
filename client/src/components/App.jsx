import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "./navbar/Navbar.jsx";
import WelcomeScreen from "./welcomeScreen/WelcomeScreen";
import InviteMaker from "./inviteMaker/InviteMaker.jsx";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";
import Footer from "./footer/Footer.jsx";

function App() {
  const [listOfTemplates, setListOfTemplates] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getTemplates").then((response) => {
      setListOfTemplates(response.data);
    });
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-1 xs:px-8">
      <Navbar />
      <WelcomeScreen />
      <InviteMaker listOfTemplates={listOfTemplates} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
