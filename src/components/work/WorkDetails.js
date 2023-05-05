import { useContext } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router";
import ContentContext from "../../store/content-context";

const WorkDetails = () => {
  //params
  const { workId } = useParams();

  //store
  const contentCtx = useContext(ContentContext);
  const work = contentCtx.work;

  const workToDisplay = work.find((item) => item.id === workId);

  return (
    <Container style={{ textAlign: "center" }}>
      <h1>{workToDisplay.description}</h1>
      <Container>
        <Image
          src={workToDisplay.url}
          thumbnail
          // style={{ maxWidth: "100%", height: "auto" }}
          alt={workToDisplay.description}
        />
      </Container>
    </Container>
  );
};

export default WorkDetails;
