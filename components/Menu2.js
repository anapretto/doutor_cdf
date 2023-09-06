import React from 'react';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from '../pages/index.js';


const Menu2 = () => {

  const auth = getAuth()
  const [user, loading] = useAuthState(auth)

  return (
    <header>
      <nav className="navbar-expand-lg navbar fixed-top d-block p-3  zindex">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="logo" src="/logo-cdf.svg" alt="" />
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end fundo-geral"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src="/logo-cdf-off.svg" alt="" />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-3">
                <li className="nav-item dropdown">
                  <a
                    className="btn border borda-principal px-3 nav-link dropdown-toggle shadow-sm"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.displayName}
                  </a>
                  <ul className="dropdown-menu shadow-sm p-3 mb-5 fundo-cards rounded">
                    <li>
                      <a
                        target="_blank"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#video-comofunciona"
                      >
                        Como funciona o Doutor C.D.F.?
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        className="dropdown-item"
                        href="https://www.doutorie.com.br/conheca-a-plataforma/"
                      >
                        Conhecer a plataforma
                      </a>
                    </li>
                    <li className="dropdown-item disabled text0">
                      Pesquisas restantes:{' '}
                      <span
                        id="pesquisas-restantes"
                        className="badge btn-principal"
                      >
                        3
                      </span>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                      <a className="dropdown-item">
                        <button
                          type="button" 
                          className="btn btn-principal container"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Sair
                        </button>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu2;
