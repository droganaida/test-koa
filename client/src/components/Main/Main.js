import React from 'react'

import TypeHolder from '../TypeHolder/TypeHolder'
import Masonry from '../Masonry/Masonry'

import libraries from './libraries.json'

import style from './styles.scss'

const Main = () => (
  <main className={style.main}>
    <h1 className={style.title}>Выбери файл и инструмент нарезки</h1>
    <TypeHolder libraries={libraries} />
    <Masonry />
  </main>
)

export default Main
