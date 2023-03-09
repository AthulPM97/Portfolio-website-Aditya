import { useContext } from "react";
import { useParams } from "react-router"
import ContentContext from "../../store/content-context";

const WorkDetails = () => {
    //params
    const {workId} = useParams();

    //store
    const contentCtx = useContext(ContentContext);
    const work = contentCtx.work;

    const workToDisplay = work.find((item) => item.id === workId);

    return <div>
        <h1>{workToDisplay.description}</h1>
        <img src={workToDisplay.url} />
    </div>
}

export default WorkDetails;