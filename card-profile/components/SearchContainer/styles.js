import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div``;

export const SearchContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	max-height: calc(100vh - (7rem + 4rem + 2rem));
	width: 100%;
	gap: 2rem;

	form {
		display: flex;
	}

	opacity: 0;
	transform: translateX(-300px);
`;

export const SearchBar = styled.input`
	/* outros estilos aqui */
	background-color: ${({ theme }) => theme.colors.theme01};
	border: 1px solid ${({ theme }) => theme.colors.theme02};
	border-right: 0px;
	padding: 1rem 0.5rem;
	border-radius: 0.5rem 0 0 0.5rem;
	width: 40rem;
	color: ${({ theme }) => theme.colors.tertiary};
	text-align: center;
	font-size: 1.6rem;

	&::placeholder {
		font-size: 1.6rem;
		text-align: center;
	}
`;
export const SearchButton = styled.button`
	font-size: 2rem;
	padding: 1rem 1.5rem;
	background-color: none;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.primary};
	background-color: ${({ theme }) => theme.colors.theme02};
	border: 1px solid ${({ theme }) => theme.colors.theme02};
	border-left: 0px;
	border-radius: 0 0.5rem 0.5rem 0;
`;

export const ResultsContainer = styled.div`
	display: flex;
	padding: 0 1rem;
	align-items: flex-start;
	width: 100%;
	flex-direction: column;
	gap: 0.4rem;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 7px;
		background: ${({ theme }) => theme.colors.theme01};
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.colors.primary};
		border-radius: 10px;
	}
`;

export const ResultItem = styled.div`
	display: flex;
	cursor: pointer;
	gap: 1rem;
	width: 100%;
	/* background-color: ${({ theme }) => theme.colors.transparent01}; */
	padding: 0.5rem 0.8rem;
	border-radius: 0.5rem;
	transition: all 0.2s linear;
	border: 1px solid ${({ theme }) => theme.colors.theme03};

	&:hover {
		margin-left: 1rem;
		width: calc(100% - 1rem);
		background-color: ${({ theme }) => theme.colors.transparent01};
	}
	p {
		font-size: 1.6rem;
		color: ${({ theme }) => theme.colors.theme06};
		font-weight: 300;
	}

	small {
		font-size: 1.1rem;
		font-style: italic;
	}

	&:hover p {
		color: ${({ theme }) => theme.colors.tertiary};
	}
`;
export const ProfileResult = styled(Image)`
	border-radius: 20px;
	width: 3.5rem;
	height: auto;
`;
