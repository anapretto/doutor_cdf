import React from 'react';

const ModalTutorial = () => {
  return (
    <div className="modal fade" id="video-comofunciona" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content fundo-cards">
          <div className="modal-header border-0">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/tAkdtAflDGY?" title="YouTube video" allowFullScreen></iframe>
            </div>
          </div>
          <div className="modal-footer border-0 m-auto pt-0">
            <button type="button" className="btn borda-principal" data-bs-dismiss="modal">Voltar para buscas</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTutorial;
