import mongoose from "mongoose";

const CodigoSchema = new mongoose.Schema({
    codigo: String,
    segunda_linha: String,
    compontente: String,
});

export default mongoose.models.Codigo || mongoose.model('Codigo', CodigoSchema, 'cdf');
