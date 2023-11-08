import { NavLink } from 'react-router-dom'
import './styles.css'

export function Password() {
    return (
        <>
        <div className="mainContainer">

            <div className="form-container">
                <div className="logo-container">
                    Esqueci minha senha
                </div>

                <form className="form">
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="Enter your email" required=""/>
                    </div>

                    <button className="form-submit-btn" type="submit">Enviar Email</button>
                </form>

                <NavLink to="/" className="back">Voltar</NavLink>
                <p className="signup-link">
                    Você não possui uma conta?
                    <NavLink to="/register" className="signup-link link"> Crie sua conta</NavLink>
                </p>
            </div>
        </div>
        </>
    )
}