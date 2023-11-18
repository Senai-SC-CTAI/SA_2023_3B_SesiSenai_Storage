import { NavLink } from 'react-router-dom'
import './styles.css'
import Logo from "../../assets/Group 10.png";  
import { Footer } from "../../components/Footer"; 


export function Password() {
    return (
        <>
            <div className="mainContainer">
            <img src={Logo} className='mainLogo' />
                <div className="form-container">
                    <div className='centro'>
                    <div className="logo-container">
                        <div className='titulo'>
                        Esqueci minha senha
                        </div>
                    </div>

                    <form className="form">
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="Enter your email" required="" />
                        </div>

    </form></div>
                        <div className="enviar">
                            <div className="box-1">
                                <div className="btn btn-one">
                                    <span>Enviar</span>
                                </div>
                            </div>
                        </div>

                    <div className="voltar">
              <NavLink to="/">
                <div className="box-1">
                  <div className="btn btn-one">
                    <span>Voltar</span>
                  </div>
                </div>
              </NavLink>
            </div>

                

                 
                    <p className="signup-link">
                        Você não possui uma conta?
                        <NavLink to="/register" className="signup-link link"> Crie sua conta</NavLink>
                    </p>
                    
                </div>
                <div className='footer'>
                   <Footer />
                   </div>
            </div>

         
            
        </>
    )
}