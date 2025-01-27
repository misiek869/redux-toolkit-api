const Product = require('../models/product-model')

const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find()
		res.status(200).json(products)
	} catch (error) {
		res.status(500).json({ message: 'Błąd serwera', error })
	}
}

module.exports = {
	getAllProducts,
}
