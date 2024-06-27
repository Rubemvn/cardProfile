"use client";
import gsap from "gsap";
import {
	Container,
	CardContainer,
	HeaderCard,
	Profile,
	MainCard,
	FooterCard,
	FooterLink,
	LocationLink,
	ImageGH,
	FooterLinks,
	ImageDownloadButtonsContainer,
	ImgDownloadButton,
} from "./styles";

import { toPng, toSvg } from "html-to-image";
import { useLayoutEffect, useRef, useState } from "react";

import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";

const Card = ({ user }) => {
	// Formatação de data do perfil do usuário
	const date = new Date(user.created_at);
	const formattedDate = date.toLocaleDateString("pt-BR");
	let cidade = "";
	let uf = "";
	if (user.location) {
		[cidade, uf] = user.location.split("-");
	}

	const handleDownload = (format) => {
		if (cardRef.current) {
			let toFormat;
			let fileExtension;

			switch (format) {
				case "png":
					toFormat = toPng;
					fileExtension = "png";
					break;
				case "svg":
					toFormat = toSvg;
					fileExtension = "svg";
					break;
				default:
					return;
			}
			toFormat(cardRef.current, { quality: 1 })
				.then((dataUrl) => {
					const link = document.createElement("a");
					link.download = `${user.login}-card.${fileExtension}`;
					link.href = dataUrl;
					link.click();
				})
				.catch((error) => {
					console.error("Failed to convert to image", error);
				});
		}
	};

	const cardRef = useRef(null);
	const btnPngRef = useRef(null);
	const btnSvgRef = useRef(null);

	useLayoutEffect(() => {
		const btnPng = btnPngRef.current;
		const btnSvg = btnSvgRef.current;
		const card = cardRef.current;

		const tl = gsap.timeline({ defaults: { duration: 0.5 } });

		tl.fromTo(card, { opacity: 0, x: 300 }, { opacity: 1, x: 0 })
			.fromTo(btnPng, { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
			.fromTo(btnSvg, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "-=0.15");
	}, []);

	return (
		<Container id='#card'>
			<CardContainer ref={cardRef}>
				<HeaderCard>
					<Profile
						src={user.avatar_url}
						width={150}
						height={150}
						alt={`Imagem de perfil do usuário ${user.login} do GitHub`}
					/>
					<ImageGH />
					<div className='bgHeader'></div>
				</HeaderCard>
				<MainCard>
					<p id='id'>#{user.id}</p>
					<h2>{user.name}</h2>
					<h3>@{user.login.toLowerCase()}</h3>
					<p id='bio'>{user.bio}</p>
				</MainCard>
				<FooterCard>
					<FooterLinks>
						<FooterLink
							href={`https://github.com/${user.login}?tab=followers`}
							target='_blank'>
							<p>{user.followers}</p>
							<p>seguidores</p>
						</FooterLink>
						<FooterLink
							href={`https://github.com/${user.login}?tab=following`}
							target='_blank'>
							<p>{user.following}</p>
							<p>seguindo</p>
						</FooterLink>
						<FooterLink
							href={`https://github.com/${user.login}?tab=repositories`}
							target='_blank'>
							<p>{user.public_repos}</p>
							<p>repositórios</p>
						</FooterLink>
					</FooterLinks>
					<div className='footerData'>
						<p>Criada em {formattedDate}</p>
						<LocationLink
							href={
								uf !== undefined
									? `https://www.google.com/maps/search/${cidade},+${uf}`
									: `https://www.google.com/maps/search/${cidade}`
							}
							target='_blank'>
							{user.location} <FaLocationDot />
						</LocationLink>
					</div>
				</FooterCard>
			</CardContainer>
			<ImageDownloadButtonsContainer>
				<ImgDownloadButton
					onClick={() => handleDownload("png")}
					ref={btnPngRef}>
					<HiOutlineDownload /> .PNG
				</ImgDownloadButton>
				<ImgDownloadButton
					onClick={() => handleDownload("svg")}
					ref={btnSvgRef}>
					<HiOutlineDownload /> .SVG
				</ImgDownloadButton>
			</ImageDownloadButtonsContainer>
		</Container>
	);
};

export default Card;
