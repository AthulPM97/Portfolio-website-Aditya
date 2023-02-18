import { Col, Container, Row } from "react-bootstrap";
import WorkCard from "./WorkCard";

const WorkCards = () => {
  
  return (
    <Container>
        <Row>
            <Col>
                <WorkCard/>
            </Col>
            <Col>
                <WorkCard/>
            </Col>
        </Row>
    </Container>
  );
};

export default WorkCards;