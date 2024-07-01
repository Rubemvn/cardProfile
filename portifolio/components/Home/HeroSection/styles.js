import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

export const Container = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	overflow: hidden;
`;

export const ImgContainer = styled.div`
	width: 20rem;
	height: 20rem;
	position: relative;
	perspective: "1000px";
	opacity: 0;
	@media ${({ theme }) => theme.device.tablet} {
		width: 18rem;
		height: 18rem;

		@media ${({ theme }) => theme.device.mobileM} {
			width: 15rem;
			height: 15rem;
		}
	}
`;

export const LogoImg = styled(Image)`
	position: absolute;
	width: 20rem;
	height: auto;
	top: ${({ position }) => position.top};
	left: ${({ position }) => position.left};
	bottom: ${({ position }) => position.bottom};
	right: ${({ position }) => position.right};

	@media ${({ theme }) => theme.device.tablet} {
		width: 18rem;
	}
	@media ${({ theme }) => theme.device.mobileM} {
		width: 15rem;
	}
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
		display: inline-block;
		font-size: 7rem;
		line-height: 8rem;
		font-weight: 800;
		color: ${({ theme }) => theme.colors.primary};

		.typeAnimation {
			background: ${({ theme }) => theme.colors.primary};
			background: linear-gradient(
				to right,
				${({ theme }) => theme.colors.blue01} 0%,
				${({ theme }) => theme.colors.primary} 100%
			);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		.cursor {
			/* font-size: 7rem; Ensure the cursor matches the text size */
			font-weight: 800;
			color: ${({ theme }) => theme.colors.primary};
			animation: ${blink} 1.5s step-end infinite;
		}

		opacity: 0;
	}

	p {
		font-size: 4rem;
		font-style: italic;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.theme06};

		opacity: 0;
	}

	@media ${({ theme }) => theme.device.laptop} {
		h1 {
			font-size: 5.5rem;
		}
		p {
			font-size: 3.5rem;
		}
	}
	@media ${({ theme }) => theme.device.tablet} {
		h1 {
			font-size: 4rem;
			line-height: 5rem;
		}
		p {
			font-size: 2.5rem;
		}
	}
	@media ${({ theme }) => theme.device.mobileL} {
		h1 {
			font-size: 3.5rem;
			line-height: 4rem;
		}
		p {
			font-size: 2rem;
		}
	}
	@media ${({ theme }) => theme.device.mobileM} {
		h1 {
			font-size: 3rem;
			line-height: 3.5rem;
		}
		p {
			font-size: 2rem;
		}
	}
`;

export const ButtonsLinks = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	flex-wrap: wrap;
	padding: 0 2rem;
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

	transition: all 0.2s ease-out;

	opacity: 0;
	&:hover {
		transform: scale(0.95);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		color: ${({ theme }) => theme.colors.blue01};
		border: 1px solid ${({ theme }) => theme.colors.primary};
	}

	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 1.6rem;
	}
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

	transition: all 0.2s ease-out;

	opacity: 0;

	&:hover {
		transform: scale(0.95);
		background-color: ${({ theme }) => theme.colors.theme04};
		color: ${({ theme }) => theme.colors.theme01};
	}

	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 1.6rem;
	}
`;
