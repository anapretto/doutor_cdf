import React from 'react';

const ModalRec = () => {
  return (
    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
      <div className="modal-dialog ">
        <div className="modal-content fundo-cards p-3">
          <div className="modal-header border-0">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body modal-toggle">
            <div id="recuperarSenha" className="info">
              <h2 className="fw-bold" id="exampleModalLabel">Esqueceu a senha?</h2>
              <h4>Para recuperar o acesso, informe seu email cadastrado.</h4>
              <form id="contato" className="mt-3">
                <div className="form-floating mb-3">
                  <input type="email" className="form-control fundo-cards borda-principal" id="emailLogin" placeholder="nome@exemplo.com" />
                  <label htmlFor="emailLogin">Email</label>
                </div>
                <button type="button" className="btn btn-principal w-100 fw-bold py-3 shadow-sm" id="toggle-button">Recuperar senha</button>
              </form>
              <p className="m-0 pt-3 text-center">Se você não tem mais acesso ao email cadastrado, entre em contato com o suporte.</p>
            </div>
            <h2 id="cadastro-form" className="hide text-center">Acesse seu email e altere sua senha a partir do link enviado.</h2>
          </div>
          <div className="modal-footer border-0 m-auto mt-0 pt-0">
            <button className="btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Voltar para login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRec;
