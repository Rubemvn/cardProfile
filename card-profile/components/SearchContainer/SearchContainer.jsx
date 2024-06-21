import { useState } from "react";
import {
	Container,
	ProfileResult,
	ResultItem,
	ResultsContainer,
	SearchBar,
	SearchButton,
	SearchContent,
} from "./styles";
import { IoSearch } from "react-icons/io5";
import { fetchData } from "@/hooks/useRequest";
import { useUserCardContext } from "@/hooks/useUserCardContext";

const SearchContainer = () => {
	const [searchValue, setValueSearch] = useState("");
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchDone, setSearchDone] = useState(false);
	const { setUserCard } = useUserCardContext();
	const setUserCardValue = (user) => {
		setUserCard(user);
	};

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

	return (
		<Container>
			<SearchContent>
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
						<p>No results found</p>
					) : (
						results.map((user) => (
							<ResultItem
								key={user.id}
								onClick={() => {
									setUserCardValue(user.login);
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
