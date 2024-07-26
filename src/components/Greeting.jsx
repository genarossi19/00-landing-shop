import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greetingMessage = "";

    if (currentHour < 12 && currentHour >= 6) {
      greetingMessage = "Good Morning";
    } else if (currentHour < 18 && currentHour >= 12) {
      greetingMessage = "Good Afternoon";
    } else {
      greetingMessage = "Good Evening";
    }

    setGreeting(greetingMessage);
  }, []);

  return <h1 className="ml-8 mb-1 text-3xl ">{greeting}</h1>;
};

export default Greeting;
