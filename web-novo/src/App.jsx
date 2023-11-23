import './index.css'
import Logo from "./assets/Group 10.png";
import { Footer } from "./components/Footer";
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';



  const logar = async (username, password) => {
    try {
    const response = await axios.post('http://localhost:8090/api/login', {
      name_user: username,
      password_user: password,
    });
    return response.data;    
    } catch (error) {
    throw error;
    }
   };
   export function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
    try {
    const response = await logar(username, password);
    if(response != "/"){
       window.location.href = response;
    }else{
      alert("Usuário ou Senha Incorreta!");
    }
   
    } catch (error) {
    console.error('Erro ao se logar:', error);
    }
    };   

  return (
    <>
      <div className="mainContainer">
        <img src={Logo} className='mainLogo' />
        <h1>Bem Vindo</h1>
        <span className="texto-preencher">ao Controle de estoque</span>

        <div className="container-index">
          {/* <form > */}
          <h3>Login:</h3>
          <input 
            type="user" 
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
            /><br />
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

            <div className="login" onClick={handleLogin}>

                <div className="box-1">
                  <div className="btn btn-one">

                    <span>Login</span>
                  </div>
                </div>

            </div>

          </div>
          <br />
        </div>

        <Footer />
        <div className="svgWave">
        </div>
      </div>
    </>
  )

}