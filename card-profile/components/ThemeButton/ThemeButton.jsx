"use client";
import { Container, ToggleButton, ToggleImage } from "./styled";
import sun from "@/public/icons/sun.svg";
import moon from "@/public/icons/moon.svg";
import { useThemeContext } from "@/hooks/useThemeContext";

import light from "@/styles/themes/light";
import dark from "@/styles/themes/dark";
import { useState } from "react";

const ThemeButton = () => {
	const { theme, setTheme } = useThemeContext();
	const [iconToggleBtn, setIconToggleBtn] = useState(sun);

	const handleClick = () => {
		setTheme((prevState) => (prevState === dark ? light : dark));

		setTimeout(() => {
			if (iconToggleBtn === sun) {
				setIconToggleBtn(moon);
			} else if (iconToggleBtn === moon) {
				setIconToggleBtn(sun);
			}
		}, 400);
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
