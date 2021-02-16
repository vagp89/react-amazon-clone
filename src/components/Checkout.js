import React from 'react'
import "./Checkout.css"
import Subtotal from '../components/Subtotal.js'

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primeday/PD18/AAFeedback/Bruno/1500x300_Starts_Banner_v2._CB474351192_.gif"
          alt=""
        />
        <div>
          <h2 className="checkout_title">
            Your shopping basket
          </h2>
          {/*basketItem*/}
          {/*basketItem*/}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout