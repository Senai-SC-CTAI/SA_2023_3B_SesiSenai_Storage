import React from 'react';
import { SideBar } from '../../components/sideBar'
import Menu from '../../components/Menu'
import Logo from "../../assets/Group 10.png";   
 

import './styles.css';

export function Home() {
    return (
        <>
            <div className="mainContainer home">
                <SideBar />

                
                <div className="content">

                   
                    <img src={Logo} className='mainLogo' />
        <h1>Bem Vindo</h1>
        <span className="texto-preencher">ao Controle de estoque</span>
                </div>

            </div>
        </>
    );
}

export default Home;
