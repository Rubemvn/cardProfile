"use client";
import Layout from "@/components/Layout/Layout";
import { ThemeProvider } from "styled-components";

import dark from "@/styles/themes/dark";
import light from "@/styles/themes/light";

import device from "@/styles/device";
import GlobalStyles from "@/styles/GlobalStyles";

export default function Home({ children }) {
	const themeData = {
		...light,
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
