import connectDB from "../../../lib/mondodb";
import Codigo from "../../../models/Codigo";
import ValidaPesquisa from "../../../services/valida_pesquisa";
import RecuperarDadosDaSessao from "../../../services/recuperar_dados_da_sessao";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {cdf, session_id} = req.body;

        const dadosDaSessao = RecuperarDadosDaSessao(session_id);
        if(!dadosDaSessao) return res.status(500).json('Erro de autenticacao');

        await connectDB();
        const codigo = await Codigo.findOne({codigo: cdf});
        const autorizado = await ValidaPesquisa(dadosDaSessao.id, cdf);
        if(!autorizado){
            return res.status(200).json({error: 'Limite de pesquisa excedido'});
        }

        if (!codigo) {
            return res.status(200).json({error: 'Codigo não encontrado'});
        }

        return res.status(200).json({error: false, detalhes: codigo});
    } else {
        return res.status(200).json({error: 'Method not allowed'});
    }
}


