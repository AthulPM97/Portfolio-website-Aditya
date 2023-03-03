import { useContext } from "react";
import { Container } from "react-bootstrap";
import WorkCards from "../components/work/WorkCards";
import ContentContext from "../store/content-context";

const WorksPage = () => {
    const contentCtx = useContext(ContentContext);
    console.log(contentCtx);
    return<Container>
        <h2 style={{textAlign:'center'}}>Branding</h2>
        <WorkCards />
    </Container>
};

export default WorksPage;