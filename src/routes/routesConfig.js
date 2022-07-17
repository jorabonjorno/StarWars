import HomePage from "@containers/HomePage"
import HeroPage from "@containers/HeroPage";
import PersonPage from "@containers/PersonPage";
import NotFoundPage from "@containers/NotFoundPage";
import FavouritesPage from "@containers/FavouritesPage";
import SearchPage from "@containers/SearchPage";
import ErrorMessage from '@components/ErrorMessage';

const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/hero',
        element: <HeroPage />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/hero/:id',
        element: <PersonPage />
    },
    {
        path: '/favorites',
        element: <FavouritesPage />
    },
    {
        path: '/fail',
        element: <ErrorMessage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
]


export default routesConfig
