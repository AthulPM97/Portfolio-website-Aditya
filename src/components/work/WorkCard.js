import { Card } from "react-bootstrap";

const WorkCard = (props) => {
  return (
    <Card className="mb-3" style={{
      width: "100%",
      background: "#161616",
      color: "white",
      borderRadius: 6,
      position: "relative",
    }}>
      <Card.Img
        variant="top"
        src={props.url}
        alt="an image"
        width={"100%"}
        height={350}
        effect="blur"
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WorkCard;
