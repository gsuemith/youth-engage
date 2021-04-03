import React, { useEffect } from 'react'

const Header = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'assets/js/main.js'
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script)
    }
  },[])
  return (
  // <!-- Header -->
  <header id="header">

    {/* <!-- Logo --> */}
    <span class="logo">
      <a href="index.html">Faction</a>
      <span>By Pixelarity</span>
    </span>

    {/* <!-- Nav --> */}
    <nav id="nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li>
          <a href="/#" className="icon solid fa-angle-down">Dropdown</a>
          <ul>
            <li><a href="/#">Option One</a></li>
            <li><a href="/#">Option Two</a></li>
            <li><a href="/#">Option Three</a></li>
            <li>
              <a href="/#">Submenu</a>
              <ul>
                <li><a href="/#">Option One</a></li>
                <li><a href="/#">Option Two</a></li>
                <li><a href="/#">Option Three</a></li>
                <li><a href="/#">Option Four</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="generic.html">Generic</a></li>
        <li><a href="elements.html">Elements</a></li>
        <li><a href="/#" className="button">Log In</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header
