import ButtonLogin from "components/ButtonLogin";
import './styles.css';

const Login = () => {
	return (
    <div className="login-card base-card">
			<h1 className="login-card-title">Login</h1>

			<form>
				<div className="mb-4">
					<input
						type="text"
						className={`form-control base-input `}
						placeholder="Email"
						name="username"
						autoFocus
					/>
				</div>
				<div className="mb-4">
					<input
						type="text"
						className={`form-control base-input `}
						placeholder="Senha"
						name="password"
					/>
				</div>

				<div className="login-card-submit">
					<ButtonLogin text="Fazer login" />
				</div>
			</form>

		</div>
	);
};

export default Login; 