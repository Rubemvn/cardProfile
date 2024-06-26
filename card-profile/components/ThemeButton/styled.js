import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
	user-select: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 7rem;
	padding: 0.3rem;
	border-radius: 2rem;
	background-color: ${({ theme }) => theme.colors.theme02};
	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.colors.theme03};

	opacity: 0;
	transform: translateX(-100px);

	.img {
		width: 2.5rem;
		height: 2.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.5s ease-out;
		transition-delay: 0.4s;
		transform: translateX(
			${({ $themeValue }) => ($themeValue === "light" ? "-3.9rem" : "")}
		);
	}
`;
export const ToggleButton = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	background-color: ${({ theme }) => theme.colors.toggle02};
	border: 3px solid ${({ theme }) => theme.colors.toggle01};
	border-radius: 2rem;
	transition: all 0.4s ease-out;
	transform: translateX(
		${({ $themeValue }) => ($themeValue === "light" ? "3.8rem" : "")}
	);
	z-index: 10;
`;
export const ToggleImage = styled(Image)`
	width: 2.1rem;
	height: auto;
	max-width: 2.1rem;
	min-height: 2.1rem;
`;
