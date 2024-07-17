import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greetingMessage = "";

    if (currentHour < 12 && currentHour >= 6) {
      greetingMessage = "Buenos Días";
    } else if (currentHour < 18 && currentHour >= 12) {
      greetingMessage = "Buenas Tardes";
    } else {
      greetingMessage = "Buenas Noches";
    }

    setGreeting(greetingMessage);
  }, []);

  return <h1 className="ml-8 mb-1 text-3xl font-light">{greeting}</h1>;
};

export default Greeting;
