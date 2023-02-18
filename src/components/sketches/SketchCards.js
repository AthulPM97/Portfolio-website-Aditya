import { Col, Container, Row } from "react-bootstrap";
import bookCover from "../../assets/book cover.png";
import boy from "../../assets/boy in the woods.png";
import comic from '../../assets/comic.png';
import creative from '../../assets/creative.jpg';
import illustration from '../../assets/illustration.jpg';
import nature from '../../assets/nature art.png';
import SketchCard from "./SketchCard";

const SketchCards = () => {
    return(
        <Container>
            <Row>
                <Col>
                   <SketchCard imageSource={bookCover} /> 
                </Col>
                <Col>
                   <SketchCard imageSource={boy} /> 
                </Col>
                <Col>
                   <SketchCard imageSource={comic} /> 
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                   <SketchCard imageSource={creative} /> 
                </Col>
                <Col>
                   <SketchCard imageSource={illustration} /> 
                </Col>
                <Col>
                   <SketchCard imageSource={nature} /> 
                </Col>
            </Row>
        </Container>
    )
};

export default SketchCards;