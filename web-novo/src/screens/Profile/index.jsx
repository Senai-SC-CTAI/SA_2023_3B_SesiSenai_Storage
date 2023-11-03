import React, { useEffect, useState } from 'react';
import './styles.css'
import { SideBar } from '../../components/sideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';


export function Profile() {

    const [selectedImage, setSelectedImage] = useState(null);

    const loadImage = (e) => {
        const file = e.target.files[0];

        // Verifica se um arquivo foi selecionado
        if (file) {
            // Verifica se o arquivo é uma imagem
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    // Define a imagem selecionada para exibição
                    setSelectedImage(e.target.result);
                };

                reader.readAsDataURL(file);
            } else {
                // Caso o arquivo não seja uma imagem, você pode exibir uma mensagem de erro
                alert('Por favor, selecione uma imagem.');
                e.target.value = ''; // Limpa o campo de entrada de arquivo
            }
        }
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
                                type="file" accept="image/*" 
                                onChange={loadImage} className='inputFile' />
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
                            <input type="text" id="nome" name="nome" readOnly className='inputUser' />
                        </div>
                        <div className='divForms'>
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" readOnly className='inputUser' />
                        </div>
                        <div className='divForms'>
                            <label htmlFor="senha">Senha:</label>
                            <input type="password" id="senha" name="senha" readOnly className='inputUser' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


