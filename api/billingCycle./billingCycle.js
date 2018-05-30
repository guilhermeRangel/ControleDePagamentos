//dependencias

const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({

    name: { type: String, required: true},
    value: { type: Number, min: 0, require: true}

})

const debtSchema = new mongoose.Schema({

    name: { type: String, required: true},
    value: { type: Number, min: 0, require: true},
    status: { type: String, require: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }

})

const billingCycleSchema = new mongoose.Schema({
    ame: { type: String, required: true},
    value: { type: Number, min: 1, max: 12, required: true},
    year: {type: Number, min:1970, max: 2010, required: true},
    credits: [creditSchema],
    debts: [debtSchema]
})