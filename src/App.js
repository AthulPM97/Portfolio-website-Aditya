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
import "./App.css";
import Login from "./pages/Login";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  //store
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div>
      <Container style={{ textAlign: "center" }}>
        <br />
        <h1 style={{ fontFamily: "oliver" }}>Aditya Narayan</h1>
        <Navigation />
      </Container>
      <div className="content">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/work">
            <WorksPage />
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
