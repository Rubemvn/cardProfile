"use client";
import { useUserCardContext } from "@/hooks/useUserCardContext";
import { Container, Title } from "./styles";
import { getUser } from "@/hooks/useRequest";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import gsap from "gsap";

const CardSection = () => {
	const { userCard, setUserCard } = useUserCardContext();
	const [user, setUser] = useState(false);
	const titleRef = useRef(null);

	useEffect(() => {
		const title = titleRef.current;
		const setDataUser = async () => {
			if (userCard) {
				if (title) {
					gsap.fromTo(
						title,
						{ opacity: 1, x: 0 },
						{ opacity: 0, x: 300, duration: 0.5 },
					);
				}

				const res = await getUser(userCard);
				setUser(res);
			}
		};

		setDataUser();
		return () => {
			gsap.killTweensOf(title);
		};
	}, [userCard]);

	useLayoutEffect(() => {
		const title = titleRef.current;
		gsap.fromTo(
			title,
			{ opacity: 0, x: 300 },
			{ duration: 0.5, opacity: 1, x: 0 },
		);
	}, []);

	return (
		<Container>
			{!user ? (
				<Title ref={titleRef}>Selecione um usuário</Title>
			) : (
				<Card user={user} />
			)}
		</Container>
	);
};

export default CardSection;
