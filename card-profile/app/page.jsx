"use client";
import Layout from "@/components/Layout/Layout";
import { ThemeProvider } from "styled-components";

import device from "@/styles/device";
import GlobalStyles from "@/styles/GlobalStyles";
import { useThemeContext } from "@/hooks/useThemeContext";
import ContentHome from "@/components/Home/ContentHome/ContentHome";

export default function Home() {
	const { theme } = useThemeContext();

	const themeData = {
		...theme,
		device: {
			...device,
		},
	};

	return (
		<ThemeProvider theme={themeData}>
			<GlobalStyles />
			<Layout>
				<ContentHome />
			</Layout>
		</ThemeProvider>
	);
}
