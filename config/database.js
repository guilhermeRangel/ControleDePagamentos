const mongoose = require('mongoose')
module.exports = mongoose.connect("mongodb://localhost/db_finance", {useMongoClient: true});
mongoose.Promise = global.Promise;

mongoose.Error.messages.general.required = "O atributo'{PATH}' e obrigatorio"