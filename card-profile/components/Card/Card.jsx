import {
	Container,
	CardContainer,
	ContentCard,
	Profile,
	UserData,
	FollowersLink,
	FooterCard,
	LocationLink,
	ReposLink,
} from "./styles";

const joaquim = "";

const Card = ({ user }) => {
	const date = new Date(user.created_at);
	const formattedDate = date.toLocaleDateString("pt-BR");

	const [cidade, uf] = user.location.split("-");

	console.log(cidade, uf);

	return (
		<Container>
			<CardContainer>
				<ContentCard>
					<Profile
						src={user.avatar_url}
						width={150}
						height={150}
					/>
					<UserData>
						<p>#{user.id}</p>
						<h2>{user.name}</h2>
						<h3>{user.login.toLowerCase()}</h3>
						<p>{user.bio}</p>
						<div className='followers'>
							<FollowersLink href={user.followers_url}>
								{user.followers} seguidores
							</FollowersLink>
							•
							<FollowersLink href={user.following_url}>
								seguindo {user.following}
							</FollowersLink>
						</div>
					</UserData>
				</ContentCard>
				<FooterCard>
					<ReposLink href={`https://github.com/${user.login}?tab=repositories`}>
						{user.public_repos} repositórios públicos
					</ReposLink>
					<div>
						<LocationLink
							href={`https://www.google.com/maps/place/${cidade},+${uf}`}>
							{user.location}
						</LocationLink>
						<p>Conta criada em {formattedDate}</p>
					</div>
				</FooterCard>
			</CardContainer>
		</Container>
	);
};

export default Card;
