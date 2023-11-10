import React, { useState } from 'react';
import './styles.css';
import { SideBar } from '../../components/sideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

export function Profile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const loadImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e) => {
          setSelectedImage(e.target.result);
        };

        reader.readAsDataURL(file);
      } else {
        alert('Por favor, selecione uma imagem.');
        e.target.value = '';
      }
    }
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSaveClick = () => {
    // Implemente a lógica para salvar as alterações (enviar para o servidor, etc.)
    setEditMode(false); // Desativa o modo de edição após salvar
  };

  const handleCancelClick = () => {
    setEditMode(false); // Desativa o modo de edição ao cancelar
  };

  return (
    <div className="mainContainer home">
      <SideBar />
      <div className="content">
        <div className="image-upload box">
          {selectedImage ? (
            <>
              <img src={selectedImage} alt="Imagem selecionada" className='imgSelected' />
              <input id="image-field" type="file" accept="image/*" onChange={loadImage} className='inputFile' />
            </>
          ) : (
            <>
              <div className="imgSelected">
                <input
                  type="file"
                  accept="image/*"
                  onChange={loadImage}
                  className='inputFile'
                />
              </div>
              <FontAwesomeIcon
                icon={faCloudArrowUp}
                fontSize={50}
                className='iconUp'
              />
            </>
          )}
          <div class="image-upload box">
          </div>
        </div>
        <div id="dadosusuario">
          <form className="perfilforms" id="perfilForm">
            <div className='divForms'>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                readOnly={!editMode}
                className='inputUser'
              />
            </div>
            <div className='divForms'>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                readOnly={!editMode}
                className='inputUser'
              />
            </div>
            <div className='divForms'>
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                name="senha"
                readOnly={!editMode}
                className='inputUser'
              />
            </div>
          </form>
          {editMode ? (
            <div className="box-1">
              <div className="btn btn-one" onClick={handleSaveClick}>
                <span>Salvar</span>
              </div>
              <div className="btn btn-one" onClick={handleCancelClick}>
                <span>Cancelar</span>
              </div>
            </div>
          ) : (
            <div className="box-1">
              <div className="btn btn-one" onClick={handleEditClick}>
                <span>Editar</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
