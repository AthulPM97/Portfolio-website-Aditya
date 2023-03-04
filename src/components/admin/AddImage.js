import { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useHttp from "../../Hooks/use-http";

const AddImage = () => {
  //custom hook
  const { error, sendRequest } = useHttp();

  //refs
  const enteredUrl = useRef();
  const enteredDescription = useRef();

  //handlers
  const addWorkHandler = (event) => {
    event.preventDefault();
    alert('Adding image... Please wait.');
    const workDetails = {
      url: enteredUrl.current.value,
      description: enteredDescription.current.value,
    };
    console.log(workDetails);
    sendRequest(
      {
        method: "POST",
        url: "https://aditya-design-default-rtdb.firebaseio.com/work.json",
        body: workDetails,
      },
      (data) => {
        alert('Image added!');
        enteredUrl.current.value = '';
        enteredDescription.current.value = '';
        console.log(data);
      }
    );
    if (error) console.log(error);
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
