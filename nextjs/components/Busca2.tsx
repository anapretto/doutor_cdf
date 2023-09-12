import React from 'react';
import {Form, useForm} from "react-hook-form";
import * as punycode from "punycode";

const Busca2 = () => {

    const {register, handleSubmit} = useForm()

    async function onSubmit(dados) {
        console.log(1);
    }

    return (
        <main className="px-2">

            <section className="banners container d-flex flex-column justify-content-center text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group-pesquisa input-group input-group-lg shadow mb-3 rounded">
                        <input
                            {...register("busca")}
                            type="text" id="busca" className="form-control border-0 input-pesquisa"
                            placeholder="Pesquisar" aria-label="Recipient's username" aria-describedby="pesquisaCdf"/>
                        <button className="btn btn-pesquisa" type="submit"><i
                            className="bi bi-search"></i></button>
                    </div>
                </form>
                <div id="searchResults">
                    {/* Aqui serão exibidos os resultados da busca */}
                </div>
            </section>
        </main>
    );
};

export default Busca2;
