import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const CardRightLogin = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    // пока Google логики нет — отправим на регистрацию
    navigate('/register')
  }

  return (
    <div className="card-right">
      <img src={logo} alt="LevelUP Logo" />
      <div className="login-group">
        <h3>Вход в Аккаунт</h3>
        <button id="loginBtn" onClick={handleLogin}>Google CAEDMI</button>
      </div>
      <p className="small-text">
        Вход доступен только для учеников и учителей школ с CAEDMI-ссылкой. <br />
        При возникновении вопросов обратитесь к вашему преподавателю.
      </p>
    </div>
  )
}

export default CardRightLogin
