import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import Logo from "./assets/Group 10.png";
import { Footer } from "./components/Footer";
import { NavLink } from 'react-router-dom';

export function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        setError('Por favor, preencha todos os campos.');
        return;
      }

      const response = await axios.get(`http://localhost:8090/users?name_users=${username}`);
      const user = response.data[0];

      if (user && user.password_users === password) {
        console.log('Login bem-sucedido');
        setError('');
      } else {
        setError('Nome de usuário ou senha incorretos');
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      setError('Erro ao tentar fazer login. Tente novamente mais tarde.');
    }
  };

  return (
    <>
      <div className="mainContainer">
        <img src={Logo} className='mainLogo' />
        <h1>Bem Vindo</h1>
        <span className="texto-preencher">ao Controle de estoque</span>

        <div className="container-index">
          <h3>Login:</h3>
          <input
            type="text"
            className="senha"
            placeholder="user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <h3>Senha:</h3>
          <input
            type="password"
            className="senha"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <NavLink to="/password">
            <p id='forget'>Esqueci minha senha</p>
          </NavLink>

          <div className="botoes">
            <div className="cadastro">
              <NavLink to="/register">
                <div className="box-1">
                  <div className="btn btn-one">
                    <span>Cadastro</span>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="login">
              <div className="box-1" onClick={handleLogin}>
                <div className="btn btn-one">
                  <span>Login</span>
                </div>
              </div>
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

          <br />
        </div>

        <Footer />
        <div className="svgWave"></div>
      </div>
    </>
  );
}