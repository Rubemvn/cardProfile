"use client";
import { Container, ToggleButton, ToggleImage } from "./styled";
import sun from "@/public/icons/sun.svg";
import moon from "@/public/icons/moon.svg";
import { useThemeContext } from "@/hooks/useThemeContext";

import light from "@/styles/themes/light";
import dark from "@/styles/themes/dark";
import { useState, useEffect } from "react";

const ThemeButton = () => {
	const { theme, setTheme } = useThemeContext();
	const [iconToggleBtn, setIconToggleBtn] = useState(sun);

	useEffect(() => {
		// Atualiza o ícone após 400ms para sincronizar com a animação
		const timer = setTimeout(() => {
			setIconToggleBtn(theme === dark ? sun : moon);
		}, 400);

		// Limpa o timer se o componente desmontar antes dos 400ms
		return () => clearTimeout(timer);
	}, [theme]);

	const handleClick = () => {
		setTheme((prevState) => (prevState === dark ? light : dark));
	};

	return (
		<Container
			onClick={handleClick}
			themeValue={theme.title}>
			<ToggleButton themeValue={theme.title}></ToggleButton>

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
