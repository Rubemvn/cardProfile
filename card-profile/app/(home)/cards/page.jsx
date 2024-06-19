"use client";
import React from "react";
import { Container } from "./styles";
import SearchContainer from "@/components/SearchContainer/SearchContainer";
import CardSection from "@/components/CardSection/CardSection";

const page = () => {
	return (
		<Container>
			<SearchContainer />
			<CardSection />
		</Container>
	);
};

export default page;
