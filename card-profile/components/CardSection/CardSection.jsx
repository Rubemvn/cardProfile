import { useUserCardContext } from "@/hooks/useUserCardContext";
import { Container } from "./styles";
import { getUser } from "@/hooks/useRequest";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { offUser } from "@/components/CardSection/offUserDataCard";

const CardSection = () => {
	const { userCard } = useUserCardContext();
	const [user, setUser] = useState(false);

	useEffect(() => {
		const setDataUser = async () => {
			if (userCard) {
				// setLoading(true);
				const res = await getUser(userCard);
				setUser(res);
				// setLoading(false);
			}
		};
		setDataUser();
	}, [userCard]);

	return (
		<Container>
			{!user ? (
				<Card
					Card
					user={offUser}></Card>
			) : (
				<Card user={user}></Card>
			)}
		</Container>
	);
};

export default CardSection;
