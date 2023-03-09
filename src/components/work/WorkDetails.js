import { useParams } from "react-router"

const WorkDetails = () => {
    const {id} = useParams();
    console.log(id);
    return<h1>{id}</h1>
}

export default WorkDetails;