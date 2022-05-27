import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import "./App.css";

const H1text = styled.h1`
	color: red;
`;
function Home() {
	return (
		<div className="main">
			<main>
				<H1text>프론트 세팅 완료</H1text>
				<p>프로젝트 같이 잘 해봐요!!!</p>
			</main>
			<Link to="/alcohol">DEPth, 2022</Link>
		</div>
	);
}

export default Home;
