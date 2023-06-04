import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './View/GridView'
import SquareView from './View/SquareView'
import ListView from './View/ListView'

const ProductList = () => {
  const { filtered_products: products, view } = useFilterContext()
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        sorry,no products matched your search...
      </h5>
    )
  }
  if (view === 'grid') {
    return <GridView products={products} />
  }
  if (view === 'square') {
    return <SquareView products={products} />
  }
  return <ListView products={products} />
}

export default ProductList
