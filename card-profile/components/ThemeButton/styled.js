import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 6.5rem;
  padding: 0.4rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.theme02};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.theme03};
  /* flex-direction: ${({ themeValue }) => themeValue === 'dark' ? 'row' : 'row-reverse'}; */

  .img {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s ease-out;
    transition-delay: .4s;
    transform: translateX(${({ themeValue }) => themeValue === 'light' ? "-3.2rem" : ''});
    
  }
  `
export const ToggleButton = styled.div`
width: 2.5rem;
height: 2.5rem;
background-color: ${({ theme }) => theme.colors.toggle02};
border: 3px solid ${({ theme }) => theme.colors.toggle01};
border-radius: 2rem;
transition: all .4s ease-out;
transform: translateX(${({ themeValue }) => themeValue === 'light' ? "3.2rem" : ''});
z-index: 10;
`
export const ToggleImage = styled(Image)`
width: 2.1rem;
height: auto;
max-width: 2.1rem;
min-height: 2.1rem;

`