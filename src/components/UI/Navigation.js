import { useContext } from "react";
import { Button, Col, Nav, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import AuthContext from "../../store/auth-context";

const Navigation = () => {

  //location
  const location = useLocation();

  //store
  const authCtx = useContext(AuthContext);

  //handlers
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <Row className="m-2">
      <Col xs={12} style={{flexWrap:'nowrap'}}>
        <Nav variant="pills" className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="/" active={location.pathname === '/'}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/work" active={location.pathname === '/work'}>Work</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link href="/sketches" active={location.pathname === '/sketches'}>Sketches</Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
            <Nav.Link href="/about" active={location.pathname === '/about'}>About</Nav.Link>
          </Nav.Item>
          {authCtx.isLoggedIn && (
            <Nav.Item className="m-2">
              <Button variant="danger" onClick={logoutHandler}>
                Logout
              </Button>
            </Nav.Item>
          )}
        </Nav>
      </Col>
    </Row>
  );
};

export default Navigation;
