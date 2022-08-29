const express = require('express')
const products = require('./data/products')
const app = express()

app.get('/', (req, res) => {
	res.send('API is running')
})
app.get('/api/products', (req, res) => {
	res.json(products)
})

app.get('/api/products/:id', (req, res) => {
	const product = products.find(
		(product) => product._id.toString() === req.params.id.toString()
	)
	res.json(product)
})

app.listen(5000, console.log('Server started on port 5000'))
