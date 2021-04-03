import React from 'react'

import Banner from './components/main/Banner'
import Features from './components/main/Features'
import Spotlights from './components/main/Spotlights'
import Blurb from './components/sidebar/Blurb'
import Posts from './components/sidebar/Posts'

const Home = () => {
  return (
    <div class="wrapper">
      <section className="main">
        <Banner />
        <Features />
        <Spotlights />
      </section>
      <aside class="sidebar">
        <Blurb/>
        <Posts/>
      </aside>
    </div>
  )
}

export default Home
