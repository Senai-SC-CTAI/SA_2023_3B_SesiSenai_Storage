import React, { useState } from 'react';
import './styles.css';
import { SideBar } from '../../components/sideBar';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const data = [
  { key: 'Sala 1', name: 'Sala de estar' },
  { key: 'Sala 2', name: 'Sala de jantar' },
  // Outros dados aqui
];

export function Addenvironment() {

  return (
    <>
   
      <div className="mainContainer home">
        <SideBar />
        <div className="prdt">
        <div className='Centro'>
          <h1 class="lista">Adicionar Ambiente:</h1>
          <span> Nome:</span>
          <input type="name" placeholder="Nome" className='regInput' />
        

          <div className="box-1">
                                <div className="btn btn-one">
                                    <span>Adicionar</span>
                                </div>
                            </div>

        </div>


      </div>
</div>
    </>
  );
}
