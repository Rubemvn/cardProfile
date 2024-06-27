import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	height: 100%;
`;

export const Content = styled.div`
	justify-content: space-around;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	display: flex;
	padding: 2rem;
	gap: 3rem;

	@media ${({ theme }) => theme.device.laptopL} {
		width: 98%;
		justify-content: space-between;
	}
	@media ${({ theme }) => theme.device.laptop} {
		width: 98%;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
`;
