import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import { logIn } from '../../state/actions'

const Login = () => {
  const dispatch = useDispatch()
  const { push } = useHistory()

  const login = e => {
    e.preventDefault();
    dispatch(logIn({name:'hello world'}))
    push("/")
  }

  return (
    <section>
      <h1>Login</h1>
      <span onClick={login} className="button">Log In</span>
    </section>
  )
}

export default Login
