import { Link } from "react-router-dom";

const EVENTS = [
    { id: 'event-1', title: 'Event 1' },
    { id: 'event-2', title: 'Event 2' },
    { id: 'event-3', title: 'Event 3' },
    { id: 'event-4', title: 'Event 4' },
    { id: 'event-5', title: 'Event 5' },
]

export default function Events() {
    return <>
        <h1>Events Page</h1>
        <ul>
            {EVENTS.map((item) => (
                <li key={item.id}>
                    <Link to={item.id}>{item.title}</Link>
                </li>
            ))}
        </ul>
    </>
}