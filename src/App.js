import { Container } from "react-bootstrap";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import Navigation from "./components/UI/Navigation";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import SketchCards from "./components/sketches/SketchCards";
import Footer from "./components/UI/Footer";
import Admin from "./pages/Admin";
import "./fonts.css";
import Login from "./pages/Login";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import WorkDetails from "./components/work/WorkDetails";

function App() {
  //store
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div id='app-root'>
      <Container style={{ textAlign: "center" }}>
        <br />
        <h1 style={{ fontFamily: "oliver" }}>Aditya Narayan</h1>
        <Navigation />
      </Container>
      <div style={{marginBottom:'60px'}}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/work" exact>
            <WorksPage />
          </Route>
          <Route path="/work/:workId">
            <WorkDetails/>
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/sketches">
            <SketchCards />
          </Route>
          <Route path="/admin" exact>
            {isLoggedIn && <Admin />}
            {!isLoggedIn && <Login/>}
          </Route>
        </Switch>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default App;
