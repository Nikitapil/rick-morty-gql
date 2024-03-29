import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout/pages/Layout';
import { ErrorPage } from './Layout/pages/ErrorPage/ErrorPage';
import { MainPage } from './Main/pages/MainPage';
import { CharactersPage } from './Characters/pages/CharactersPage';
import { LocationsPage } from './Locations/pages/LocationsPage';
import { EpisodesPage } from './Episodes/pages/EpisodesPage';
import { SingleCharacterPage } from './Characters/pages/SingleCharacterPage';
import { SingleLocationPage } from './Locations/pages/SingleLocationPage';
import { SingleEpisodePage } from './Episodes/pages/SingleEpisodePage';

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
        path: 'characters/:id',
        element: <SingleCharacterPage />
      },
      {
        path: 'locations',
        element: <LocationsPage />
      },
      {
        path: 'locations/:id',
        element: <SingleLocationPage />
      },
      {
        path: 'episodes',
        element: <EpisodesPage />
      },
      {
        path: 'episodes/:id',
        element: <SingleEpisodePage />
      }
    ]
  }
]);
