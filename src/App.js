import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Project } from "./components/Project";
import { ContactUs } from "./components/ContactUs";

function App() {
  return (
    <Router>
      <Route path="/home">
        <Home />
      </Route>

      <Route path="/about-us">
        <AboutUs />
      </Route>

      <Route path="/project">
        <Project />
      </Route>

      <Route path="/contact-us">
        <ContactUs />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
