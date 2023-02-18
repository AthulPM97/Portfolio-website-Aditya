import { Container } from "react-bootstrap";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import Navigation from "./components/UI/Navigation";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";

function App() {
  return (
    <div>
      <Container style={{ textAlign: "center" }}>
        <br />
        <h1>Hello Aditya</h1>
        <Navigation />
      </Container>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/work" exact>
          <WorksPage />
        </Route>
        <Route path='/about'>
          <AboutPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
