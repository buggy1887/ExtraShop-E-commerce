import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import products from './data/products.js'

dotenv.config()

connectDB()

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

const PORT = process.env.PORT || 5000
app.listen(
	PORT,
	console.log(
		`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
			.bold
	)
)
