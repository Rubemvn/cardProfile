"use client";
import { createGlobalStyle } from "styled-components";

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

  @media (max-width: 1024px){
		overflow: ${({ isMenuOpen }) => (isMenuOpen ? "hidden" : "auto")};
	}
}

*, button, input {
  border: 1;
  outline: 0;
  /* font-family: 'Bricolage_Grotesque'; */
}

button {
  cursor: pointer;
}

h1{
  font-size: 4rem;
}

`;
