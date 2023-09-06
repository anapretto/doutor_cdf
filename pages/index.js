import React, { useEffect } from 'react';
import Head from 'next/head';
import Menu1 from '../components/Menu1';
import Busca1 from '../components/Busca1';
import ModalLogin from '../components/ModalLogin';
import ModalRec from '../components/ModalRec';
import ModalCadastro from '../components/ModalCadastro';
import ModalConfCadastro from '../components/ModalConfCadastro';
import Footer from '../components/Footer';


function Home() {
    return (
        <div>
             <Head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name='description' content='Buscador de código de falhas Doutor-C.D.F.'/>
                <meta name='author' content='Doutor-IE'/>
                <title>Doutor C.D.F.</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon"/>
            </Head>

            <Menu1/>

            <Busca1 />

            <ModalLogin />
            <ModalRec />
            <ModalCadastro />
            <ModalConfCadastro />

            <Footer />

            <script src="../public/custom"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
        </div>
    )
}

export default Home;