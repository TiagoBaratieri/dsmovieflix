import ImageLogin from 'assets/images/Desenho.svg';
import ButtonLogin from "components/ButtonLogin";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeLogin } from "util/request";
import Navbar from "components/Navbar";
import './styles.css';
import { saveSessionData } from 'util/auth';


type FormState = {
	username: string;
	password: string;
  };
  
  const Login = () => {
	const { register, handleSubmit } = useForm<FormState>();
	const [hasError, setHasError] = useState(false);
	const history = useHistory();
  
	const onSubmit = (data: FormState) => {
	  makeLogin(data)
		.then((response) => {
		  setHasError(false);
		  saveSessionData(response.data);
		  history.push('/movieCatalog');
		})
		.catch(() => {
		  setHasError(true);
		});
	};
  
	return (
	  <>
		<Navbar visible={false} />
		<div className="row login-container">
		  <div className="col-6">
			<h1 className="login-title">Avalie Filmes</h1>
			<p className="login-subtitle">
			  Diga o que você achou do seu filme favorito
			</p>
			<img src={ImageLogin} alt="Login" className="login-image" />
		  </div>
		  <div className="col-6 d-flex">
			<div className="login-card">
			  <h1 className="login-form-title ">LOGIN</h1>
			  {hasError && (
				<div className="alert alert-danger mt-3 d-flex alert-login mt-4">
				  Usuário ou senha inválidos!
				</div>
			  )}
			  <div className="login-form-align">
				<form onSubmit={handleSubmit(onSubmit)}>
				  <input
					type="email"
					className="login-input-username form-control"
					placeholder="Email"
					{...register('username', {
					  required: 'Campo obrigatório !',
					  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
					})}
				  />
				  <input
					type="password"
					className="login-input-password form-control"
					placeholder="Senha"
					{...register('password', { required: true })}
				  />
				  <div className="login-button-submit">
					<ButtonLogin text="logar" />
				  </div>
				</form>
			  </div>
			</div>
		  </div>
		</div>
	  </>
	);
  };
  
  export default Login;
  