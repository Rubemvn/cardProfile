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
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
	const imgContainerRef = useRef(null);
	const leftTopRef = useRef(null);
	const leftBottomRef = useRef(null);
	const rightTopRef = useRef(null);
	const rightBottomRef = useRef(null);
	const titleRef = useRef(null);
	const activitiesRef = useRef(null);

	const btnCvRef = useRef(null);
	const btnLinkedinRef = useRef(null);
	const btnGithubRef = useRef(null);

	const [handleMouse, setHandleMouse] = useState({
		status: false,
		element: null,
	});

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
		const tl = gsap.timeline({ defaults: { duration: 0.5 } });
		const tl02 = gsap.timeline({ defaults: { duration: 0.5 } });

		const title = titleRef.current;
		const activities = activitiesRef.current;

		const btnCv = btnCvRef.current;
		const btnLinkedin = btnLinkedinRef.current;
		const btnGithub = btnGithubRef.current;

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
			)
			.fromTo(
				title,
				{ opacity: 0, y: 100 },
				{ duration: 0.4, opacity: 1, y: 0 },
				"-=2",
			)
			.fromTo(
				activities,
				{ opacity: 0, y: 100 },
				{ duration: 0.4, opacity: 1, y: 0 },
				"-=.4",
			);

		tl02
			.fromTo(btnCv, { opacity: 0, x: 100 }, { opacity: 1, x: 0 })
			.fromTo(btnLinkedin, { opacity: 0, x: 100 }, { opacity: 1, x: 0 }, "-=.2")
			.fromTo(btnGithub, { opacity: 0, x: 100 }, { opacity: 1, x: 0 }, "-=.2");

		// Hover Btns
	}, []);

	const handleMouseOver = (status, element) => {
		setHandleMouse({ status, element: element.current });
	};

	useEffect(() => {
		// HoverBtns
		const el = handleMouse.element;
		if (handleMouse.status) {
			gsap.to(el, {
				scale: 0.95,
				duration: 0.2,
				ease: "power1.inOut",
			});
		} else if (!handleMouse.status) {
			gsap.to(el, {
				scale: 1,
				duration: 0.2,
				ease: "power1.inOut",
			});
		}
	}, [handleMouse.status]);

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
				<h1 ref={titleRef}>
					<span style={{ display: "none" }}>
						Olá!
						<br /> Me Chamo Rúbem Vieira.
						<br /> Seja bem vindo!
					</span>
					<span className='typeAnimation'>
						<TypeAnimation
							sequence={[
								"",
								2000,
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
				<p ref={activitiesRef}>
					<TypeAnimation
						sequence={[
							"",
							2000,
							"Desenvolvedor Frontend",
							2000,
							"",
							500,
							"Web Designer",
							2000,
							"",
							500,
							"Ui/Ux Designer",
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
				<ButtonCV
					onClick={handleClickDownloadCv}
					ref={btnCvRef}
					onMouseEnter={() => handleMouseOver(true, btnCvRef)}
					onMouseLeave={() => handleMouseOver(false, btnCvRef)}>
					<IoDocumentTextOutline /> Download CV
				</ButtonCV>
				<Button
					target='_blank'
					href='https://www.linkedin.com/in/rubemvieira'
					ref={btnLinkedinRef}
					onMouseEnter={() => handleMouseOver(true, btnLinkedinRef)}
					onMouseLeave={() => handleMouseOver(false, btnLinkedinRef)}>
					<GrLinkedin /> LinkedIn
				</Button>
				<Button
					target='_blank'
					href='https://www.github.com/rubemvn'
					ref={btnGithubRef}
					onMouseEnter={() => handleMouseOver(true, btnGithubRef)}
					onMouseLeave={() => handleMouseOver(false, btnGithubRef)}>
					<FiGithub /> Github
				</Button>
			</ButtonsLinks>
		</Container>
	);
};

export default HeroSection;
