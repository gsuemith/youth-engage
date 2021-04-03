import React from 'react'

const Banner = () => {
  return (
  <section id="banner">
    <article data-position="bottom right">
      <div className="inner">
        <img src="images/slide01.jpg" alt=""/>
        <h2>Ultricies sed magna</h2>
        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor ipsum dolor.</p>
        <ul className="actions">
          <li><a className="button large" href="/#">Magna sed dolor</a></li>
        </ul>
      </div>
    </article>
    <article data-position="top right">
      <div className="inner">
        <img src="images/slide02.jpg" alt=""/>
        <h2>Sed mattis nunc lorem</h2>
        <p>Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida fringilla.</p>
        <ul className="actions">
          <li><a className="button large" href="/#">Magna sed dolor</a></li>
        </ul>
      </div>
    </article>
    <article data-position="right">
      <div className="inner">
        <img src="images/slide03.jpg" alt=""/>
        <h2>Nisl sed vitae</h2>
        <p>Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac magna consequat purus ipsum consequat.</p>
        <ul className="actions">
          <li><a className="button large" href="/#">Magna sed dolor</a></li>
        </ul>
      </div>
    </article>
    <article data-position="center">
      <div className="inner">
        <img src="images/slide04.jpg" alt=""/>
        <h2>Porta ultricies consectetur</h2>
        <p>Mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt lorem ipsum dolor sit amet. Magna tellus fusce tincidunt lorem.</p>
        <ul className="actions">
          <li><a className="button large" href="/#">Magna sed dolor</a></li>
        </ul>
      </div>
    </article>
  </section>
  )
}

export default Banner
