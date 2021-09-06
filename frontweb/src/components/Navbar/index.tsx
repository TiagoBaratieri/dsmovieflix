import { Link } from "react-router-dom";
import './styles.css';

const Navbar = () => {
	return (
		<nav className="bg-primary main-nav">
			<div className="">
				<Link to="/" className="main-nav-logo-text">
					<h4>MovieFlix</h4>
				</Link>
			</div>
			<div className="main-nav-logout">
				<button
					type="button"
					className="main-nav-btn-logout btn-outline-secondary btn"
				>
					Sair
				</button>
			</div>
		</nav>
	);
};

export default Navbar;