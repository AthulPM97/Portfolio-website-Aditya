import { Card } from "react-bootstrap";

const WorkCard = () => {
    const img =
    "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_1600/0bf183cd60d66bddc13b48d84e6f353f.jpg";
  return (
    <Card>
      <Card.Img variant="top" src={img} alt='an image'/>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WorkCard;
