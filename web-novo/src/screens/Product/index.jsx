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
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(5);

  const fetchResults = async () => {
    try {
      const response = await axios.get(`http://localhost:8090/produto?nome_produto_like=${query}`);
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
      console.error('Erro ao buscar produtos:', error);
      setSearchError('Erro ao buscar produtos. Por favor, tente novamente.');
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
                {currentResults.map((result, index) => (
                  <li key={index}>
                    <strong>Nome:</strong> {result.nome_produto}<br />
                    <span><strong>Status do Produto:</strong> {result.status_produto}</span><br />
                    <span><strong>Data de Cadastro:</strong> {result.dat_cadastro}</span>
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