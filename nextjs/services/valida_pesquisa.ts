import connectDB from "../lib/mondodb";
import Pesquisa from "../models/Pesquisa";

export default async function ValidaPesquisa(idDoUsuario, codigoDeFalha): Promise<boolean> {
    connectDB();
    let autorizado = true;
    const date = new Date();
    const Ymd = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    const hash = idDoUsuario + Ymd;
    const pesquisaHoje = await Pesquisa.find({
        usuario: hash
    });
    if (pesquisaHoje.length < 3) {
        Pesquisa.create({
            usuario: hash,
            codigo: codigoDeFalha,
            data: new Date()
        });
    } else {
        autorizado = false;
    }
    return autorizado;
}

