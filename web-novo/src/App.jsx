import './index.css'
import Logo from "./assets/Group 10.png";
import { Footer } from "./components/Footer";
import { NavLink } from 'react-router-dom'

export function App() {

  return (
    <>
      <div className="mainContainer">
        <img src={Logo} className='mainLogo' />
        <h1>Bem Vindo</h1>
        <span className="texto-preencher">ao Controle de estoque</span>

        <div className="container-index">
          {/* <form > */}
          <h3>Login:</h3>
          <input type="user" className="senha" placeholder="user" />
          <br />
          <h3>Senha:</h3>
          <input type="password" className="senha" placeholder="password" /><br />
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
              <NavLink to="/home">
                <div className="box-1">
                  <div className="btn btn-one">
                    <span>Login</span>
                  </div>
                </div>
              </NavLink>
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

