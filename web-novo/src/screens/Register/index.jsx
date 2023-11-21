import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import Logo from '../../assets/Group 10.png';
import { NavLink } from 'react-router-dom';
import { Footer } from '../../components/Footer';

export function Register() {

  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    name_users: '',
    cpf_users: '',
    email_users: '',
    password_users: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      if (
        !formData.name_users ||
        !formData.cpf_users ||
        !formData.email_users ||
        !formData.password_users
      ){
        setValidationMessage('Por favor, preencha todos os campos.');
        setSuccessMessage('');
        setErrorMessage('');
        return;
      } 
        const { id_users, ...dataWithoutId } = formData;
        console.log('Enviando dados para o servidor:', formData);
        let newUser = {
          name_user: formData.name_users,
          email_user: formData.email_users,
          password_user: formData.password_users,
          cpf_user: formData.cpf_users,
        };
        await axios.post('http://localhost:8090/users', newUser);   
        setSuccessMessage('Cadastro realizado com sucesso!');
        setErrorMessage('');
        setValidationMessage('');
        console.log(users);
        setFormData({
          name_users: '',
          cpf_users: '',
          email_users: '',
          password_users: ''
      })
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      setErrorMessage('Erro ao cadastrar usuário. Por favor, tente novamente mais tarde.');
      setSuccessMessage('');
      setValidationMessage('');
    }
  };

  return (
    <>
      <div className="mainContainer">
        <img src={Logo} className="mainLogo" />
        <h1> Venha se cadastrar</h1>
        <div className="container-index register">
          <span>Nome</span>
          <input
            type="text"
            placeholder="Nome"
            className="regInput"
            name="name_users"
            value={formData.name_users}
            onChange={handleInputChange}
          />

          <span>CPF</span>
          <input
            type="text"
            placeholder="CPF"
            className="regInput"
            name="cpf_users"
            value={formData.cpf_users}
            onChange={handleInputChange}
          />
          <span>E-mail</span>
          <input
            type="email"
            placeholder="Email"
            className="regInput"
            name="email_users"
            value={formData.email_users}
            onChange={handleInputChange}
          />
          <span>Senha</span>
          <input
            type="password"
            placeholder="Senha"
            className="regInput"
            name="password_users"
            value={formData.password_users}
            onChange={handleInputChange}
          />

          <div className="button-container">
            <NavLink to="/">
              <div className="box-1">
                <div className="btn btn-one">
                  <span>Voltar</span>
                </div>
              </div>
            </NavLink>

            <div className="box-1" onClick={handleRegister}>
              <div className="btn btn-one">
                <div className='central' >
                <span>Confirmar</span>
                </div>
              </div>
            </div>
          </div>

          <div className='Mensagens2'>
            {validationMessage && <p className="error-message2">{validationMessage}</p>}
            {successMessage && <p className="success-message2">{successMessage}</p>}
            {errorMessage && <p className="error-message2">{errorMessage}</p>}
          </div>
        </div>
        <br />
        <Footer />
      </div>
    </>
  );
}