import GlobalStyles from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "./registry";

import { Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "styled-components";

const bricolageGrotesque = Bricolage_Grotesque({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

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
			<html
				lang='pt-br'
				className={bricolageGrotesque.className}>
				<body>
					<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				</body>
			</html>
		</>
	);
}
