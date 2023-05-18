import { Home, Login, Profile } from "pages";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

const RoutesComp = () => {
	const isAuth = Boolean(useSelector((state) => state.token));
	const routes = [
		{ path: "/", element: <Login /> },
		{ path: "/home", element: isAuth ? <Home /> : <Navigate to="/" /> },
		{
			path: "/profile/:userId",
			element: isAuth ? <Profile /> : <Navigate to="/" />,
		},
	];

	const displayRoutes = () =>
		routes.map(({ element, path }) => (
			<Route key={path} element={element} path={path} />
		));

	return (
		<div>
			<Routes>{displayRoutes()}</Routes>
		</div>
	);
};

export default RoutesComp;
