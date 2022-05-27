import React, { useState } from "react";
import styled from "@emotion/styled";

const Main = styled.div`
	display: flex;
	flex-direction: column;
`;

const questionList = [
	{
		question: "친구 자취방 첫 집들이",
		answer1: "오늘 밤샘 각, 달달하게 오래 즐기는 저도주",
		answer2: "내일 난 공강, 화끈하게 도수 높은 고도주",
	},
	{
		question: "첫 개강파티! 이 날 내가 마실 술은?",
		answer1: "막걸리 연상 질문",
		answer2: "과실주/한국와인 연상 질문",
	},
	{
		question: "첫 개강파티! 이 날 내가 마실 술은?",
		answer1: "약주/청주 연상 질문",
		answer2: "한국소주/증류주 연상 질문",
	},
	{
		question: "평소 술로 보는 나의 태도는?",
		answer1: "한 잔을 마셔도 맛있게! 양보다 질!",
		answer2: "술은 취하려고 마시는거지~ 질보단 양!",
	},
	{
		question:
			"당신은 대학원생! 과제를 성공적으로 따왔다. 이 때 마실 와인의 종류는?",
		answer1: "스파클링 와인",
		answer2: "레드와인",
	},
	{
		question: "시험기간에 나는?",
		answer1: "동기들과 같이 모여서 공부하기",
		answer2: "혼자 도서관에서 공부하기",
	},
	{
		question: "기분이 울적한 날엔..?",
		answer1: "도서관 테라스에 혼자 앉아 생각정리",
		answer2: "과방에 가서 동기들과 수다 떨기",
	},
];
const randQuestion = [
	{
		question: "카페에서 내가 주문하는 음료는?",
		answer1: "씁쓸한 아메리카노",
		answer2: "달달한 카페모카",
		answer3: "상큼한 딸기에이드",
	},
	{
		question: "한강 피크닉엔 술이 빠질 수 없지! 내가 선호하는 술의 맛은?",
		answer1: "부드럽고 순한 맛",
		answer2: "가볍고 상쾌한 맛",
		answer3: "달콤하고 마시기 편한 맛",
		answer4: "깊고 풍부한 맛",
	},
	{
		question: "나는 이런 향이 좋던데!",
		answer1: "원재료 본연의 맛이 느껴지는 전통주다운 전통주!",
		answer2: "씁슬한 맛을 가려주는 달달한 향 ~",
		answer3: "술에도 향이 있어야 하나? 상관없어 !",
	},
	{
		question: "내가 선호하는 차는?",
		answer1: "가볍고 은은한 부드러운 차",
		answer2: "깊고 강한 향을 가진 차",
	},
];
const randArr = [];
const resArr = [];
function AlcoholTest() {
	const [presentQuestion, setPresentQuestion] = useState(questionList[0]);
	const [temp, setTemp] = useState(1);
	const SetNextQuestion = (b) => {
		resArr.push(b);
		if (b === 0 && temp === 1) {
			setPresentQuestion(questionList[1]);
			setTemp(2);
		} else if (b === 1 && temp === 1) {
			setPresentQuestion(questionList[2]);
			setTemp(2);
		} else if (temp === 2) {
			setPresentQuestion(questionList[3]);
			setTemp(3);
		} else if (temp === 3) {
			setPresentQuestion(questionList[4]);
			setTemp(4);
		} else if (temp === 4) {
			const rand = (Math.random() * (7 - 6) + 6).toFixed();
			setPresentQuestion(questionList[rand - 1]);
			setTemp(5);
		} else if (temp === 5) {
			SetRandomTwoQuestion();
			setPresentQuestion(randArr[0]);
			setTemp(6);
		} else if (temp === 6) {
			setPresentQuestion(randArr[1]);
			setTemp(7);
		} else if (temp === 7) {
			console.log(resArr);
		}
	};

	const SetRandomTwoQuestion = () => {
		for (let i = 0; i <= 1; i++) {
			const randQ = Math.floor(Math.random() * randQuestion.length);
			randArr.push(randQuestion[randQ]);
			for (let j = 0; j < randQuestion.length; j++) {
				if (randQuestion[j] === randQuestion[randQ]) {
					randQuestion.splice(j, 1);
					j--;
				}
			}
		}
	};

	return (
		<Main>
			<div>
				<p>{presentQuestion.question}</p>
			</div>
			<div>
				<button type="button" onClick={() => SetNextQuestion(0)}>
					{presentQuestion.answer1}
				</button>
				<button type="button" onClick={() => SetNextQuestion(1)}>
					{presentQuestion.answer2}
				</button>
				{presentQuestion.answer3 && (
					<button type="button" onClick={() => SetNextQuestion(2)}>
						{presentQuestion.answer3}
					</button>
				)}
				{presentQuestion.answer4 && (
					<button type="button" onClick={() => SetNextQuestion(3)}>
						{presentQuestion.answer4}
					</button>
				)}
			</div>
			<div>
				<div>로딩바</div>
				<p>이전</p>
				<div>
					<p>{temp}/7</p>
				</div>
			</div>
		</Main>
	);
}

export default AlcoholTest;
