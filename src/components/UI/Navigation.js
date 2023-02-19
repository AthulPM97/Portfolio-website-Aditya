import { Col, Nav, Row } from "react-bootstrap";

const Navigation = () => {
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
        </Nav>
      </Col>
    </Row>
  );
};

export default Navigation;
