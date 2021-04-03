import React from 'react'

const Features = () => {
  return (
  <>
  {/* <!-- Blurb --> */}
  <section>
    <h1>Sed mattis nunc lorem</h1>
    <p>Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla lorem.</p>
  </section>

  {/* <!-- Features --> */}
  <section className="features alt">
    <article className="icon fa-save">
      <h3>Sed mattis nunc</h3>
      <p>Duis non efficitur nisi, sed justo. Maecenas sagittis semper.</p>
    </article>
    <article className="icon solid fa-laptop">
      <h3>Porta ultricies</h3>
      <p>Maecenas sagittis felis ac sagittis semper. Curabitur purus leo.</p>
    </article>
    <article className="icon solid fa-paper-plane">
      <h3>Magna tellus</h3>
      <p>Auctor orci eu dolor consectetur, interdum ullamcorper ante.</p>
    </article>
  </section>    
  </>
  )
}

export default Features
