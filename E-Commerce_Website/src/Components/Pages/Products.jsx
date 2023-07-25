import Product from './Product'
import {popularProducts} from './data'

const Products = () => {
  return (
    <div className='products'>
        {popularProducts.map((item) => (
            <Product item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Products