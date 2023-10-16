import React from 'react';

const ModalLimiteDiario = () => {
  return (
      <div>
        <div className="modal">
          <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content fundo-cards p-2">
              <div className="modal-header border-0">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-center">
                  <h2 className="fw-bold">Opa, você atingiu o limite de busca diária!</h2>
                  <h4>Aguarde algumas horas para fazer uma nova busca. Você sabia que na Plataforma Doutor-IE as buscas são ilimitadas?</h4>
                  <a className="btn btn-principal flex-fill" href="https://www.doutorie.com.br/conheca-a-plataforma/">Conheça a Plataforma</a>
              </div>
              </div>
          </div>
        </div>
    </div>
  );
};

export default ModalLimiteDiario;
