import { useLayoutEffect, useRef } from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import { Logo, Container } from "./styles";
import logo from "@/public/images/logo-dark.svg";

const NavBar = () => {
	const logoIcon = useRef();
	const button = useRef();

	useLayoutEffect();

	return (
		<Container>
			<Logo
				src={logo}
				ref={logoIcon}
			/>
			<ThemeButton ref={button} />
		</Container>
	);
};

export default NavBar;
