import React from 'react';

const ModalLogin = () => {
  return (
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content fundo-cards p-3">
          <div className="modal-header border-0">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h2 className="fw-bold" id="exampleModalLabel">Login</h2>
            <h4>Acesse sua conta novamente preenchendo os dados abaixo.</h4>

            <form action="/logado" method="GET" id="contato" className="mt-3">
              <div className="form-floating mb-3">
                <input 
                  type="email" 
                  className="form-control fundo-cards borda-principal" 
                  id="emailLogin" 
                  placeholder="nome@exemplo.com" 
                  required 
                />
                <label htmlFor="emailLogin">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                  type="password" 
                  className="form-control fundo-cards borda-principal" 
                  id="senhaLogin" 
                  placeholder="Senha" 
                  minLength="8" 
                  maxLength="12" 
                  required 
                />
                <label htmlFor="senhaLogin">Senha</label>
              </div>
              <button type="submit" className="btn btn-principal w-100 fw-bold py-3 shadow-sm">Fazer login</button>
            </form>

            <div className="d-grid gap-2">
              <button className="mt-3 btn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Esqueceu sua senha? Clique aqui</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
