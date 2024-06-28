"use client";
import Layout from "@/components/Layout/Layout";
import { ThemeProvider } from "styled-components";

import device from "@/styles/device";
import GlobalStyles from "@/styles/GlobalStyles";
import { useThemeContext } from "@/hooks/useThemeContext";

export default function Home({ children }) {
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
			<Layout>{children}</Layout>
		</ThemeProvider>
	);
}
