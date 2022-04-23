const QuoteService = require('../services/quotes.services')

class QuoteController {

    async index(req, res) {
        const quotes = await QuoteService.all()
        return res.render('quotes', {
            quotes,
            page:[1]
        })
    }

    async create(req, res) {
        const {name, author} = req.body
        const quote = await QuoteService.create({name, author})
        return res.json(quote)
    }

    async update(req, res) {
        const {id,name,author} = req.body
        const quote = await QuoteService.update({id,name, author})
        return res.json(quote)
    }

    async delete(req, res) {
        const {id} = req.body
        const data = await QuoteService.delete(id)
        return res.json(data)
    }
}

module.exports = new QuoteController()