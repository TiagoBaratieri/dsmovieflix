import { ReactComponent as MainImage } from '../../assets/images/main.svg';
import Login from './components/Login';
import './styles.css';


const Auth = () => {
	return (
		<div className="auth-container">
			<div className="auth-info">
				<h1 className="auth-info-title"> Avalie Filmes</h1>
				<p className="auth-info-subtitle">
					Diga o que você achou do seu filme favorito
				</p>
				<MainImage className="main-image" />
			</div>
			<div className="auth-content">
				<div>
					<Login />
				</div>
			</div>
		</div>
	);
};

export default Auth;