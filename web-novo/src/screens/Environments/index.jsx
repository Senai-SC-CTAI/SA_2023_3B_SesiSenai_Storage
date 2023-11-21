import React, { useState } from 'react';
import './styles.css';
import { SideBar } from '../../components/sideBar';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import axios from 'axios';

export function Environments() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(5);

  const fetchResults = async () => {
    try {
      const response = await axios.get(`http://localhost:8090/salas?nome_like=${query}`);
      const data = response.data;

      if (data.length === 0) {
        setNoResults(true);
        setResults([]);
        setSearchError('');
      } else {
        setResults(data);
        setNoResults(false);
        setSearchError('');
      }
    } catch (error) {
      console.error('Erro ao buscar ambientes:', error);
      setSearchError('Erro ao buscar ambientes. Por favor, tente novamente.');
      setNoResults(true);
      setResults([]);
    }
  };

  const handleSearch = async () => {
    if (query.trim() !== '') {
      await fetchResults();
      setCurrentPage(1);
    } else {
      setSearchError('A consulta de pesquisa está vazia. Por favor, insira um termo de pesquisa.');
      setNoResults(true);
      setResults([]);
    }
  };

  const handleButtonClick = () => {
    handleSearch();
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="mainContainer home">
        <SideBar />
        <div className="prdt">
          <h1 className="lista">Listagem de Ambientes:</h1>
          <div className="search search-bar">
            <input
              type="text"
              placeholder="Pesquisar por Ambientes"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="button" onClick={handleButtonClick}>
              <SearchRoundedIcon />
            </button>
          </div>

          {searchError && <p className="error-message">{searchError}</p>}

          {noResults ? (
            <p>Nenhum ambiente encontrado com o nome "{query}".</p>
          ) : (
            <div className="search-results">
              <ul>
                {currentResults.map((result, index) => (
                  <li key={index}>
                    <strong>Nome:</strong> {result.nome_salas}<br />
                    <span><strong>Quantidade de Produtos:</strong> {result.quant_salas}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {results.length > resultsPerPage && (
            <div className="pagination">
              {Array.from({ length: Math.ceil(results.length / resultsPerPage) }, (_, i) => (
                <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}