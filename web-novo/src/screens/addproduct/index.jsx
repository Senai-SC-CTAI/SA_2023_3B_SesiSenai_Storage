import React, { useState, useEffect } from 'react';
import './styles.css';
import { SideBar } from '../../components/sideBar';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export function Add() {
  const [productName, setProductName] = useState('');
  const [productDate, setProductDate] = useState('');
  const [productStatus, setProductStatus] = useState('');
  const [selectedAmbiente, setSelectedAmbiente] = useState('');
  const [ambientes, setAmbientes] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchAmbientes = async () => {
      try {
        const response = await fetch('http://localhost:5173/environments');
        const data = await response.json();
        setAmbientes(data);
      } catch (error) {
        console.error('Erro ao carregar ambientes:', error);
      }
    };

    fetchAmbientes();
  }, []);

  const handleAddProduct = async () => {
    try {
      // console.log para verificar se os dados estão corretos antes da solicitação
      console.log('Dados do Produto a serem enviados:', {
        nome_produto: productName,
        dat_cadastro: productDate,
        status_produto: productStatus,
        cod_produto: null,
        ambiente_id: selectedAmbiente,
      });

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
          ambiente_id: selectedAmbiente,
        }),
      });

      // console.log para verificar a resposta do servidor
      console.log('Resposta do servidor:', response);

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('Produto adicionado com sucesso!');
        setErrorMessage('');
        console.log('Produto adicionado com sucesso:', data);
        setProductName('');
        setProductDate('');
        setProductStatus('');
        setSelectedAmbiente('');
      } else {
        const errorData = await response.json();
        setErrorMessage(`Erro ao adicionar produto: ${errorData.message}`);
        setSuccessMessage('');
      }
    } catch (error) {
      // console.log para verificar se há algum erro no bloco catch
      console.error('Erro ao adicionar produto:', error);
      setErrorMessage('Erro ao adicionar produto. Por favor, tente novamente mais tarde.');
      setProductName('');
      setProductDate('');
      setProductStatus('');
      setSelectedAmbiente('');
      setSuccessMessage('');
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
              onChange={(e) => setSelectedAmbiente(e.target.value)}
              value={selectedAmbiente}
              className="regInput"
            >
              <option value="">Selecione o ambiente</option>
              {ambientes.map((ambiente) => (
                <option key={ambiente.id} value={ambiente.id}>
                  {ambiente.nome}
                </option>
              ))}
            </select>

            <div className="box-1">
              <div className="btn btn-one" onClick={handleAddProduct}>
                <span>Adicionar</span>
              </div>
            </div>


          </div>
          <div className='Mensagens'>{
            successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>

        </div>
      </div>
    </>
  );
}
