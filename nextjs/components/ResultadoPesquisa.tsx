function ResultadoPesquisa({dados}) {
    if(dados.codigo === '') return ('');
    return (
        <div id="searchResults">
            <div className="row">
                <div className="col-md-2">
                    <h3>{dados.codigo}</h3>
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-12">
                            <strong>{dados.componente}</strong>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {dados.segunda_linha}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResultadoPesquisa;