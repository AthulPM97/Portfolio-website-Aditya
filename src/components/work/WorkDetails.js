import { useContext } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router";
import ContentContext from "../../store/content-context";

const dummyText = ['This is the first dummy text under one image', 'This is the first dummy text under one image', 'This is the first dummy text under one image']

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
      <div style={{boxSizing: 'border-box'}}>
        <h4>{dummyText[0]}</h4>
        <Image
          src={workToDisplay.url}
          thumbnail
          style={{ maxWidth: "100%", height: "auto" }}
          alt={workToDisplay.description}
        />
        <h4>{dummyText[1]}</h4>
        <Image
          src={workToDisplay.url}
          thumbnail
          style={{ maxWidth: "100%", height: "auto" }}
          alt={workToDisplay.description}
        />
        <h4>{dummyText[2]}</h4>
      </div>
    </Container>
  );
};

export default WorkDetails;
