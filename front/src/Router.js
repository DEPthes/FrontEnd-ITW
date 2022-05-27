import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlcoholTest from "./components/alcoholtest/AlcoholTest";
import Header from "./components/alcoholtest/Header/Header";
import Home from "./Home";

function Router() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/alcohol" element={<AlcoholTest />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
