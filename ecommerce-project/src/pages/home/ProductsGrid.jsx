import { Product } from './Product';

export function ProductsGrid({ product, loadCart }) {

  return (
    <div className="products-grid">
      {product.map((product) => {

        return (
          <Product key = {product.id} product={product} loadCart={loadCart} />
        );
      })
      }

    </div>

  );
}