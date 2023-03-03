import { Card } from "react-bootstrap";

const WorkCard = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.url} alt='an image'/>
      <Card.Body>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WorkCard;
