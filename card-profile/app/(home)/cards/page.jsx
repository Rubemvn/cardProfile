"use client";
import React from "react";
import { Container } from "./styles";
import SearchContainer from "@/components/SearchContainer/SearchContainer";
import Card from "@/components/Card/Card";

const page = () => {
	const user = {
		login: "Rubemvn",
		id: 98601522,
		node_id: "U_kgDOBeCKMg",
		avatar_url: "https://avatars.githubusercontent.com/u/98601522?v=4",
		gravatar_id: "",
		url: "https://api.github.com/users/Rubemvn",
		html_url: "https://github.com/Rubemvn",
		followers_url: "https://api.github.com/users/Rubemvn/followers",
		following_url:
			"https://api.github.com/users/Rubemvn/following{/other_user}",
		gists_url: "https://api.github.com/users/Rubemvn/gists{/gist_id}",
		starred_url: "https://api.github.com/users/Rubemvn/starred{/owner}{/repo}",
		subscriptions_url: "https://api.github.com/users/Rubemvn/subscriptions",
		organizations_url: "https://api.github.com/users/Rubemvn/orgs",
		repos_url: "https://api.github.com/users/Rubemvn/repos",
		events_url: "https://api.github.com/users/Rubemvn/events{/privacy}",
		received_events_url: "https://api.github.com/users/Rubemvn/received_events",
		type: "User",
		site_admin: false,
		name: "Rúbem Vieira",
		company: null,
		blog: "",
		location: "Teresina-PI",
		email: null,
		hireable: true,
		bio: "Desenvolvedor Frontend na Labor Engenharia!",
		twitter_username: null,
		public_repos: 16,
		public_gists: 0,
		followers: 8,
		following: 12,
		created_at: "2022-01-28T15:02:36Z",
		updated_at: "2024-06-17T14:12:43Z",
	};
	return (
		<Container>
			<SearchContainer />
			<Card user={user} />
		</Container>
	);
};

export default page;
