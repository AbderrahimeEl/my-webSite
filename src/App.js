import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
      </Switch>
      <div className="mb-5"></div>
      <Footer />
    </Router>
  );
}
export default App;
