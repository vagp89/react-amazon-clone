import React from 'react'
import './Payment.css'
import  { useStateValue } from "../StateProvider";
import CheckoutProduct from '../components/CheckoutProduct.js';
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from  "@stripe/react-stripe-js";
import { useState, useEffect } from 'react';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer"
import axios from '../axios';
import { db } from "../firebase";


const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [processing, setProcesing] = useState(false)
  const [succeeded, setSucceeded] = useState("")
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the special  stripe secret which allows us to charge a custumer
    //important
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket)* 100}`
      });
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();

  }, [basket])
   console.log("the secret >>>", clientSecret)

  const handleSubmit = async (event) => {
    //fancy stripe code
    event.preventDefault();
    setProcesing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
    //paymentIntent = payment confirmation
    db
    .collection('users')
    .doc(user?.id)
    .collection('orders')
    .doc(paymentIntent.id)
    .set({
      bassket: basket,
      amount: paymentIntent.amount,
      created: paymentIntent.created
    })


      setSucceeded(true);
      setError(null);
      setProcesing(false);

      dispatch({
        type:'EMPTY_BASKET'
      })

      history.replace('/orders')
    })
  }

  const handleChange = event => {
    //here we'll listen the changes in the card element
    // display any errors  as the custumer types card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");

  }

  return (
    <div className="payment">

      <div className="payment_container">
        <h1>
          Checkout (
            <Link to="/checkout"> {basket?.length} items </Link>)
        </h1>

        {/* payment-section*/ }
        <div className="payment_section">
          <div className="payment_title">
            <h3> Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p> 123 Otto Suhr Allee</p>
            <p> Berlin, Germany</p>

          </div>

        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3> Review Items and delivery</h3>
            <div className="payment_items">
              {basket.map(item => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
                ))}
            </div>
          </div>


        </div>
        {/*Payment- section*/}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>

          </div>
          <div className="payment_details">
            {/*magic*/}
            <form onSubmit={handleSubmit} >
              <CardElement onChange={handleChange}/>
              <div className= "price_container">
                 <CurrencyFormat
                   renderText={(value) => (
                      <h3>Order Total:{value}</h3>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thounsandSeparator={true}
                    prefix={"€"}

                 />
                 <button disabled={processing || disabled || succeeded}>
                   <span> {processing ? <p>Processing</p> : "Buy Now"} </span>
                 </button>
              </div>
              {/* error*/}
              {error && <div>{error}</div>}
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
