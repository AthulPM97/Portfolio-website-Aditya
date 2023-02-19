import { Col, Container, Row } from "react-bootstrap";
import WorkCard from "./WorkCard";

const WorkCards = () => {
  
  return (
    <Container>
        <Row>
            <Col>
                <WorkCard imageSource="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a5b60c163055115.63dfe3f102491.jpg"/>
            </Col>
            <Col>
                <WorkCard imageSource="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4e99c7157017157.6371daee55621.jpg"/>
            </Col>
        </Row>
    </Container>
  );
};

export default WorkCards;