import { useContext } from "react";
import { Button, Col, Nav, Row } from "react-bootstrap";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  //store
  const authCtx = useContext(AuthContext);

  //handlers
  const logoutHandler = () => {
    authCtx.logout();
  }
  return (
    <Row>
      <Col>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/work">Work</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/sketches">Sketches</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          {authCtx.isLoggedIn && <Nav.Item>
            <Button variant="danger" style={{float:'inline-end'}} onClick={logoutHandler}>Logout</Button>
          </Nav.Item>}
        </Nav>
      </Col>
    </Row>
  );
};

export default Navigation;
