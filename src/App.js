import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Tickets from "./components/Pages/Tickets/Tickets";

const pages = { about_us: <AboutUs />, tickets: <Tickets /> };

const App = (props) => {
  const [currentPage, setCurrentPage] = useState("about_us");

  return (
    <div>
      <Header onChangePage={setCurrentPage} />
      <main>{pages[currentPage]}</main>
    </div>
  );
};

export default App;
