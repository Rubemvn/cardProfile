import { useLayoutEffect, useRef } from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import { Logo, Container } from "./styles";
import logo from "@/public/images/logo-dark.svg";
import gsap from "gsap";

const NavBar = () => {
	const iconRef = useRef();

	useLayoutEffect(() => {
		const tl = gsap.timeline({ defaults: { duration: 0.7 } });

		const icon = iconRef.current;

		tl.fromTo(icon, { opacity: 0, x: 100 }, { opacity: 1, x: 0 });

		return () => {
			gsap.killTweensOf(tl);
		};
	}, []);

	return (
		<Container>
			<Logo
				src={logo}
				ref={iconRef}
			/>
			<ThemeButton />
		</Container>
	);
};

export default NavBar;
