import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<a href={`/products/${product.id}`}>
				<Card.Img variant='top' src={product.image} />
			</a>
			<Card.Body>
				<a href={`/products/${product.id}`}>
					<Card.Title as='div'>
						<strong>{product.name}</strong>
					</Card.Title>
				</a>
				<a href={`/products/${product.id}`}>
					<Card.Text as='div'>
						<div className='my-3'>
							{product.rating} from {product.numReviews} reviews
						</div>
					</Card.Text>
					<Card.Text as='h3'>{product.price}€</Card.Text>
				</a>
			</Card.Body>
		</Card>
	)
}

export default Product
