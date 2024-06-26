import { useUserCardContext } from "@/hooks/useUserCardContext";
import { Container } from "./styles";
import { getUser } from "@/hooks/useRequest";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import gsap from "gsap";

const CardSection = () => {
	const { userCard, setUserCard } = useUserCardContext();
	const [user, setUser] = useState(false);

	useEffect(() => {
		const setDataUser = async () => {
			const title = titleRef.current;

			if (userCard) {
				gsap.to(title, { opacity: 0, x: 300, duration: 0.5 });

				const res = await getUser(userCard);
				setUser(res);
			}
		};

		setDataUser();
	}, [userCard]);

	const titleRef = useRef(null);

	useLayoutEffect(() => {
		const title = titleRef.current;

		// Animação de entrada do título
		gsap.fromTo(
			title,
			{ opacity: 0, x: 300 },
			{ duration: 0.5, opacity: 1, x: 0 },
		);
	}, []);

	return (
		<Container>
			{!user ? (
				<h2 ref={titleRef}>Selecione um usuário</h2>
			) : (
				<Card user={user} />
			)}
		</Container>
	);
};

export default CardSection;
