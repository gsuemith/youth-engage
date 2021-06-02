import React from 'react'

const Features = () => {
  return (
  <>
  {/* <!-- Blurb --> */}
  <section>
    <h1>Welcome Message</h1>
    <p>Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla lorem.</p>
  </section>

  {/* <!-- Features --> */}
  <section className="features alt">
    <article className="icon solid fa-laptop">
      <h3>Step 1: Create Account</h3>
      <p>Log in or create your account to be able use our web site's features.</p>
    </article>
    <article className="icon solid fa-save">
      <h3>Step 2: Register</h3>
      <p>Register for Summer 2021!</p>
    </article>
    <article className="icon solid fa-paper-plane">
      <h3>Step 3: Trip Signup</h3>
      <p>Sign up, give permission, and pay for trips and activities.</p>
    </article>
    <article className="icon fa-calendar">
      <h3>Step 3: Get Involved</h3>
      <p>Checkout the calendar and leave messages.</p>
    </article>
  </section>    
  </>
  )
}

export default Features
