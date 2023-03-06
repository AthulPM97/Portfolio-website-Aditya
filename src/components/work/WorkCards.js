import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContentContext from "../../store/content-context";
import WorkCard from "./WorkCard";

const WorkCards = () => {
  const contentCtx = useContext(ContentContext);

  const works = contentCtx.work.map((work) => {
    return (
      <Col key={work.id}>
        <WorkCard url={work.url} description={work.description} key={work.id}/>
      </Col>
    );
  });
  return (
    <Container>
      <Row lg={4} md={2} xs={1}>{works}</Row>
    </Container>
  );
};

export default WorkCards;
