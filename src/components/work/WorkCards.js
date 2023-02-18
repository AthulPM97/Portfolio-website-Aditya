import { Col, Container, Row } from "react-bootstrap";
import WorkCard from "./WorkCard";

const WorkCards = () => {
  
  return (
    <Container>
        <Row>
            <Col>
                <WorkCard imageSource="https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_1600/0bf183cd60d66bddc13b48d84e6f353f.jpg"/>
            </Col>
            <Col>
                <WorkCard imageSource="https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_1600/0bf183cd60d66bddc13b48d84e6f353f.jpg"/>
            </Col>
        </Row>
    </Container>
  );
};

export default WorkCards;