import { Navigate, RouteObject } from 'react-router-dom';

import ErrorPage from '@/components/exception/500';

import Layout from '@/layouts';
import Login from '@/pages/Login';

export const routes: RouteObject[] = [
	{
		path: '/login',
		Component: Login
	},
	{
		path: '/',
		element: <Navigate to="/dashboard" />
	},
	{
		path: '*',
		Component: Layout,
		children: [],
		errorElement: <ErrorPage />
	}
];
