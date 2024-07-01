import React from "react";
import { Container, Content, MyJorney, Title, Paragraph } from "./styles";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";

const AboutUsSection = () => {
	return (
		<Container>
			<Content>
				<Title>
					<h2>
						<span>#</span>Sobre mim
					</h2>
					<h3>
						<RxDoubleArrowRight /> Minha Jornada no Desenvolvimento Frontend
					</h3>
				</Title>

				<MyJorney>
					<Paragraph></Paragraph>
					<p>
						Em 2022, iniciei minha jornada na programação e desde então tenho me
						dedicado ao desenvolvimento front-end. Tenho focado em aprimorar
						minhas habilidades em Next.js, Styled Components, React e JavaScript
						para criar funcionalidades práticas, visualmente atraentes,
						responsivas e intuitivas para os usuários.
					</p>
					<p>
						Tenho experiência em projetos de desenvolvimento de sites, landing
						pages e sistemas internos de empresas, sempre focando em
						proporcionar a melhor experiência ao usuário. Sou entusiasta de
						design gráfico e UX/UI, e estou constantemente explorando novas
						tecnologias e tendências do setor para aplicar em meus trabalhos de
						desenvolvimento front-end.
					</p>
					<p>
						Estou comprometido em evoluir continuamente como desenvolvedor e
						contribuir para projetos impactantes.
					</p>
				</MyJorney>
			</Content>
		</Container>
	);
};

export default AboutUsSection;
