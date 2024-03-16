import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import LoadingScreen from "./components/loading";
import Navbar from "./components/navbar";
import Counter from "./components/counter";
import Desk from "./components/desk";
import Event from "./components/events";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Scroll from "./components/ScrollToTopBottom";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Desk />
      <Counter />
      <Event />
      <Footer />
      <Scroll />
    </>
  );
}

export default App;
