import React from 'react';

const Busca2 = () => {
  return (
    <main className="px-2">
      <section className="banners container d-flex flex-column justify-content-center text-center">
        <div className="input-group-pesquisa input-group input-group-lg shadow mb-3 rounded">
          <input type="text" id="busca" className="form-control border-0 input-pesquisa" placeholder="Pesquisar" aria-label="Recipient's username" aria-describedby="pesquisaCdf" />
          <button className="btn btn-pesquisa" type="button" id="pesquisar"><i className="bi bi-search"></i></button>
        </div>
        <div id="searchResults">
          {/* Aqui serão exibidos os resultados da busca */}
        </div>
      </section>
    </main>
  );
};

export default Busca2;
