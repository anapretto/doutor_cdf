import React from 'react';

const ModalProp = () => {
  return (
    <div className="modal fade" id="modal-proprietario" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content fundo-cards text-center p-sm-2 p-md-3">
          <div className="modal-header border-0 pb-0">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h2 className="modal-title fw-bold" id="staticBackdropLabel">Este conteúdo é exclusivo!</h2>
            <h4>Deseja mais informações? Experimente a Plataforma Doutor-IE!</h4>
            <img src="assets/mockup.webp" className="card-img-top my-2" alt="Plataforma Doutor-IE em diversos dispositivos." />
            <h5>Clique no botão abaixo e saiba mais.</h5>
            <div className="d-grid gap-2">
              <a href="https://www.doutorie.com.br/" target="_blank">
                <button type="button" className="btn btn-principal w-100 fw-bold py-3 mt-2 shadow-sm">Conhecer a plataforma</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProp;
