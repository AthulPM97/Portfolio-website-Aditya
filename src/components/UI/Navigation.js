import { Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Navigation;