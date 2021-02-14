import "./Product.css"

const Product = () => {
  return (
    <div className="product">
      <div className="product_info">
        <p>The lean startup</p>
        <p className="product_price">
          <small>$</small>
            <strong>300.99</strong>
        </p>
        <div className="product_rating">
          <p>⭐️</p>
          <p>⭐️</p>

        </div>
      </div>
        <img src="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY436_FMwebp_QL65_.jpg" alt="" />
        <button> Add to Basket</button>
    </div>
  )
}

export default Product;
