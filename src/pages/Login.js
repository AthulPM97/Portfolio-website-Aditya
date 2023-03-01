import { useContext, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import AuthContext from "../store/auth-context";

import key from '../protected/api-key';

const Login = () => {
  //refs
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  //store
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredCreds = {
        email: enteredEmail.current.value,
        password: enteredPassword.current.value,
        returnSecureToken: true,
    };

    const sendRequest = async () => {
        try{
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    ...enteredCreds,
                })
            });
            const data = await response.json();
            console.log('logged in');
            authCtx.login(data.idToken);
        } catch(err) {
            console.log('Error logging in: '+ err.message);
        }
    }
    sendRequest();

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
