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
`;
export const SearchBar = styled.input`
	/* outros estilos aqui */
	background-color: ${({ theme }) => theme.colors.theme01};
	border: 1px solid ${({ theme }) => theme.colors.theme02};
	border-right: 0px;
	padding: 1rem 0.5rem;
	border-radius: 0.5rem 0 0 0.5rem;
	width: 40rem;
	color: ${({ theme }) => theme.colors.primary};
	text-align: center;
	font-size: 2rem;
	&::placeholder {
		font-size: 1.6rem;
		text-align: center;
	}
`;
export const SearchButton = styled.button`
	font-size: 2rem;
	padding: 1rem 0.5rem;
	background-color: none;
`;

export const ResultsContainer = styled.div`
	display: flex;
	padding: 0 1rem;
	align-items: flex-start;
	width: 100%;
	flex-direction: column;
	gap: 0.4rem;
	overflow-y: auto;
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
	border: 1px solid ${({ theme }) => theme.colors.transparent01};

	&:hover {
		margin-left: 1rem;
		width: calc(100% - 1rem);
		background-color: ${({ theme }) => theme.colors.transparent01};
	}

	p {
		font-size: 1.6rem;
		color: ${({ theme }) => theme.colors.tertiary};
		font-weight: 300;
	}
`;
export const ProfileResult = styled(Image)`
	border-radius: 20px;
	width: 3.5rem;
	height: auto;
`;
