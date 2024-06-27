"use client";
import { Container, Content } from "./styles";
import SearchContainer from "@/components/SearchContainer/SearchContainer";
import CardSection from "@/components/CardSection/CardSection";
import { useEffect, useRef, useState } from "react";

const page = () => {
	const containerRef = useRef(null);

	return (
		<Container ref={containerRef}>
			<Content>
				<SearchContainer />
				<CardSection />
			</Content>
		</Container>
	);
};

export default page;
