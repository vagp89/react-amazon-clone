
import { useState, useEffect } from 'react';
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import './Orders.css'
import Order from './Order'

const Orders = () => {
  const [{basket, user}, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
      db
      .collection('users')// we access to the firebase store users  collection with this line
      .doc(user?.uid)   // we getting the specific user, we access the specific users order
      .collection('orders')  // we access the specific users order
      .orderBy('created', 'desc') // we access the specific users order and we say that we want to order by date ecreated and desc orders(more recint on the top)
      .onSnapshot(snapshot => (
          setOrders(snapshot.docs.map(doc => ({ // maping throught all the list to show them
            id: doc.id,
            data: doc.data()
          })))
        ))
    } else {
      setOrders([])
    }

  }, [user])


  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      <div className="orders_order">
        {orders?.map(order => (
          <Order order={order} />
          ))}
      </div>
    </div>
  )
}

export default Orders;
