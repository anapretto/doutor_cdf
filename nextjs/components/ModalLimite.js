import React from 'react';
import ModalVideoLimite from './ModalVideoLimite';

const ModalLimite = () => {
  return (
    <div>
        <div className="modal" id="modal-limite">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content fundo-cards p-2">
            <div className="modal-header border-0">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
                <h2 className="fw-bold">Opa, você atingiu o limite de busca diária!</h2>
                <h4>Não se preocupe, você pode assistir nosso vídeo para liberar mais uma pesquisa! <br /> É rapidinho, aperte o play.</h4>
                <button className="btn border-0" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                <img src="/play.svg" alt="Play" className="popupBtn" id="btnPopup" />
                </button>
            </div>
            </div>
        </div>
        </div>
        <ModalVideoLimite />
    </div>


  );
};

export default ModalLimite;
