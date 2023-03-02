import { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const AddImage = () => {
  //refs
  const enteredUrl = useRef();
  const enteredDescription = useRef();

  //handlers
  const addWorkHandler = (event) => {
    event.preventDefault();
    const workDetails = {
      url: enteredUrl.current.value,
      description: enteredDescription.current.value,
    };
    console.log(workDetails);
  };
  return (
    <Row>
      <Col>
        <Container>
          <header style={{ textAlign: "center" }}>
            <h3>Add your work</h3>
          </header>
          <Form onSubmit={addWorkHandler}>
            <Form.Control
              placeholder="Paste image URL (.jpg/.png) here"
              ref={enteredUrl}
            />
            <Form.Control
              placeholder="Image description"
              ref={enteredDescription}
            />
            <div style={{ textAlign: "center" }}>
              <Button type="submit" className="m-1">
                Add
              </Button>
            </div>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default AddImage;
