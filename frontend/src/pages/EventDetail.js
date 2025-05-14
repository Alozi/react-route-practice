import { useParams } from "react-router-dom"

export default function EventDetail() {
    const params = useParams();

    return <>
        <h1>Event Detail Page</h1>
        <p>Event ID: {params.id}</p>
    </>
}