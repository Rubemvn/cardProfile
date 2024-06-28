import styled from "styled-components";

export const Container = styled.main`
	width: 100%;
	grid-area: CT;
	height: calc(100vh - 7rem);
	color: ${({ theme }) => theme.colors.theme04};
	overflow-x: hidden;
	overflow-y: auto;
`;
