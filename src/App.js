import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Project } from "./components/Project";
import { ContactUs } from "./components/ContactUs";

function App() {
  return (
    <div>
      <Home />
      <AboutUs />
      <Project />
      <ContactUs />
    </div>
  );
}

export default App;
