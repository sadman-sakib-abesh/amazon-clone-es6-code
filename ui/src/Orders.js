import React,{useEffect,useState} from 'react';
import Order from './Order';
import { useStateValue } from './StateProvider';
import {db} from './firebase'

const Orders=()=> {
    const [{basket,user},dispatch]=useStateValue()
    const [orders,setOrders]=useState([])




    useEffect(()=>{

        if(user){
            db.collection('users').doc(user?.uid).collection('orders').orderBy('created','desc').onSnapshot(snapshot=>(
                setOrders(snapshot.docs.map(doc=>({
                    id:doc.id,
                    data:doc.data()
                })))
                ))

        }else{
            setOrders([])
        }

   


},[user])



useEffect(()=>{
    dispatch({
        type:"EMPTY_BASKET"
    })
})


    return (
        <div classname="orders">
            <h1>your orders</h1>

<div className="orders_order">

    {orders?.map(order=>
        <Order order={order}/>
    )}
</div>


        </div>
    );
}

export default Orders;