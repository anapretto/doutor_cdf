import jwt from "jsonwebtoken";

function RecuperarDadosDaSessao(token) {
    try{
        return jwt.verify(token, 'asdasdasd');
    }catch (err) {
        return false;
    }
}
export default RecuperarDadosDaSessao;