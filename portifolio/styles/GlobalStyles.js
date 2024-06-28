"use client";
import { createGlobalStyle } from "styled-components";
import { Bricolage_Grotesque, Archivo } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

const archivo = Archivo({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
   &::-webkit-scrollbar {
		width: 7px;
		background: ${({ theme }) => theme.colors.theme01};
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.colors.primary};
		border-radius: 10px;
	}

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
  
  -webkit-user-select: none;   
  -moz-user-select: none;
  -ms-user-select: none;     
  user-select: none;

  font-family: ${archivo.style.fontFamily};
  
  transition: all .3s ease-out;
  
  @media (max-width: 1024px){
    overflow: ${({ isMenuOpen }) => (isMenuOpen ? "hidden" : "auto")};
	}
	}

 

*, button, input {
  border: 1;
  outline: 0;
  font-family: ${archivo.style.fontFamily};
  /* font-family: 'Bricolage_Grotesque'; */
}

button {
  cursor: pointer;
}

h1{
  font-size: 4rem;
}

`;
