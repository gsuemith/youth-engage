import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './routes/home/Home'
import Login from './routes/users/Login'
import Register from './routes/users/Register'

import { UserContext } from './contexts'
import { useSelector } from 'react-redux'

const App = () => {
  const user = useSelector(state => state.user)
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  return (
    <UserContext.Provider value={{user, isLoggedIn}}>
      <Header/>
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home}/>
      </Switch>
      <Footer/>
    </UserContext.Provider>
  )
}

export default App

