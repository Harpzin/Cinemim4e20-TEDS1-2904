const mongoose = require("mongoose");
const ColoboradorSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    andamento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Andamento',
        require: true,
    },
       
});
module.exports = mongoose.model("Colaborador", ColoboradorSchema);