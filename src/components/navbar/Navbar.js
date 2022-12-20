import React, {useState} from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {FaBars, FaTimes, FaCartArrowDown} from 'react-icons/fa'
import { productSearch } from '../../redux/productAction'


const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);
  const result = useSelector((state)=>state.cartItem);
  const dispatch = useDispatch();
  console.log("result in header", result )

  return (
    <>
        <div className='navbar'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3'>
                <h3 className='logo'><Link to='/'><img src='./assets/sb.png' alt='logo' className="logo-img" /></Link></h3>
              </div>
              <div className='col-md-6'>
                <input type='search' className='form-control' onChange={(event) => dispatch(productSearch(event.target.value))} placeholder='Search Here....' />

              </div>
              <div className='col-md-3'>
                <Link to='/cart'><span><FaCartArrowDown />{result.length}</span></Link>
              </div>
            </div>
            <div className='middle-header'>
               
              {/* <ul className={isMobile ? 'navlinks-mobile' : 'nav-links'}
              onClick={()=>setIsMobile(false)}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Service</Link></li>
                <li><Link to='/'>Contact</Link></li>
                <li className='signUp'><Link to='/'>Sign Up</Link></li>
              </ul>
              <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (<FaTimes />) : (<FaBars />)}
              </button> */}
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar