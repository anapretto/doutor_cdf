import React from 'react';
import {useForm} from "react-hook-form";
import ResultadoPesquisa from "./ResultadoPesquisa";
import SemResultado from "./SemResultado";
import LimiteDePesquisa from "./LimiteDePesquisa";
import {parseCookies} from "nookies";

function Busca2(){
    const [busca, setBusca] = React.useState({
        busca: ''
    })

    const [resultado, setResultado] = React.useState({
        codigo: ''
    })

    const [exibirErro, setExibirErro] = React.useState(false);
    const [exibirErroQuantidade, setExibirErroQuantidade] = React.useState(false);

    const {register, handleSubmit} = useForm()

    const {tokenDaSessao} = parseCookies();

    function onSubmit(data: any) {
        setBusca(data.busca);
        setResultado({'codigo':''});
        try {
            fetch('/api/codigos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "session_id": tokenDaSessao,
                    "cdf": data.busca,
                }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    if (data.error) {
                        setExibirErroQuantidade(data.error);
                        return;
                    }
                    setResultado(data.detalhes);
                    setExibirErro(false);
                    setExibirErroQuantidade(false);
                })
                .catch((error) => {
                    console.error('Erro na requisição:', error);
                });
        } catch (e) {
            setExibirErro(true);
            setTimeout(() => {
                setExibirErro(false);
            }, 1000 * 2); /// 2 segundos
        }

    }

    return (
        <main className="px-2">

            <section className="banners container d-flex flex-column justify-content-center text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group-pesquisa input-group input-group-lg shadow mb-3 rounded">
                        <input
                            {...register("busca")}
                            required={true}
                            type="text" className="form-control border-0 input-pesquisa"
                            placeholder="Pesquisar"/>
                        <button className="btn btn-pesquisa" type="submit"><i
                            className="bi bi-search"></i></button>
                    </div>
                </form>
                <ResultadoPesquisa dados={resultado}></ResultadoPesquisa>

                <SemResultado exibir={exibirErro}></SemResultado>
                <LimiteDePesquisa exibir={exibirErroQuantidade}></LimiteDePesquisa>
            </section>
        </main>
    );
}

export default Busca2;
