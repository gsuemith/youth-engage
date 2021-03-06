import React from 'react'

const Posts = () => {
  return (
  // <!-- Posts -->
  <section>
    <h2>User Posts</h2>
    <ul className="posts">
      <li>
        <a href="/#">Etiam quis viverra lorem in semper lorem.</a>
        <span className="date">September 15, 2016</span>
      </li>
      <li>
        <a href="/#">Sed nisl arcu euismod sit amet nisi euismod sed cursus elementum ipsum.</a>
        <span className="date">September 15, 2016</span>
      </li>
      <li>
        <a href="/#">Arcu vivamus quis venenatis orci lorem.</a>
        <span className="date">September 15, 2016</span>
      </li>
      <li>
        <a href="/#">Veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore magna.</a>
        <span className="date">September 15, 2016</span>
      </li>
      <li>
        <a href="/#">Mauris neque quam, fermentum ut nisl vitae</a>
        <span className="date">September 15, 2016</span>
      </li>
      <li>
        <a href="/#">Convallis maximus nisl sed mattis nunc id lorem euismod amet placerat.</a>
        <span className="date">September 15, 2016</span>
      </li>
      <li>
        <a href="/#">Sed nisl arcu euismod sit amet nisi euismod sed cursus elementum ipsum.</a>
        <span className="date">September 15, 2016</span>
      </li>
    </ul>
    <ul className="actions">
      <li><a href="/#" className="button">More Posts</a></li>
    </ul>
  </section>
  )
}

export default Posts
