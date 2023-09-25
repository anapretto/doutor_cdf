function SemResultado({exibir}) {
    if(!exibir) return '';
    return (
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="alert alert-danger">
                    <h6>Nenhum resultado encontrado para o termo pesquisado</h6>
                </div>
            </div>
        </div>
    )
}

export default SemResultado;