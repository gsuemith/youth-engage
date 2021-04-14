import React, { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../contexts';
import { logOut } from '../state/actions'

const Header = () => {
  const { isLoggedIn, user } = useContext(UserContext)
  const dispatch = useDispatch()
  const { push } = useHistory()

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'assets/js/main.js'
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    if(user)
    console.log(user.name)
  }, [user])

  const handleLogout = e => {
    e.preventDefault();
    console.log('!');
    dispatch(logOut)
    localStorage.removeItem('token');
  }

  return (
  // <!-- Header -->
  <header id="header">

    {/* <!-- Logo --> */}
    <span className="logo">
      <Link to="/register">Summer Friendship</Link>
      <span>By Holy Family</span>
      {user && <span>{user.name}</span>}
    </span>

    {/* <!-- Nav --> */}
    <nav id="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        
          
        <li>
          {isLoggedIn ? <span className="icon solid fa-angle-down">Dropdown</span> : <span/>}
          <ul>
            <li><Link to="/#">Option One</Link></li>
            <li><Link to="/#">Option Two</Link></li>
            <li><Link to="/#">Option Three</Link></li>
            <li>
              <Link to="/#">Submenu</Link>
              <ul>
                <li><Link to="/#">Option One</Link></li>
                <li><Link to="/#">Option Two</Link></li>
                <li><Link to="/#">Option Three</Link></li>
                <li><Link to="/#">Option Four</Link></li>
              </ul>
            </li>
          </ul>
        </li>
        
        <li><Link to="/register">Register</Link></li>
        {/* <li><Link to="generic.html">Generic</Link></li>
        <li><Link to="elements.html">Elements</Link></li> */}
        { 
          isLoggedIn
          ?
          <li><Link to="/" className="button" onClick={handleLogout}>Log Out</Link></li>
          :
          <li><Link to="/login" className="button">Log In</Link></li>
        }
      </ul>
    </nav>
  </header>
  )
}

export default Header
