import React, { useState } from 'react';
import './styles.css';
import { SideBar } from '../../components/sideBar';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export function Product() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5173/product`);
      const data = await response.json();

      if (data.length === 0) {
        setNoResults(true);
      } else {
        setResults(data);
        setNoResults(false);
      }
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
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
            <button type="submit" onClick={handleSearch}>
              <SearchRoundedIcon />
            </button>
          </div>

          {noResults ? (
            <p>Nenhum produto encontrado com o nome "{query}".</p>
          ) : (
            <div className="search-results">
              <h2>Resultados da Pesquisa:</h2>
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
