import React, { useEffect } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { addToCart, emptyCart, removeToCart } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../../redux/productAction'

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productItem)
  console.log("data in main component", data)

 

  useEffect(()=>{
    dispatch(productList())
  },[])

  return (
    <>
      <div className='blog-section-one'>
        <div className='blog-section-first py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='blog-one-img'>
                  {/* <img src='https://wallpapercave.com/wp/wp9982755.jpg' alt='blogImg' className='w-100' /> */}
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='blog-two-content'>
                  <div className='post-meta-single'>
                    <ul>
                      <li>
                        <Link className='tag-base' to='/'>Travel</Link>
                      </li>
                      <li>
                        <Link className='date-base' to='/'>Date</Link>
                      </li>
                    </ul>
                  </div>
                  <h2>ReZoom outage left some people locked out.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Link className='btn read-more mr-3'>Read More</Link>
                  <Link className='btn cart-more' onClick={() => dispatch(emptyCart())}> Empty Cart</Link>
                  {/* <Link className='btn cart-more' onClick={() => dispatch(productList())}> Product Item</Link> */}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className='row'>
        {
          data.map((item) => {
            return (
              <div className='col-md-3 product-list' key={item.id}>
                <img src={item.photo} alt='img' style={{width:"150px"}} />
                <div>Name : {item.name}</div>
                <div>Color : {item.color}</div>
                <div>Price : {item.price}</div>
                <div>Brand : {item.brand}</div>
                <div>category : {item.category}</div>
                <div>
                  <Link className='btn cart-more' onClick={() => dispatch(addToCart(item))}> Add To Cart</Link>
                  <Link className='btn cart-more' onClick={() => dispatch(removeToCart(item.id))}> Remove To Cart</Link>
                </div>
              </div>
            )
          })
        }
        </div>
        

      </div>

    </>
  )
}

export default Home