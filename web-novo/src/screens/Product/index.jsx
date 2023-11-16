import React, { useState } from 'react';
import './styles.css';
import { SideBar } from '../../components/sideBar';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import axios from 'axios';

export function Product() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [searchError, setSearchError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8090/produto`);
      const data = response.data;

      console.log('Resposta do servidor ao buscar produtos:', data);

      if (data.length === 0) {
        setNoResults(true);
        setSearchError('');
      } else {
        setResults(data);
        setNoResults(false);
        setSearchError('');
      }
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      setSearchError('Erro ao buscar produtos.');
    }
  };

  const handleButtonClick = () => {
    if (query.trim() !== '') {
      handleSearch();
    } else {
      setSearchError('A consulta de pesquisa está vazia. Por favor, insira um termo de pesquisa.');
      setNoResults(true);
      setResults([]);
    }
  };

  return (
    <>
      <div className="mainContainer home">
        <SideBar />
        <div className="prdt">
          <h1 className="lista">Listagem de Produtos:</h1>
          <div className="search search-bar">
            <input
              type="text"
              placeholder="Pesquisar por Produtos"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="button" onClick={handleButtonClick}>
              <SearchRoundedIcon />
            </button>
          </div>

          {searchError && <p className="error-message">{searchError}</p>}

          {noResults ? (
            <p>Nenhum produto encontrado com o nome "{query}".</p>
          ) : (
            <div className="search-results">
              <ul>
                {results.map((result, index) => (
                  <li key={index}>{result.nome}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}