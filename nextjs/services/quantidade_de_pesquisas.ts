import Pesquisa from "../models/Pesquisa";
import connectDB from "../lib/mondodb";
export default async function QuantidadeDePesquisas(session_id)
{
    connectDB();
    const date = new Date();
    const Ymd = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    const hash = session_id + Ymd;
    const pesquisaHoje = await Pesquisa.find({
        usuario: hash
    });
    return pesquisaHoje.length;
}