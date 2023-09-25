import React from 'react';
import {initFirebase} from '../firebase/firebaseApp';
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from 'next/router';
import GerarTokenApi from "../services/gerar_token_api";
import {setCookie} from "nookies";

const Menu1 = () => {

    initFirebase()
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    const [user, loading] = useAuthState(auth)
    const router = useRouter()

    if (loading) {
        return <div>Carregando...</div>
    }

    if (user) {
        const dadosDoUsuario = {
            'id': user.uid,
            'nome': user.displayName,
            'email': user.email,
        }
        const tokenDaSessao = GerarTokenApi(dadosDoUsuario);
        setCookie(null, 'tokenDaSessao', tokenDaSessao, {
            maxAge: 86400 * 7,
            path: '/'
        })
        router.push("logado")
    }

    const signIn = async () => {
        const result = await signInWithPopup(auth, provider)
    }

    return (
        <header>
            <nav className="navbar-expand-lg navbar fixed-top d-block p-3 zindex">
                <div className="container">
                    <a className="navbar-brand" href="/"><img className="logo" src="/logo-cdf.svg" alt=""/></a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end fundo-geral" tabIndex="-1" id="offcanvasNavbar"
                         aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src="/logo-cdf-off.svg"
                                                                                           alt=""/></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-3">
                                <li className="nav-item">
                                    <button onClick={signIn}
                                            className="btn border borda-principal px-3 nav-link shadow-sm container"
                                            aria-current="page"
                                            href="#">
                                        Fazer login
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button onClick={signIn}
                                            className="btn border px-3 nav-link btn-principal shadow-sm container"
                                            href="#">
                                        Fazer cadastro
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>)
}

export default Menu1;