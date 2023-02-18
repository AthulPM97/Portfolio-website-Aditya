import { Container } from "react-bootstrap";
import WorkCards from "../components/work/WorkCards";

const WorksPage = () => {
    return<Container>
        <h2 style={{textAlign:'center'}}>Branding</h2>
        <WorkCards />
    </Container>
};

export default WorksPage;