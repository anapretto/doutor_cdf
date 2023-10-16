import QuantidadeDePesquisas from "../../../services/quantidade_de_pesquisas";
import connectDB from "../../../lib/mondodb";

export default async function handler(req, res) {
    try {
        connectDB();
        const quantidade = await QuantidadeDePesquisas(1)
        res.status(200).json({'error': false, 'quantidade': quantidade})
    } catch (e) {
        res.status(200).json({'error': true, 'quantidade': 0})
    }
}


