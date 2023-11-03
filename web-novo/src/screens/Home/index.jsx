import React from 'react';
import { SideBar } from '../../components/sideBar'
import Menu from '../../components/Menu'
import './styles.css';

export function Home() {
    return (
        <>
            <div className="mainContainer home">
                <SideBar />
                {/* <Menu /> */}
                <div className="content">

                    <h1 className="bemvindo">Bem vindo</h1>
                </div>

            </div>
        </>
    );
}

export default Home;
