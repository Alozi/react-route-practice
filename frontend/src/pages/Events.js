import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    console.log(data);
    return (
        <>
            <EventsList events={data.events} />
        </>
    );
}

export default EventsPage;