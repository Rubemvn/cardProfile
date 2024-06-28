import {
	ButtonsLinks,
	Button,
	ButtonCV,
	Title,
	Container,
	LogoImg,
	ImgContainer,
} from "./styles";

// Animações
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";

// Icons
import { FiGithub } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";

// Images
import rightTop from "@/public/icons/logo-r-animation/right-top.svg";
import leftBottom from "@/public/icons/logo-r-animation/left-bottom.svg";
import rightBottom from "@/public/icons/logo-r-animation/right-bottom.svg";
import leftTop from "@/public/icons/logo-r-animation/left-top.svg";

// Hooks
import { useEffect, useRef } from "react";

const HeroSection = () => {
	const imgContainerRef = useRef(null);
	const leftTopRef = useRef(null);
	const leftBottomRef = useRef(null);
	const rightTopRef = useRef(null);
	const rightBottomRef = useRef(null);
	const cursorRef = useRef(null);

	const handleClickDownloadCv = () => {
		const url = "/docs/Curriculo Rúbem Vieira.pdf"; // Caminho relativo ao arquivo na pasta public
		window.open(`http://localhost:3000${url}`, "_blank");

		const link = document.createElement("a");
		link.href = url;
		link.download = "Currículo - Rúbem Vieira.pdf"; // Nome do arquivo para salvar
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	useEffect(() => {
		const imgContainer = imgContainerRef.current;
		const leftTop = leftTopRef.current;
		const leftBottom = leftBottomRef.current;
		const rightTop = rightTopRef.current;
		const rightBottom = rightBottomRef.current;
		const tl = gsap.timeline({ defaults: { duration: 1 } });

		const cursor = cursorRef.current;
		gsap.to(cursor, {
			delay: 1,
			opacity: 0,
			duration: 1,
			yoyo: true,
			repeat: -1,
			ease: "power1.inOut",
		});

		tl.fromTo(
			imgContainer,
			{ opacity: 0, rotate: -360, x: -400 },
			{ opacity: 1, rotate: 0, x: 0 },
		)
			.to(leftTop, {
				repeat: -1,
				duration: 2,
				yoyo: true,
				ease: "power1.inOut",
				x: -10,
				y: -10,
			})
			.to(
				rightTop,
				{
					repeat: -1,
					duration: 2,
					yoyo: true,
					ease: "power1.inOut",
					x: 45,
					y: 45,
				},
				"-=2",
			)
			.to(
				leftBottom,
				{
					repeat: -1,
					duration: 2,
					yoyo: true,
					ease: "power1.inOut",
					x: -45,
					y: -45,
				},
				"-=2",
			)
			.to(
				rightBottom,
				{
					repeat: -1,
					duration: 2,
					yoyo: true,
					ease: "power1.inOut",
					x: 10,
					y: 10,
				},
				"-=2",
			);
	}, []);

	return (
		<Container>
			<ImgContainer ref={imgContainerRef}>
				<LogoImg
					ref={leftBottomRef}
					src={leftBottom}
					alt='logotipo'
					position={{ top: "auto", right: "auto", left: 0, bottom: 0 }}
				/>
				<LogoImg
					ref={rightBottomRef}
					src={rightBottom}
					alt='logotipo'
					position={{ top: "auto", right: 0, left: "auto", bottom: 0 }}
				/>
				<LogoImg
					ref={leftTopRef}
					src={leftTop}
					alt='logotipo'
					position={{ top: 0, right: "auto", left: 0, bottom: "auto" }}
				/>
				<LogoImg
					ref={rightTopRef}
					src={rightTop}
					alt='logotipo'
					position={{ top: 0, right: 0, left: "auto", bottom: "auto" }}
				/>
			</ImgContainer>
			<Title>
				<h1>
					<span className='typeAnimation'>
						<TypeAnimation
							sequence={[
								"",
								1000,
								"Olá!",
								700,
								"",
								500,
								"Me chamo Rúbem Vieira.",
								3000,
								"",
								500,
								"Seja bem Vindo!",
								2000,
								"",
								1000,
							]}
							wrapper='span'
							cursor={false}
							repeat={Infinity}
						/>
					</span>
					<span className='cursor'>|</span>
				</h1>
				<p>
					<TypeAnimation
						sequence={[
							"",
							1000,
							"Front-end Developer",
							2000,
							"",
							500,
							"Web Desingner",
							2000,
							"",
							500,
							"Ui / Ux",
							2000,
							"",
							1000,
						]}
						wrapper='span'
						cursor={true}
						repeat={Infinity}
					/>
				</p>
			</Title>
			<ButtonsLinks>
				<ButtonCV onClick={handleClickDownloadCv}>
					<IoDocumentTextOutline /> Download CV
				</ButtonCV>
				<Button
					target='_blank'
					href='https://www.linkedin.com/in/rubemvieira'>
					<GrLinkedin /> LinkedIn
				</Button>
				<Button
					target='_blank'
					href='https://www.github.com/rubemvn'>
					<FiGithub /> Github
				</Button>
			</ButtonsLinks>
		</Container>
	);
};

export default HeroSection;
