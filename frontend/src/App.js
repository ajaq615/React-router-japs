import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailsPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetails';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import HomePage from './pages/Home';
import NewEventPage, { action as newEventAction } from './pages/NewEvent';
import RootLayout from './pages/Root';
import EventsRootPage from './pages/EventRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootPage />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailsPage />,
                action: deleteEventAction,
              },
              { path: 'edit', element: <EditEventPage /> },
            ],
          },

          { path: 'new', element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
