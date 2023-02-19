import { Container } from "react-bootstrap";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import Navigation from "./components/UI/Navigation";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import './fonts.css';
import SketchCards from "./components/sketches/SketchCards";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <div>
      <Container style={{ textAlign: "center" }}>
        <br />
        <h1 style={{fontFamily:"oliver"}}>Aditya Narayan</h1>
        <Navigation />
      </Container>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/work">
          <WorksPage />
        </Route>
        <Route path='/about'>
          <AboutPage/>
        </Route>
        <Route path='/sketches'>
          <SketchCards/>
        </Route>
      </Switch>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
