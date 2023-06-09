import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout/pages/Layout';
import { ErrorPage } from './Layout/pages/ErrorPage/ErrorPage';
import { MainPage } from './Main/pages/MainPage';
import { CharactersPage } from './Characters/pages/CharactersPage';
import { LocationsPage } from './Locations/pages/LocationsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: 'characters',
        element: <CharactersPage />
      },
      {
        path: 'locations',
        element: <LocationsPage />
      },
      {
        path: 'episodes',
        element: <MainPage />
      }
    ]
  }
]);
