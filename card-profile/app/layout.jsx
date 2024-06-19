import { UserCardContextProvider } from "@/context/UserCardContext";
import StyledComponentsRegistry from "./registry";

export const metadata = {
	title: "Card Profile GitHub",
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
						<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
					</UserCardContextProvider>
				</body>
			</html>
		</>
	);
}
