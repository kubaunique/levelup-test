import React from 'react'
import logo from '../assets/logo.png'

const CardRightRegister = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Вы успешно зарегистрированы!")
  }

  return (
    <div className="card-right">
      <img src={logo} alt="LevelUP Logo" className="logo" />
      <form className="registration-form" onSubmit={handleSubmit}>
        <label htmlFor="school">Выберите Школу</label>
        <select id="school" required>
          <option disabled selected>Например: Школа №44</option>
          <option>Школа №44</option>
          <option>Школа №70</option>
          <option>Гимназия №6</option>
        </select>

        <label htmlFor="class">Выберите Класс</label>
        <select id="class" required>
          <option disabled selected>Например: 9</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
        </select>

        <button type="submit" className="next-btn">Дальше</button>
      </form>
    </div>
  )
}

export default CardRightRegister
