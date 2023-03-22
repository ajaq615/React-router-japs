import EventItem from '../components/EventItem';
import { useRouteLoaderData, json, redirect } from 'react-router-dom';

const EventDetailsPage = () => {
  const data = useRouteLoaderData('event-detail');
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetailsPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json({ message: 'Could not fetch event details!' }, { status: 500 });
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method
  });

  if (!response.ok) {
    throw json({ message: 'Could not delete event!' }, { status: 500 });
  }
  return redirect('/events');
}
