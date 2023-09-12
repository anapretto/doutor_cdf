import {mongoose} from m

const PesquisaSchema = new mongoose.Schema({
    usuario: String,
    data: Date,
    codigo: String,
});
export default mongoose.models.Pesquisa || mongoose.model('Pesquisa', PesquisaSchema, 'pesquisa');