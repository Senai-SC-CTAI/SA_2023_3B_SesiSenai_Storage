import { useState } from 'react'
// import './App.css'
import Logo from "./assets/Group 10.png"; 

export function App() {

  return (
    <>
      <img src={Logo} className='mainLogo'/> 
      <div className="container">
        <h1> Bem Vindo</h1>
        <h2 className="texto-preencher">ao Controle de estoque</h2>
      </div>

      <div className="container-index">
        {/* <form > */}
        <h3>Login:</h3>
        <input type="user" className="senha" placeholder="user" />
        <br />
        <h3>Senha:</h3>
        <input type="password" className="senha" placeholder="password" /><br/>
          <a href="./forgetpassword.html">Esqueci minha senha</a>

          <div className="botoes">

            <div className="cadastro">
              <a href="./register.html" />
              <div className="box-1">
                <div className="btn btn-one">
                  <span>Cadastro</span>
                </div>
              </div>
            </div>

            <div className="login">
              <a href="./home.html" />
              <div className="box-1">
                <div className="btn btn-one">
                  <span>Login</span>
                </div>
              </div>
            </div>

          </div>

          <br />
      </div>


      <div className="logosenai">
        {/* <img src="./sesi-senai.png" /> */}



      </div>
    </>
  )

}

