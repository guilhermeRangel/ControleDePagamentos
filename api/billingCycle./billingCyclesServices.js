//aqui é onde eu vou expor os servicos do tipo Rest

const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete']) //integra as rotas com Express

module.exports = BillingCycle