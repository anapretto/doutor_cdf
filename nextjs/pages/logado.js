import React, {useEffect} from 'react';
import Head from 'next/head';
import Menu2 from '../components/Menu2';
import ModalTutorial from '../components/ModalTutorial';
import ModalSair from '../components/ModalSair';
import Footer from '../components/Footer';
import Busca2 from "../components/Busca2";

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/quantidade',{
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify({
            'session_id': 1
        })
    })
    const dados = await res.json()
    return { props: { dados } }
}

function Logado({dados})  {
    return (
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name='description' content='Buscador de código de falhas Doutor-C.D.F.'/>
                <meta name='author' content='Doutor-IE'/>
                <title>Doutor C.D.F.</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon"/>
            </Head>

            <Menu2 dados={dados}/>

            <Busca2/>

            <ModalTutorial/>
            <ModalSair/>


            <Footer/>

            {/*<script src="/custom.js"></script>*/}
            {/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>*/}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
                    crossorigin="anonymous"></script>
        </div>
    )
}

export default Logado;