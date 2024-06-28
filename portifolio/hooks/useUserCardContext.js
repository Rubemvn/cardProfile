import { useContext } from "react";
import { UserCardContext } from "@/context/UserCardContext";

export const useUserCardContext = () => {
	const context = useContext(UserCardContext);

	if (!context) {
		console.log("Contexto não encontrado!");
	}

	return context;
};
