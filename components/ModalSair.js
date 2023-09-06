import React from 'react';
import Menu2 from './Menu2';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from '../pages/index.js';

const ModalSair = () => {

  const auth = getAuth()
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if(loading){
    return <div>Carregando...</div>
  }

  if(!user){
    router.push("/")
  }

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3">
          <div className="modal-header border-0 pb-3">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center m-0 p-0">
            <h4 className="fw-bold" id="exampleModalLabel">Você tem certeza que deseja sair da sua conta?</h4>
            <div className="modal-footer d-flex border-0 m-0">
              <a className="btn borda-principal flex-fill" href="">Não</a>
              <a onClick={() => auth.signOut()} className="btn btn-principal flex-fill" href="/">Sim</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSair;
