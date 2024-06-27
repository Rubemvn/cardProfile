import styled from "styled-components";

export const Container = styled.div`
	padding: 2rem;
	@media ${({ theme }) => theme.device.laptop} {
	}
`;

export const Title = styled.div`
	font-size: 3rem;
	font-weight: 500;

	opacity: 0;
	transform: translateX(300px);
`;
