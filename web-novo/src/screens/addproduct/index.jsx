import React, { useState } from 'react';
import './styles.css';
import { SideBar } from '../../components/sideBar';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const data = [
  { key: 'Sala 1', name: 'Sala de estar' },
  { key: 'Sala 2', name: 'Sala de jantar' },
  
  // Outros dados aqui
];

export function Add() {
  const [selectedAmbiente, setSelectedAmbiente] = useState(null);

  const keyExtractor = (item) => item.key;

  const handleAmbienteSelection = (ambienteKey) => {
    setSelectedAmbiente(ambienteKey);
  };

  return (
    <>
   
      <div className="mainContainer home">
        <SideBar />
        <div className="prdt">
        <div className='Centro'>
          <h1 class="lista">Adicionar Produto:</h1>
          <span> Nome:</span>
          <input type="name" placeholder="Nome" className='regInput' />
          <span>Data Atual:</span>
          <input type="dataatual" placeholder="Data Atual" className='regInput' />
          <span> Status Atual:</span>
          <input type="status" placeholder="Status Atual:" className='regInput' />
          <span> Ambiente: </span>
          <select
            onChange={(e) => handleAmbienteSelection(e.target.value)}
            value={selectedAmbiente}
            className="regInput"
          >
            <option value="">Selecione o ambiente</option>
            {data.map((item) => (
              <option key={item.key} value={item.key}>
                {item.name}
              </option>
            ))}
          </select>

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
