import EventItem from "../components/EventItem";
import { useRouteLoaderData, json } from "react-router-dom";

const EventDetailsPage = () => {
    const data = useRouteLoaderData('event-detail');
  return (
    <>
      <EventItem event={data.event}/>
    </>
  );
};

export default EventDetailsPage;

export async function loader({request, params}) {
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + id);

  if(!response.ok) {
    throw json({message: 'Could not fetch event details!'}, {status: 500})
  } else {
    return response;
  }
}
