import React, { useState } from 'react';
import './styles.css';
import { SideBar } from '../../components/sideBar';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import axios from 'axios';

export function Addenvironment() {
  const [environmentName, setEnvironmentName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddEnvironment = async () => {
    try {
      console.log('Dados do Ambiente a serem enviados:', {
        nome_salas: environmentName,
        quant_salas: 0,
      });

      const response = await axios.post('http://localhost:8090/Salas', {
        nome_salas: environmentName,
        quant_salas: 0,
      });

      console.log('Resposta do servidor:', response);

      if (response.status === 200) {
        setSuccessMessage('Ambiente adicionado com sucesso!');
        setErrorMessage('');
        setEnvironmentName('');
      } else {
        setErrorMessage(`Erro ao adicionar ambiente: ${response.data.message}`);
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Erro ao adicionar ambiente:', error);
      setErrorMessage('Erro ao adicionar ambiente. Por favor, tente novamente mais tarde.');
      setSuccessMessage('');
    }
  };

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