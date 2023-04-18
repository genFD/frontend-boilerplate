import { AuthRoutes } from '../pages';
// import { AuthRoutes } from '@/features/authentication';

export const publicRoutes = [
  // { path: 'login', element: <h1>Login</h1> },
  // { path: 'register', element: <h1>Register</h1> },
  { path: '/auth/*', element: <AuthRoutes /> },
];
