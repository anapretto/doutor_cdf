import jwt from 'jsonwebtoken';

function GerarTokenApi(usuarioDaSessao){
    const jsonDosDados = JSON.stringify(usuarioDaSessao);
    return jwt.sign(jsonDosDados, 'asdasdasd')
}

export default GerarTokenApi;