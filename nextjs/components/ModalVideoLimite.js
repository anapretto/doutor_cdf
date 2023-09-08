import React from 'react';

const ModalVideoLimite = () => {
  return (
    <div className="modal fade" id="exampleModalToggle2" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content fundo-cards p-0 border-0">
          <div className="modal-body p-0">
            <div className="ratio ratio-16x9">
              <iframe id="video-extra" className="rounded" src="https://www.youtube.com/embed/tAkdtAflDGY?controls=0&autoplay=1&mute=1" allow="autoplay; encrypted-media" title="YouTube video player" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalVideoLimite;
