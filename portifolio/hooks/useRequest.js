export const fetchData = async (query) => {
	try {
		const response = await fetch(
			`https://api.github.com/search/users?q=${encodeURIComponent(
				query,
			)}+in:login,name`,
		);

		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}

		const data = await response.json();
		return data.items || [];
	} catch (error) {
		console.error("Erro ao buscar usuários:", error);
		return [];
	}
};

export const getUser = async (user) => {
	try {
		const response = await fetch(`https://api.github.com/users/${user}`);
		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}
		const data = await response.json();
		return data || {};
	} catch (error) {
		console.error("Erro ao buscar usuário:", error);
		return {};
	}
};
