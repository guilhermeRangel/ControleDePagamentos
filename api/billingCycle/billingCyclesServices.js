//aqui é onde eu vou expor os servicos do tipo Rest

const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete']) //integra as rotas com Express
BillingCycle.updateOptions({new: true, runValidatorns: true}) //sempre que for dar um update ele gera um obj new e o runValidatorns 

BillingCycle.route('count', function(req, res, next){
    BillingCycle.count(function(error, value){
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = BillingCycle