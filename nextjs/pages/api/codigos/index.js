import connectDB from "../../../lib/mondodb";
import Codigo from "../../../models/Codigo";
import ValidaPesquisa from "../../../services/valida_pesquisa";

export default async function handler(req, res) {
    const {cdf} = req.body;
    const autorizado = await ValidaPesquisa(req.body);

    if(!autorizado){
        res.status(401).json({error: 'Limite de pesquisa excedido'});
    }else{
        await connectDB();
        if (req.method === 'POST') {
            console.log(req.body);
            const codigo = await Codigo.findOne({codigo: cdf});
            if (!codigo) {
                res.status(404).json({error: 'Codigo não encontrado'});
            }
            res.status(200).json(codigo);
        } else {
            res.status(405).json({error: 'Method not allowed'});
        }
    }
}


