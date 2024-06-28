import { UserCardContextProvider } from "@/context/UserCardContext";
import StyledComponentsRegistry from "./registry";
import ThemeContextProvider from "@/context/ThemeContext";

export const metadata = {
	title: "Rúbem Vieira | Front-en Developer",
	description: "Crie um cartão do seu perfil do github.",
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
