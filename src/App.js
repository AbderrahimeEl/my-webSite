
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import About from "./pages/about";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/resume";
function App() {
  return (
    <div >
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
      <div className="mb-5"></div>
      <Footer />
    </Router>
    </div>
  );
}
export default App;
