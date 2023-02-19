import { Container, Image, Row } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container>
      <Row>
          <Image
            src="https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_1600/0bf183cd60d66bddc13b48d84e6f353f.jpg"
            fluid
          />
        </Row>
        <br/>
        <Row>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
      </Row>
    </Container>
  );
};

export default AboutPage;
