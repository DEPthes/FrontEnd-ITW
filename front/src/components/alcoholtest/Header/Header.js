import React from "react";
import styled from "@emotion/styled";

const HeaderDiv = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #999;

	img {
		margin-left: 20px;
		width: 40px;
		height: 40px;
	}

	div {
		margin-right: 20px;
		display: flex;
		p {
			margin-left: 10px;
		}
	}
`;

function Header() {
	return (
		<HeaderDiv>
			<img src="img/logo.png" alt="logo" />
			<div>
				<p>로그인</p>
				<p>회원가입</p>
			</div>
		</HeaderDiv>
	);
}

export default Header;
