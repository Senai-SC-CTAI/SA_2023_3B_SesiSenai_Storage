import React, { useState, useEffect } from 'react';
import './styles.css';
import { SideBar } from '../../components/sideBar';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import axios from 'axios';

export function Add() {
  const [productName, setProductName] = useState('');
  const [productStatus, setProductStatus] = useState('');
  const [selectedAmbiente, setSelectedAmbiente] = useState('');
  const [ambientes, setAmbientes] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [users, setUsers] = useState([]); // New state for users
  const [selectedUser, setSelectedUser] = useState('');

  const fetchAmbientes = async () => {
    try {
      const response = await axios.get('http://localhost:8090/salas');
      setAmbientes(response.data);
      console.log(ambientes);
    } catch (error) {
      console.error('Erro ao carregar ambientes:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8090/users');
      setUsers(response.data);
      console.log(users);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  };

  useEffect(() => {
    fetchAmbientes();
    fetchUsers();
  }, []);

  const handleAddProduct = async () => {
    try {
      console.log('Dados do Produto a serem enviados:', {
        nome_produto: productName,
        status_produto: productStatus,
        cod_produto: null,
        salas_id_salas: selectedAmbiente,
        users_id_users: selectedUser, 
      });

      const response = await axios.post('http://localhost:8090/produto', {
        nome_produto: productName,
        status_produto: productStatus,
        cod_produto: null,
        salas_id_salas: selectedAmbiente,
        users_id_users: selectedUser, 
      });

      console.log('Resposta do servidor:', response);

      if (response.status === 200) {
        setSuccessMessage('Produto adicionado com sucesso!');
        setErrorMessage('');
        console.log('Produto adicionado com sucesso:', response.data);
        setProductName('');
        setProductStatus('');
        setSelectedAmbiente('');
        setSelectedUser(''); 
      } else {
        setErrorMessage(`Erro ao adicionar produto: ${response.data.message}`);
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      setErrorMessage('Erro ao adicionar produto. Por favor, tente novamente mais tarde.');
      setProductName('');
      setProductStatus('');
      setSelectedAmbiente('');
      setSelectedUser('');
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
                <option key={ambiente.id} value={ambiente.id_salas}>
                  {ambiente.nome_salas}
                </option>
              ))}
            </select>
            <span>Usuário:</span>
            <select
              onChange={(e) => setSelectedUser(e.target.value)}
              value={selectedUser}
              className="regInput"
            >
              <option value="">Selecione o usuário</option>
              {users.map((user) => (
                <option key={user.id_users} value={user.id_users}>
                  {user.name_users}
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