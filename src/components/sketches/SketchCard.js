import { Card } from "react-bootstrap";

const SketchCard = (props) => {
    return(
        <Card>
            <Card.Img src={props.imageSource} />
        </Card>
    )
};

export default SketchCard;