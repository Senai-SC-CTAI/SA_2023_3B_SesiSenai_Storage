import React, { useState } from 'react';
import './styles.css';
import { SideBar } from '../../components/sideBar';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const data = [
  { key: 'Sala 1', name: 'Sala Fantasma' },
];

export function Add() {
  const [productName, setProductName] = useState('');
  const [productDate, setProductDate] = useState('');
  const [productStatus, setProductStatus] = useState('');
  const [selectedAmbiente, setSelectedAmbiente] = useState('');

  const handleAmbienteSelection = (ambienteKey) => {
    setSelectedAmbiente(ambienteKey);
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch('http://localhost:5173/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome_produto: productName,
          dat_cadastro: productDate,
          status_produto: productStatus,
          cod_produto: null, 
          ambiente: selectedAmbiente, 
        }),
      });

      if (response.ok) {
        console.log('Produto adicionado com sucesso!');
      } else {
        const errorData = await response.json();
        console.error(`Erro ao adicionar produto: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  return (
    <>
      <div className="mainContainer home">
        <SideBar />
        <div className="prdt">
          <div className='Centro'>
            <h1 className="lista">Adicionar Produto:</h1>
            <span>Nome:</span>
            <input
              type="text"
              placeholder="Nome"
              className='regInput'
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <span>Data de Cadastro:</span>
            <input
              type="date"
              placeholder="Data de Cadastro"
              className='regInput'
              value={productDate}
              onChange={(e) => setProductDate(e.target.value)}
            />
            <span>Status:</span>
            <input
              type="text"
              placeholder="Status"
              className='regInput'
              value={productStatus}
              onChange={(e) => setProductStatus(e.target.value)}
            />
            <span>Ambiente:</span>
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
              <div className="btn btn-one" onClick={handleAddProduct}>
                <span>Adicionar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}