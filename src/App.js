import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Project } from "./components/Project";
import { ContactUs } from "./components/ContactUs";
import { AppNavBar } from "./common/AppNavBar";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function App() {
  return (
    <Router>
      <AppNavBar />

      <Switch>
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
      </Switch>
    </Router>
  );
}

export default App;
