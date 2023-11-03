import './styles.css'
import { NavLink } from 'react-router-dom'
import { Footer } from "../../components/Footer";

export function Register() {
    return (
        <>
            <div className="mainContainer" >
                <h1> Venha se cadastrar:</h1>
                {/* <form> */}
                <div className="container-index">

                    <input type="text" placeholder="Nome" /><br />
                    <input type="text" placeholder="CPF" /><br />
                    <input type="email" placeholder="Email" /><br />
                    <input type="password" placeholder="Senha" /><br />
                    <input type="password" placeholder="Confirmar Senha" /><br />
                    <div className="button-container" >

                        <NavLink to="/"
                            className="button">
                            Voltar
                        </NavLink>
                        <NavLink to="/"
                            className="button">
                            Cadastrar
                        </NavLink>

                    </div>
                </div >
                <br />
                <Footer />
            </div >


        </>
    )
}