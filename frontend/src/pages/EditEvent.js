import { useParams } from "react-router-dom"

export default function EditEvent() {
    const params = useParams();

    return <>
        <h1>Edit Event Page</h1>
        <p>{params.id}</p>
    </>
}