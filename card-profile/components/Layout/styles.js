import styled from "styled-components";

export const Grid = styled.main`
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 70px auto;
	grid-template-areas:
		"NB"
		"CT";
	height: 100vh;
`;
