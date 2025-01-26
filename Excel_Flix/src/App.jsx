import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Movie } from './pages/Movie.jsx';
import { Contact, contactData } from './pages/Contact.jsx';
import AppLayout from './components/layout/AppLayout.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';
import { getMoviesData } from './api/GetAPIData.jsx';
import { MovieDetails } from './components/UI/MovieDetails.jsx';
import { GetMovieDetails } from './api/GetMovieDetails.jsx';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home />, 
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/movie',
          element: <Movie />,
          loader:getMoviesData,
        },
        {
          path: '/movie/:movieID',
          element: <MovieDetails />,
          loader:GetMovieDetails,
        },
        {
          path: '/contact',
          element: <Contact />,
          action:contactData,
        },
      ]
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;