import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import BMI from '../components/BMI';
import RouteProtect from '../components/RouteProtect';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },

      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/bmi',

        element: (
          <RouteProtect>
            <BMI />
          </RouteProtect>
        ),
      },
    ],
  },
]);

function AppRoutes() {
  return <RouterProvider router={AppRouter} />;
}

export default AppRoutes;
