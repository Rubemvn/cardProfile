import { UserCardContextProvider } from "@/context/UserCardContext";
import StyledComponentsRegistry from "./registry";
import ThemeContextProvider from "@/context/ThemeContext";

export const metadata = {
	title: "Rúbem Vieira | Desenvolvedor Frontend",
	description:
		"Sou Rúbem Vieira! Desenvolvedor Frontend, Web Designer e UI/UX Designer",
	icons: {
		icon: ["/images/logo-dark.svg?v=4"],
	},
};

export default function RootLayout({ children }) {
	return (
		<>
			<html lang='pt-br'>
				<body>
					<UserCardContextProvider>
						<ThemeContextProvider>
							<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
						</ThemeContextProvider>
					</UserCardContextProvider>
				</body>
			</html>
		</>
	);
}
