import styled from "styled-components";
import Image from "next/image";

export const Container = styled.nav`
	width: 100%;
	height: 7rem;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-around;
	grid-area: NB;
	border-bottom: 1px solid ${({ theme }) => theme.colors.theme03};

	@media ${({ theme }) => theme.device.tablet} {
		justify-content: space-between;
		padding: 0 6rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		padding: 0 3rem;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		padding: 0 2rem;
	}
`;

export const Logo = styled(Image)`
	height: 5.5rem;
	width: auto;

	opacity: 0;
	transform: translateX(-100px);
`;
