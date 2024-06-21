import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div``;
export const CardContainer = styled.div`
	border: 2px solid ${({ theme }) => theme.colors.theme02};
	border-radius: 1rem;
	overflow: hidden;
	box-sizing: content-box;
	width: 36rem;
	background-color: ${({ theme }) => theme.colors.theme01};
`;
export const HeaderCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	position: relative;
	color: ${({ theme }) => theme.colors.theme01};
	font-size: 2.5rem;

	.bgHeader {
		background-color: ${({ theme }) => theme.colors.primary};
		border-bottom: 2px solid ${({ theme }) => theme.colors.theme02};
		width: 100%;
		height: 50%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
`;
export const Profile = styled(Image)`
	width: 17.5rem;
	height: auto;
	border-radius: 10rem;
	border: 2px solid ${({ theme }) => theme.colors.theme02};
	background-color: ${({ theme }) => theme.colors.theme01};
	position: relative;
	z-index: 2;
`;

export const ImageGH = styled(FaGithub)`
	position: absolute;
	top: 1rem;
	right: 1rem;
	z-index: 3;
`;

export const MainCard = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 0.6rem;

	#id {
		font-style: italic;
		font-size: 1.3rem;
		color: ${({ theme }) => theme.colors.theme04};
	}

	h2 {
		font-size: 2.5rem;
		color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.quartiary};
		color: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.tertiary};
	}

	h3 {
		font-size: 2rem;
		color: ${({ theme }) => theme.colors.theme04};
		margin-bottom: 0.5rem;
	}

	#bio {
		font-size: 1.5rem;
		color: ${({ theme }) => theme.colors.theme04};
		flex-wrap: wrap;
	}
`;
export const FooterCard = styled.div`
	display: flex;
	padding: 1rem;
	gap: 1rem;
	flex-direction: column;

	.footerData {
		display: flex;
		justify-content: space-between;
		font-size: 1.3rem;
	}
`;

export const FooterLinks = styled.div`
	position: relative;
	display: grid;
	/* justify-content: space-between; */
	width: 100%;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 2rem;
	background-color: ${({ theme }) => theme.colors.theme06};
	border: 1px solid ${({ theme }) => theme.colors.theme03};
	border-top: 4px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 4px;
	overflow: hidden;
`;

export const FooterLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: column;
	text-decoration: none;
	font-size: 1.3rem;
	color: ${({ theme }) => theme.colors.theme01};
	padding: 0.5rem 1rem;
	font-weight: 600;

	& > p:first-child {
		font-size: 1.8rem;
		color: ${({ theme }) => theme.colors.secondary};
	}
`;
export const LocationLink = styled(Link)`
	color: ${({ theme }) => theme.colors.theme04};
	text-decoration: none;
`;
