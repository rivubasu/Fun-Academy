import { Route } from "react-router-dom";
import "./App.scss";
import { Frontpage } from "./Pages/Frontpage";
import { FrontpageParent } from "./Pages/FrontpageParent.js";
import Contact from "./components/ContactUs/Contact";
import Dashboard from "./components/Dashboard.js";
import Home from "./components/Home/Home";
import Keypress from "./components/Keypress/Keypress";
import Tetsp from "./components/TexttoSpeech/Tetsp";
import Wb from "./components/Whiteboard/whiteboard";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Frontpage} exact />
      <Route path="/parentlogin" component={FrontpageParent} />
      <Route path="/home" component={Home} exact />
      <Route path="/whiteboard" component={Wb} exact />
      <Route path="/texttospeech" component={Tetsp} exact />
      <Route path="/keypress" component={Keypress} />
      <Route path="/contact" component={Contact} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
