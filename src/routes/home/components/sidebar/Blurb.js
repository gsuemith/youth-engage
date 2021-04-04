import React from 'react'

const Blurb = () => {
  return (
    <>
    {/* <!-- Blurb --> */}
    <section>
      <h2>Blurb</h2>
      <p>Fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem sed euismod placerat. Vivamus porttitor et magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper lorem ipsum.</p>
      <ul className="actions">
        <li><a href="/#" className="button">Learn More</a></li>
      </ul>
    </section>

  {/* <!-- Featured posts --> */}
    <section className="featured-posts">
      <h2>Featured Post</h2>
      <article>
        <a href="/#" className="image fit"><img src="images/pic05.jpg" alt=""/></a>
        <header>
          <span className="date">September 19, 2016</span>
          <h3><a href="/#">Non velit accumsan cursus gravida amet sapien</a></h3>
        </header>
        <p>Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis varius.</p>
        <ul className="actions">
          <li><a href="/#" className="button">Continue Reading</a></li>
        </ul>
      </article>
    </section>
    </>
  )
}

export default Blurb
