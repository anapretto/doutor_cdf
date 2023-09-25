import connectDB from "../../../lib/mondodb";
import Codigo from "../../../models/Codigo";
import ValidaPesquisa from "../../../services/valida_pesquisa";

export default async function handler(req, res) {
    const {cdf} = req.body;
    const autorizado = await ValidaPesquisa(req.body);
    // const autorizado = true;
    if (!autorizado) {
        res.status(200).json({error: 'Limite de pesquisa excedido'});
    } else {
        await connectDB();
        if (req.method === 'POST') {
            const codigo = await Codigo.findOne({codigo: cdf});
            // const codigo = {'codigo': 'B0001', 'componente': 'asda', 'segunda_linha': 'asdasdas'};
            if (!codigo) {
                res.status(200).json({error: 'Codigo não encontrado'});
            }
            res.status(200).json({error: false, detalhes: codigo});
        } else {
            res.status(200).json({error: 'Method not allowed'});
        }
    }
}


