import connectDB from "../lib/mondodb";
import Pesquisa from "../models/Pesquisa";

type DadosDaConsulta = {
    session_id: string;
    cdf: string;
}
export default async function ValidaPesquisa(body: DadosDaConsulta): Promise<boolean> {
    connectDB();
    let autorizado = true;
    const date = new Date();
    const Ymd = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    const hash = body.session_id + Ymd;
    const pesquisaHoje = await Pesquisa.find({
        usuario: hash
    });
    if (pesquisaHoje.length < 3) {
        Pesquisa.create({
            usuario: hash,
            codigo: body.cdf,
            data: new Date()
        });
    } else {
        autorizado = false;
    }
    return autorizado;
}

