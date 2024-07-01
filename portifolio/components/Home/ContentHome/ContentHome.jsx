import React from "react";
import { Container } from "./styles";
import HeroSection from "../HeroSection/HeroSection";
import AboutUsSection from "../AboutUsSection/AboutUsSection";

const ContentHome = () => {
	return (
		<Container>
			<HeroSection />
			<AboutUsSection />
		</Container>
	);
};

export default ContentHome;
