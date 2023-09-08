import React, { useEffect } from 'react';


const ModalCadastro = () => {

  return (
    <div className="modal fade" id="modaltoggle-cadastro" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content fundo-cards p-3">
          <div className="modal-header border-0">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h2 className="fw-bold" id="exampleModalLabel">Cadastre-se</h2>
            <h4>Insira os dados abaixo para criar sua conta e começar a explorar.</h4>

            <form id="contato" className="mt-3">
              <div className="form-floating mb-3">
                <input 
                  type="email" 
                  className="form-control fundo-cards borda-principal" 
                  id="emailCadastro" 
                  placeholder="nome@exemplo.com" 
                  required 
                />
                <label htmlFor="emailCadastro">Seu melhor email</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                  type="password" 
                  className="form-control fundo-cards borda-principal" 
                  id="senhaCadastro" 
                  placeholder="Senha" 
                  required 
                  minLength="8" 
                  maxLength="12" 
                />
                <label htmlFor="senhaCadastro">Senha</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                  type="password" 
                  className="form-control fundo-cards borda-principal" 
                  id="senhaCadastro" 
                  placeholder="Senha" 
                  required 
                  minLength="8" 
                  maxLength="12" 
                />
                <label htmlFor="senhaCadastro">Confirmar senha</label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input fundo-cards borda-principal" type="checkbox" value="" id="flexCheckDefault" required />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Concordo com os <a href="https://doutorie.com.br/termos-de-uso.pdf" target='_blank'>termos de uso</a> e <a href="https://doutorie.com.br/politica-de-privacidade.pdf" target='_blank'>políticas de privacidade.</a>
                </label>
              </div>
              <button type="submit" className="btn btn-principal w-100 fw-bold py-3 shadow-sm" data-bs-target="#modaltoggle-confirmar" data-bs-toggle="modal">Cadastrar</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCadastro;
