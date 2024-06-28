import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import styled, { keyframes } from "styled-components";

export const Container = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	/* background-image: ${({ theme }) =>
		theme.title == "dark"
			? "url(./images/bg-home-dark.jpg)"
			: "url(./images/bg-home-light.jpg)"};
	background-position: start;
	background-repeat: no-repeat;
	background-size: cover;
	background-clip: content-box; */
`;

export const ImgContainer = styled.div`
	width: 20rem;
	height: 20rem;
	position: relative;
	perspective: "1000px";
	transform: translateX(-400px);
	opacity: 0;
`;

export const LogoImg = styled(Image)`
	position: absolute;
	width: 20rem;
	height: auto;
	top: ${({ position }) => position.top};
	left: ${({ position }) => position.left};
	bottom: ${({ position }) => position.bottom};
	right: ${({ position }) => position.right};
`;

const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Title = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 3rem;
	border-radius: 0.5rem;

	h1 {
		background: ${({ theme }) => theme.colors.primary};
		background: linear-gradient(
			to right,
			${({ theme }) => theme.colors.blue01} 0%,
			${({ theme }) => theme.colors.primary} 100%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 7rem;
		line-height: 6rem;
		font-weight: 800;
		color: ${({ theme }) => theme.colors.theme06};
	}

	.blink {
		color: ${({ theme }) => theme.colors.theme06};
		font-weight: 800;
		animation: ${blink} 0.7s infinite;
	}
	p {
		font-size: 4rem;
		font-style: italic;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.theme06};
	}
`;

export const ButtonsLinks = styled.div`
	display: flex;
	gap: 1rem;
`;

export const ButtonCV = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	background: #4df1de;
	background: linear-gradient(
		to right,
		${({ theme }) => theme.colors.blue01} 0%,
		${({ theme }) => theme.colors.primary} 100%
	);
	color: ${({ theme }) => theme.colors.theme01};
	padding: 1rem 3rem;
	font-size: 2rem;
	border-radius: 0.6rem;
	border: 1px solid ${({ theme }) => theme.colors.blue01};
	border: none;
`;

export const Button = styled(Link)`
	color: ${({ theme }) => theme.colors.theme04};
	padding: 0.8rem 3rem;
	font-size: 2rem;
	border-radius: 0.6rem;
	text-decoration: none;
	border: 2px solid ${({ theme }) => theme.colors.theme04};
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
`;
