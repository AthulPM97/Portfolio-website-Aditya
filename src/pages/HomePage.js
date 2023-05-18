import { useRef } from "react";
import { Container, Image } from "react-bootstrap";

const HomePage = () => {
  const containerRef = useRef();

  const height = containerRef.current.offsetHeight || '745px', width = containerRef.current.offsetWidth || '596px';
  return (
    <Container style={{ textAlign: "center" }} ref={containerRef}>
      <Image
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e56745161551993.63c7199707a86.jpg"
        style={{ height: height, width: width }}
        fluid
      />
    </Container>
  );
};

export default HomePage;
