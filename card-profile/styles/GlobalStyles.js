"use client";
import { createGlobalStyle } from "styled-components";
import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
  size: 62.5%;
  scroll-behavior: smooth;
}

html, body, :root{
  height: 100%;
}

body{
  scroll-behavior: smooth;
  width: 100%;
  height: 100vh;
  /* font-family: 'bricolage Grotesque'; */
  background-color: ${(props) => props.theme.colors.theme01};

  font-family: ${bricolageGrotesque.style.fontFamily};
  
  transition: all .3s ease-out;
  
  @media (max-width: 1024px){
    overflow: ${({ isMenuOpen }) => (isMenuOpen ? "hidden" : "auto")};
	}
}

*, button, input {
  border: 1;
  outline: 0;
  font-family: ${bricolageGrotesque.style.fontFamily};
  /* font-family: 'Bricolage_Grotesque'; */
}

button {
  cursor: pointer;
}

h1{
  font-size: 4rem;
}

`;
