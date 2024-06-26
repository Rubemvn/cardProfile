"use client";
import { Container, ToggleButton, ToggleImage } from "./styled";
import sun from "@/public/icons/sun.svg";
import moon from "@/public/icons/moon.svg";
import { useThemeContext } from "@/hooks/useThemeContext";

import light from "@/styles/themes/light";
import dark from "@/styles/themes/dark";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const ThemeButton = () => {
	const { theme, setTheme } = useThemeContext();
	const [iconToggleBtn, setIconToggleBtn] = useState(sun);

	const containerRef = useRef(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIconToggleBtn(theme === dark ? sun : moon);
		}, 400);

		return () => clearTimeout(timer);
	}, [theme]);

	const handleClick = () => {
		setTheme((prevState) => (prevState === dark ? light : dark));
	};

	useLayoutEffect(() => {
		const tl = gsap.timeline({ defaults: { duration: 0.7 } });

		const container = containerRef.current;

		tl.fromTo(container, { opacity: 0, y: -100 }, { opacity: 1, y: 0 });
	}, []);

	return (
		<Container
			onClick={handleClick}
			$themeValue={theme.title}
			ref={containerRef}>
			<ToggleButton $themeValue={theme.title}></ToggleButton>

			<div className='img'>
				<ToggleImage
					src={iconToggleBtn}
					width={50}
					height={50}
					alt='icone de tema. Sol para light e Lua para dark'
				/>
			</div>
		</Container>
	);
};

export default ThemeButton;
