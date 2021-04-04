import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './routes/home/Home'
import { Switch, Route } from 'react-router-dom'
import Login from './routes/users/Login'
import Register from './routes/users/Register'

const App = () => {
  return (
    <>
    <Header/>
    <Switch>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/" component={Home}/>
    </Switch>
    <Footer/>
    </>
  )
}

export default App

