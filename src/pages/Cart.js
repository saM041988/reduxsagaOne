import React from 'react'
import {
    Link
  } from "react-router-dom";
  import { useSelector } from 'react-redux';

const Cart = () => {

    const cartItem = useSelector((state)=>state.cartItem);
    const amount = cartItem.length && cartItem.map(item=>item.price).reduce((prev,next)=>prev+next)
  return (
    <>
        <div className='container my-5'>
            <Link to='/'>Product List</Link>
            <h3>Add to Cart Page</h3>
            <div className='row'>
                <div className='col-md-9'>
                    <table>
                        <tr className='cart-head'>
                        {/* <td className='mr-5 '>Photo</td> */}
                            <td className='mr-5 '>Name</td>
                            <td className='my-2 mx-2'>Price</td>
                            <td className='my-2 mx-2'>Color</td>
                            <td className='my-2 mx-2'>Brand</td>
                            <td className='my-2 mx-2'>Catagory</td>
                        </tr>
                        {
                            cartItem.map((item)=>{
                                return(
                                    <tr key={item.id} className='cart-list'>
                                        {/* <td className='mr-5 '>{item.photo}</td> */}
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.color}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.category}</td>
                                </tr>
                                )
                                
                            })
                        }
                    </table>
                </div>
                <div className='col-md-3 price-total py-3'>
                    
                    <div className='amount'><h5>Amount : {amount}</h5></div>
                    <div className='discount'><h5>Discount : {amount/10}</h5></div>
                    <div className='shipping'><h5>Shipping Fee : 0</h5></div>
                    <div className='total'><h4>Total Price : {amount-(amount/10)}</h4></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart