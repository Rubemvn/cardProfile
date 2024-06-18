import { Logo, Container } from "./styles";
import logo from "@/public/images/logo-dark.svg";

const NavBar = () => {
	return (
		<Container>
			<Logo src={logo} />
		</Container>
	);
};

export default NavBar;
