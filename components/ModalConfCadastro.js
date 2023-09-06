import React from 'react';

const ModalConfCadastro = () => {
  return (
    <div className="modal fade" id="modaltoggle-confirmar" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
      <div className="modal-dialog ">
        <div className="modal-content fundo-cards p-3">
          <div className="modal-header border-0 ">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h2 className="fw-bold">Confirme seu email!</h2>
            <h4 className="mb-3">Show, agora falta apenas confirmar seu cadastro através do email que lhe enviamos e já estará pronto para explorar!</h4>
            <button type="button" className="btn btn-principal w-100 fw-bold py-3 shadow-sm mb-3" id="toggle-button">Voltar para a tela inicial</button>
            <a href="/" className="container btn">Reenviar email</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfCadastro;
