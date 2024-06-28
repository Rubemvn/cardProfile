"use client"
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const LinkPage = styled(Link)`
text-decoration: none;
color: ${({ theme }) => theme.colors.theme05};
font-size: 4rem;
`