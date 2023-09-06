import React from 'react';

const Footer = () => {
  return (
    <footer className="fundo-footer fixed-bottom py-4">
      <div className="footer-container container d-flex flex-wrap justify-content-lg-between justify-content-sm-center align-content-center gap-3">
        <div>
          <a href="https://www.doutorie.com.br/" target="_blank" className="btn p-0">
            <img src="/logo-doutor-ie.svg" alt="" />
          </a>
        </div>
        <nav>
          <ul className="d-flex list-unstyled gap-3 m-0 px-3">
            <li>
              <a href="https://doutorie.com.br/politica-de-privacidade.pdf" target="_blank" className="btn p-0">
                Política de privacidade
              </a>
            </li>
            <li>
              <a href="https://doutorie.com.br/termos-de-uso.pdf" target="_blank" className="btn p-0">
                Termos de uso
              </a>
            </li>
          </ul>
        </nav>
        <ul className="d-flex list-unstyled gap-4 m-0">
          <li>
            <a href="https://www.facebook.com/DoutorIE/" target="_blank" className="btn p-0">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/doutorie/" target="_blank" className="btn p-0">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/DRIEOnline" target="_blank" className="btn p-0">
              <i className="bi bi-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=554832380010" target="_blank" className="btn p-0">
              <i className="bi bi-whatsapp"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;