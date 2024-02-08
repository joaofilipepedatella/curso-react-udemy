import './Auth.css'

//Components
import { Link } from 'react-router-dom'

//Hooks
import { useState, useEffect } from 'react'

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      name, 
      email,
      password,
      confirmPassword,
    }
  }



  return (
    <div id='register'>
      <h2>ReactGram</h2>
      <p className='subtitle'>Cadastre-se para ver as fotos dos seus amigos!</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder='E-mail' /> 
        <input type="password" placeholder='Senha' />
        <input type="password" placeholder='Confirmar senha' />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já possui uma conta? <Link to='/login'>Clique Aqui!</Link>
      </p>
    </div>
  )
}

export default Register