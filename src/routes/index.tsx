import { Home } from '../pages';
import { publicRoutes } from './public';
import { protectedRoutes } from './protected';
import { createBrowserRouter } from 'react-router-dom';
import { LandingRoute } from '../pages/00-landing-page';

const test = false;
const routes = test ? protectedRoutes : publicRoutes;

const commonRoutes = [
  {
    path: '/',
    element: <LandingRoute />,
  },
];
const appRoutes = [
  {
    children: [...routes],
  },
];

export const router = createBrowserRouter([...commonRoutes, ...appRoutes]);
