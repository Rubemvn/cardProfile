import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div``;
export const CardContainer = styled.div``;
export const ContentCard = styled.div``;
export const Profile = styled(Image)`
	width: 17.5rem;
	height: auto;
	border-radius: 10rem;
	border: 4px solid ${({ theme }) => theme.colors.theme02};
`;
export const UserData = styled.div``;
export const FollowersLink = styled(Link)``;
export const FooterCard = styled.div``;
export const ReposLink = styled(Link)``;
export const LocationLink = styled(Link)``;
