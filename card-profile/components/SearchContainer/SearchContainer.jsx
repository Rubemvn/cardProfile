"use client";
// Hooks
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { useUserCardContext } from "@/hooks/useUserCardContext";

// Comps. Styles
import {
	Container,
	ProfileResult,
	ResultItem,
	ResultsContainer,
	SearchBar,
	SearchButton,
	SearchContent,
} from "./styles";

// Icons
import { IoSearch } from "react-icons/io5";
import { fetchData } from "@/hooks/useRequest";
import gsap from "gsap";

const SearchContainer = () => {
	const [searchValue, setValueSearch] = useState("");
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchDone, setSearchDone] = useState(false);
	const { setUserCard } = useUserCardContext();
	const setUserCardValue = (user) => {
		setUserCard(user);
	};

	const [userIds, setUserIds] = useState([]);

	useEffect(() => {
		const newIds = results.map((user) => user.id);
		setUserIds(newIds);
	}, [results]);

	const searchCtt = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (searchValue.length > 0) {
			setLoading(true);
			const searchResults = await fetchData(searchValue);
			setResults(searchResults);
			setLoading(false);
			setSearchDone(true); // Indica que uma busca foi realizada
		} else {
			setResults([]);
			setSearchDone(false); // Reseta a flag se o campo de busca estiver vazio
		}
	};

	useLayoutEffect(() => {
		gsap.fromTo(
			searchCtt.current,
			{ x: -300, opacity: 0 },
			{ x: 0, opacity: 1 },
		);

		return () => {
			gsap.killTweensOf(searchCtt.current);
		};
	}, []);

	const handleUserClick = (user) => {
		setUserCardValue(user.login);
	};

	return (
		<Container>
			<SearchContent ref={searchCtt}>
				<form onSubmit={handleSubmit}>
					<SearchBar
						type='search'
						value={searchValue}
						onChange={(e) => setValueSearch(e.target.value)}
						placeholder='Pesquise pelo nome ou username do GitHub'
					/>
					<SearchButton type='submit'>
						<IoSearch />
					</SearchButton>
				</form>

				{loading && <p>Loading...</p>}

				<ResultsContainer>
					{searchDone && results.length === 0 ? (
						<p>Sem resultados encontrados</p>
					) : (
						results.map((user) => (
							<ResultItem
								id={user.id}
								key={user.id}
								onClick={() => {
									handleUserClick(user);
								}}>
								<ProfileResult
									src={user.avatar_url}
									alt={user.login}
									width='50'
									height='50'
								/>
								<div>
									<p>{user.login}</p>
									<small>#{user.id}</small>
								</div>
							</ResultItem>
						))
					)}
				</ResultsContainer>
			</SearchContent>
		</Container>
	);
};

export default SearchContainer;
