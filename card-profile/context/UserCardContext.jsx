"use client";
import { createContext, useState } from "react";

export const UserCardContext = createContext();

export const UserCardContextProvider = ({ children }) => {
	const [userCard, setUserCard] = useState("");

	return (
		<UserCardContext.Provider value={{ userCard, setUserCard }}>
			{children}
		</UserCardContext.Provider>
	);
};
