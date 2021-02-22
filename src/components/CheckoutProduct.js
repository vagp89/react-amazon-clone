import React from 'react'
import './CheckoutProduct.css'
import  { useStateValue } from "../StateProvider";

const CheckoutProduct = ({id, image, title, price, rating, hideButton}) => {
  const [ { basket }, dispatch ] = useStateValue();

   const removeFromBasket = () => {
     //remove the prodcut from the basket
     dispatch({
         type: "REMOVE_FROM_BASKET",
         id: id,
     })
   }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt=""/>
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">
        <strong>{title} </strong>
        </p>
        <p className="checkoutProduct_price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
          .fill()
          .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  )
}

export default CheckoutProduct;
