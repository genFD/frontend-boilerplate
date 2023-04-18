import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <header>Main header</header>
      <Outlet />
    </>
  );
};
export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: 'child1/*', element: <h1>childOneprotected</h1> },
      { path: 'child2/*', element: <h1>childTwoprotected</h1> },
    ],
  },
];
