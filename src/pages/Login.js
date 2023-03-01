import { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
  //refs
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredCreds = {
        email: enteredEmail.current.value,
        password: enteredPassword.current.value,
        returnSecureToken: true,
    };

    console.log(enteredCreds);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <Container className="d-flex align-items-center justify-content-center">
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={enteredEmail}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" ref={enteredPassword} />
          </Form.Group>
          <br />
          <div style={{ textAlign: "center" }}>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
