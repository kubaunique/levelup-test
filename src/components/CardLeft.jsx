import React from 'react'
import lessonImg from '../assets/lesson-img.png'

const CardLeft = () => {
  return (
    <div className="card-left">
      <img src={lessonImg} alt="Lesson" />
      <h2>Добро Пожаловать!</h2>
      <p className="text-sm text-center">
        LevelUP – инновационная онлайн-платформа для изучения STEM. Мы открываем доступ к знаниям, развиваем мышление и помогаем каждому раскрыть свой потенциал через интерактивные курсы и поддержку репетиторов.
      </p>
    </div>
  )
}

export default CardLeft
