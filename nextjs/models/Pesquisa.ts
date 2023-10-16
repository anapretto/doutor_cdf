import {mongoose} from "mongoose";

const PesquisaSchema = new mongoose.Schema({
    usuario: String,
    data: Date,
    codigo: String,
});

if(mongoose.models.Pesquisa == null) {
    mongoose.model('Pesquisa', PesquisaSchema, 'pesquisa')
}
export default mongoose.models.Pesquisa;