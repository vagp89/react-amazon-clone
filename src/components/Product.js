import "./Product.css";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, image, rating, price}) => {
  const [ { basket },  dispatch] = useStateValue();

  console.log('This is the basket---->', basket)

    const addToBasket = () => {
      //dispatch the item into the data layer
      dispatch({
        type:'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,

        },
      });

    };

  return (
    <div className="product">
      <div className="product_info">
        <p>
          <strong>{title} </strong>
        </p>
        <p className="product_price">
          <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
          <p>⭐️</p>
          ))}

        </div>
      </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}> Add to Basket</button>
    </div>
  )
}

export default Product;
