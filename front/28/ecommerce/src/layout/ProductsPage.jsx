import React from 'react'
import Layout from './Layout'
import Products from '../components/Products'
import CreateProduct from '../components/CreateProduct'

function ProductsPage() {
  return (
    <Layout>
      <Products />
      <CreateProduct />
    </Layout>
  )
}

export default ProductsPage