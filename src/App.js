import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Kessels from "./pages/Kessels";
import CreateRun from "./pages/CreateRun";
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/kessels" component={Kessels} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/createrun" component={CreateRun} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
