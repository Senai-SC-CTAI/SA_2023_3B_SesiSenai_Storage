import './styles.css'
import Logo from "../../assets/Group 10.png";
import { NavLink } from 'react-router-dom'
import { Footer } from "../../components/Footer";
// import { WaveSvg } from "../../components/WaveSvg";

export function Register() {
    return (
        <>
            <div className="mainContainer" >
                <img src={Logo} className='mainLogo' />
                <h1> Venha se cadastrar</h1>
                {/* <form> */}
                <div className="container-index register">
                    {/* <div className="flex"> */}
                        <span>Nome</span>
                        <input type="text" placeholder="Nome" className='regInput' />
                        <span>CPF</span>
                        <input type="text" placeholder="CPF" className='regInput' />
                    {/* </div>
                    <div className="flex"> */}
                    <span>E-mail</span>
                    <input type="email" placeholder="Email" className='regInput' />
                    <span>Senha</span>
                    <input type="password" placeholder="Senha" className='regInput' />
                    <span>Confirmar Senha</span>
                    <input type="password" placeholder="Confirmar Senha" className='regInput' />
                    {/* </div> */}
                    <div className="button-container" >

                        <NavLink to="/"
                        // className="button"
                        >
                            <div className="box-1">
                                <div className="btn btn-one">
                                    <span>Voltar</span>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/"
                        // className="button"
                        >
                            <div className="box-1">
                                <div className="btn btn-one">
                                    <span>Confirmar</span>
                                </div>
                            </div>
                        </NavLink>

                    </div>
                </div >
                <br />
                <Footer />
                {/* <WaveSvg /> */}
            </div >


        </>
    )
}