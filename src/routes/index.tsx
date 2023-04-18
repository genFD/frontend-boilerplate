import { publicRoutes } from '@/routes/public';
import { protectedRoutes } from '@/routes/protected';
import { createBrowserRouter } from 'react-router-dom';
import { LandingRoute } from '@/pages';

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
