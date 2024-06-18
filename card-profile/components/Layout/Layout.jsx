"use client";
import NavBar from "../NavBar/NavBar";
import { Grid } from "./styles";
import Content from "../Content/Content";

const Layout = ({ children }) => {
	return (
		<Grid>
			<NavBar />
			<Content>{children}</Content>
		</Grid>
	);
};

export default Layout;
