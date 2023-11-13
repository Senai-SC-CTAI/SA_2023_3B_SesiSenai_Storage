import React, { useState } from 'react';
import './styles.css';
import { SideBar } from '../../components/sideBar';
import axios from 'axios';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export function Addenvironment() {
  const [environmentName, setEnvironmentName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // const handleAddEnvironment = async () => {
  //   try {
  //     console.log('Dados do Ambiente a serem enviados:', {
  //       nome_salas: environmentName,
  //       quant_salas: 0,
  //     });

  //     const response = await fetch('http://localhost:8090/salas', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         nome_salas: environmentName,
  //         quant_salas: 0,
  //       }),
  //     });

  const handleAddEnvironment = async (event) => {
    event.preventDefault();
    try {
      let newEnvironment = {
        quant_salas : environmentName,
        nome_salas : 0
      }
      await axios.post('http://localhost:8090/salas', newEnvironment);

    } catch (error) {
      console.error('Erro ao criar sala:', error);
    }
  };

    //   console.log('Resposta do servidor:', response);

    //   if (response.ok) {
    //     setSuccessMessage('Ambiente adicionado com sucesso!');
    //     setErrorMessage('');
    //     setEnvironmentName('');
    //   } else {
    //     const errorData = await response.json();
    //     setErrorMessage(`Erro ao adicionar ambiente: ${errorData.message}`);
    //     setSuccessMessage('');
    //   }
    // } catch (error) {
    //   console.error('Erro ao adicionar ambiente:', error);
    //   setErrorMessage('Erro ao adicionar ambiente. Por favor, tente novamente mais tarde.');
    //   setSuccessMessage('');
    // }
  


  return (
    <>
      <div className="mainContainer home">
        <SideBar />
        <div className="prdt">
          <div className='Centro'>
            <h1 className="lista">Adicionar Ambiente:</h1>
            <span>Nome:</span>
            <input
              type="text"
              placeholder="Nome"
              className='regInput'
              value={environmentName}
              onChange={(e) => setEnvironmentName(e.target.value)}
            />

            <div className="box-1">
              <div className="btn btn-one" onClick={handleAddEnvironment}>
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