import React from 'react';
import Link from 'next/link';


const Busca1 = () => {
  return (
    <main className="px-2">
      <section className="banners container d-flex flex-column justify-content-center text-center">
        <div className="input-group-pesquisa input-group input-group-lg shadow mb-3 rounded">
          <input
            type="text"
            id="busca"
            className="form-control border-0 input-pesquisa"
            placeholder="Pesquisar"
            aria-label="Recipient's username"
            aria-describedby="pesquisaCdf"
          />
          <button
            className="btn btn-pesquisa"
            id="pesquisar"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
        {/* AVISO necessário conta */}
        <div className="collapse mt-2" id="collapseExample">
          <div className="alert alert-danger">
            <h5>É necessário possuir uma conta no Doutor C.D.F. para conseguir realizar a pesquisa do código de falha.</h5>
          </div>
        </div>
        <p className="texto-pq p-2 mb-5  d-sm-none d-md-block">
          Doutor C.D.F. é um portal de Pesquisa de Códigos de Falha com objetivo de ajudar o reparador a compreender melhor o diagnóstico automotivo. <br /> Insira o código acima e faça sua busca.
        </p>
        <p className="texto-pq p-2 mb-5  d-block d-sm-block d-md-none">Insira o código de falha acima e faça sua busca.</p>
      </section>
    </main>
  );
};

export default Busca1;
