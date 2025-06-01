import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [paginatedCharacters, setPaginatedCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const currentPage = useRef(1);
  const charactersPerPage = 10;

  useEffect(() => {
    const fetchCharacters = async () => {
      let allCharacters = [];
      let url = 'https://rickandmortyapi.com/api/character';

      while (url) {
        const response = await fetch(url);
        const data = await response.json();
        allCharacters = [...allCharacters, ...data.results];
        url = data.info.next;
      }

      setCharacters(allCharacters);
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    const start = (currentPage.current - 1) * charactersPerPage;
    const end = start + charactersPerPage;
    setPaginatedCharacters(characters.slice(start, end));
    setTotalPages(Math.ceil(characters.length / charactersPerPage));
  }, [characters]);

  const goToPage = (page) => {
    currentPage.current = page;
    const start = (page - 1) * charactersPerPage;
    const end = start + charactersPerPage;
    setPaginatedCharacters(characters.slice(start, end));
  };

  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>

      <div className="character-grid">
        {paginatedCharacters.map((char) => (
          <div className="card" key={char.id}>
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
          </div>
        ))}
      </div>

      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => goToPage(pageNum)}
              style={{
                backgroundColor: currentPage.current === pageNum ? '#4CAF50' : '#f1f1f1',
                color: currentPage.current === pageNum ? 'white' : 'black',
              }}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
