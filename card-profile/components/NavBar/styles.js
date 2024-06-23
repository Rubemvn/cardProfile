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
`;

export const Logo = styled(Image)`
	height: 5.5rem;
	width: auto;
`;
