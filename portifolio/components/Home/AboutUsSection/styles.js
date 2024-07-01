import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 3rem 0;
`;
export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;
`;

export const Title = styled.div`
	h2 {
		font-size: 7rem;
		font-weight: 800;
		color: ${({ theme }) => theme.colors.primary};
		line-height: 5rem;
		span {
			color: ${({ theme }) => theme.colors.theme04};
			/* font-style: italic; */
			font-size: 6rem;
		}
	}

	h3 {
		display: flex;
		align-items: center;
		/* gap: 0.5rem; */
		font-size: 2rem;
		font-weight: 600;
		font-style: italic;
		color: ${({ theme }) => theme.colors.gray01};
	}
`;
export const MyJorney = styled.div``;
export const Paragraph = styled.div``;
